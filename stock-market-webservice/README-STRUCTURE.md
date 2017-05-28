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
#### [<--Ana Rehbere Geri Dön](../README.md)
