# Borsa Uygulaması Spring MVC Web Servisi Kurulumu
Web servisimiz [stock-market-webservice]() klasöründe hazır bir Maven projesi olarak bulunmaktadır. Bu web servis Spring MVC ile Hibernate kullanılarak yapılmıştır ve PostgreSQL veri tabanı ile iletişim kurmaktadır. Amacımız React kütüphanesini incelemek olduğu için bu aşamada web servisin detaylarına girilmeden hazır hale getirilmesi anlatılacaktır.
## Kurulum:
* İlk aşamada PostgreSQL veri tabanını [PostgreSQL indir](https://www.postgresql.org/download/) adresinden indirip kurabilirsiniz. Kurulum sırasında “postgres” kullanıcı şifresini “toor” olarak belirlerseniz web serviste herhangi ekstra bir konfigürasyon yapmanıza gerek kalmaz. Kuruluma yardımcı olması için bu linkteki adımları izleyebilirsiniz: [PostgreSQL kurulumu](http://www.jskoleji.com/2014/03/kahve-molasi-postgresql-ve-pgadmin-kurulumu.html) 
* Kurulum tamamlandıktan sonra web servisin kullanabilmesi için “stock_market_webservice” isimli bir scheme oluşturunuz.
* Daha sonrasında [stock-market-webservice]() klasörünü IntelliJ IDE ile Maven projesi olarak açınız. 
(Başka bir IDE ile açmanız durumunda açtıktan sonra Maven çalıştırma konfigürasyonu oluşturmanız ve "jetty:run" ifadesini konfigürasyonun komut satırı parametresi alanına eklemeniz gerekmektedir.)
* Proje IntelliJ'de açıldıktan sonra projedeki [runConfigurations](runConfigurations) klasörünü aşağıdaki resimde gösterildiği gibi .idea klasörünün içine sürükleyiniz (kes yapıştır).  
   ![runConfig-1](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-webservice%20readme%20images/runConfig-1.png)
* Bu sayede çalıştırma konfigürasyonunuz hazırlanmış olacaktır. Artık sağ üst köşede oluşan çalıştırma konfigürasyonu sayesinde Spring Web Servis projemizi çalıştırabiliriz.  
   ![runConfig-2](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-webservice%20readme%20images/runConfig-2.png)
*  http://localhost:8080/ adresi React (web) ve React Native (mobil) istemcilerimizin hizmetine sunulmuştur ve rehberimizin ilerleyen kısımlarında kullanılabilmesi için açık bırakmanız gerekmektedir.
### Notlar:
##### ([src/main/java/com/stock_market_webservice/configuration/HibernateConfiguration.java](src/main/java/com/stock_market_webservice/configuration/HibernateConfiguration.java) Konfigürasyonları)
* Eğer PostgreSQL veri tabanının şifresi “toor” yerine başka bir şey ayarlanmak veya scheme adı olarak “stock_market_webservice” yerine başka bir şey kullanılmak isteniyorsa bunu [HibernateConfiguration.java](src/main/java/com/stock_market_webservice/configuration/HibernateConfiguration.java) sınıfının dataSource() fonksiyonundan ayarlayabilirsiniz.
   ```java
   ...
   @Bean
   public DataSource dataSource() {
      DriverManagerDataSource dataSource = new DriverManagerDataSource();
      dataSource.setDriverClassName("org.postgresql.Driver");
      dataSource.setUrl("jdbc:postgresql://localhost:5432/stock_market_webservice");
      dataSource.setUsername("postgres");
      dataSource.setPassword("toor");
      return dataSource;
   }
   ...
   ```
* Eğer stock-market-webservice projesini kapatıp yeniden açma gibi durumlar yaşayacaksanız her seferinde veri tabanının baştan oluşturulması yerine isterseniz ilk çalıştırmadan sonra [HibernateConfiguration.java](src/main/java/com/stock_market_webservice/configuration/HibernateConfiguration.java) sınıfının içinde hibernateProperties() fonksiyonundaki "hibernate.hbm2ddl.auto" özelliğini “create” modundan “update” moduna alarak önceden oluşturulmuş veri tabanını kullanabilirsiniz.
#### [-->Bir Sonraki Adıma Geç: Borsa Uygulaması Spring MVC Web Servisi Yapısı](README-STRUCTURE.md)
#### [<--Ana Rehbere Geri Dön](../README.md)
