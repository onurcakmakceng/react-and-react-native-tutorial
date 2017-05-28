# Borsa Uygulaması Spring MVC Web Servisi Kurulumu ve Yapısı
Web servisimiz [stock-market-webservice](stock-market-webservice) klasöründe hazır bir Maven projesi olarak bulunmaktadır. Bu web servis Spring MVC ile Hibernate kullanılarak yapılmıştır ve PostgreSQL veri tabanı ile iletişim kurmaktadır. Amacımız React kütüphanesini incelemek olduğu için bu aşamada web servisin detaylarına girilmeden hazır hale getirilmesi anlatılacaktır.
## Kurulum:
* İlk aşamada PostgreSQL veri tabanını [PostgreSQL indir](https://www.postgresql.org/download/) adresinden indirip kurabilirsiniz. Kurulum sırasında “root” kullanıcı şifresini “toor” olarak belirlerseniz web serviste herhangi ekstra bir konfigürasyon yapmanıza gerek kalmaz. Kuruluma yardımcı olması için bu linkteki adımları izleyebilirsiniz: [PostgreSQL kurulumu](http://www.jskoleji.com/2014/03/kahve-molasi-postgresql-ve-pgadmin-kurulumu.html) 
* Kurulum tamamlandıktan sonra web servisin kullanabilmesi için “stock_market_webservice” isimli bir scheme oluşturunuz.
* Daha sonrasında stock-market-webservice klasörünü IntelliJ veya başka bir IDE ile Maven projesi olarak açınız.
## Spring Web Servis Projesinin Yapısı:

