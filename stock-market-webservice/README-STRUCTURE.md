# Borsa Uygulaması Spring MVC Web Servisi Yapısı
Web servisimiz [stock-market-webservice]() klasöründe hazır bir Maven projesi olarak bulunmaktadır. Bu web servis Spring MVC ile Hibernate kullanılarak yapılmıştır ve PostgreSQL veri tabanı ile iletişim kurmaktadır.
## Yapı:
![webservce-structure](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-webservice%20readme%20images/webservice-structure.bmp)
* [StockRecord](src/main/java/com/stock_market_webservice/model/StockRecord.java) model sınıfı (tablosu) her bir tarihte bir şirkete ait hisse senedi bilgisini içermektedir. Bu modeldeki değişkenler: 
  * timestamp = kaydın tarih damgası
  * stockName = hisse adı
  * lotCount = toplam hisse sayısını
  * lotValue = bir hisse senedi fiyatını (TL)
  * totalValue = ise hisselerin toplam değerini/hacmini (TL) ifade etmektedir. 
  
  StockRecord modelimizin bir kısmı:
  ```java
  ...
  @Entity
  @Table(name = "stock_record")
  public class StockRecord implements Serializable {

     @Id
     @NotNull
     @Column(name = "timestamp", nullable = false)
     private Date timestamp;

     @Id
     @NotNull
     @Column(name = "stock_name", nullable = false)
     private String stockName;

     @NotNull
     @Column(name = "lot_count", nullable = false)
     private long lotCount;

     @NotNull
     @Column(name = "lot_value", nullable = false)
     private float lotValue;

     @NotNull
     @Column(name = "total_value", nullable = false)
     private double totalValue;
  ...
  ```
* Projede önemli olan noktalardan biri de resources altındaki [import.sql](src/main/java/com/stock_market_webservice/resources/import.sql) dosyası ile örnek borsa verilerinin veri tabanına ekleniyor olmasıdır. Örnek veri olarak 5 Borsa İstanbul şirketinin 2015-2016 arlığındaki hisse bilgileri kullanılmıştır.
* JSON veri iletişimini sağlayan RestController sınıfımız ([StockRecordController](src/main/java/com/stock_market_webservice/controllers/)) aşağıdaki gibidir:  
  ````java
    ...imports

   @RestController
   public class StockRecordController {
       @Autowired
       private StockRecordService stockRecordService;

       @CrossOrigin
       @RequestMapping(value="/api/getAllRecordsOfStock/{stockName}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
       public ResponseEntity getAllRecordsOfStock(@PathVariable String stockName) {
           return ResponseEntity.status(HttpStatus.OK).body(stockRecordService.getAllRecordsOfStock(stockName) );
       }

       @CrossOrigin
       @RequestMapping(value="/api/getLastRecordsOfAllStocks", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
       public ResponseEntity getLastRecordsOfAllStocks() {
           return ResponseEntity.status(HttpStatus.OK).body(stockRecordService.getLastRecordsOfAllStocks() );
       }
   }
  ```
* Burada istemcilerimize hizmet etmek üzere iki fonksiyonumuz vardır:
  * getAllRecordsOfStock = Hisse adını (stocName) url parametresi olarak alır, o hisseye adına ait bütün hisse kayıtlarını geri döndürür. Arayüzde grafik çizdirilmesi için kullanılacaktır. Hizmet verdiği url: http://localhost:8080/stock-market-webservice/api/getAllRecordsOfStock/{stockName} şeklindedir.
  * getLastRecordsOfAllStocks = Tüm hisselerin son hisse kayıtlarını döndürür. Aynı zamanda bir önceki kayıtlarına göre artış-azalış-sabit olma durumlarını "lastLotValueChange" değişkeninde ↓, ↔ veya ↑ değerleriyle döndürmektedir. Arayüzde hisselerin listelenmesi için kullanılacaktır. Hizmet verdiği url: http://localhost:8080/stock-market-webservice/api/getLastRecordsOfAllStocks şeklindedir
#### [-->Bir Sonraki Adıma Geç: React Kurulumu ve Borsa Uygulaması Web İstemcisi Yapım Rehberi](../stock-market-react-client)
#### [--Ana Rehbere Geri Dön](../README.md)
#### [<--Bir Önceki Adım](README.md)
