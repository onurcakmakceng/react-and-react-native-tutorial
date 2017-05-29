# React ve React Native Uygulamalı Başlangıç Rehberi
Anlatıma yardımcı olması için basit bir web ve mobil Borsa Uygulaması (Simple Stock Market App) geliştirilmişdir. Geliştirilen proje 3 modülden oluşmaktadır.
* Web istemci olarak React 
  * (Modül Klasörü: [stock-market-react-client](stock-market-react-client))
* Mobil istemci olarak React Native 
  * (Modül Klasörü: [StockMarketReactNativeClient](StockMarketReactNativeClient))
* Web servis olarak Spring MVC kullanılmıştır.
  * (Modül Klasörü: [stock-market-webservice](stock-market-react-client))  
  
</br>React Native mobil uygulaması, React ile geliştirilen bir web uygulamasının sadece HTML (view/template engine) arayüz etiketlerinin değiştirilmesiyle iş mantığı kodlarının değiştirilmeden mobil uygulamaya kolayca çevirilebildiğini göstermek amacıyla yapılmıştır.

## React Nedir, Neden React?
React, bileşen tabanlı tek sayfalı web uygulamaları yapmak için geliştirilmiş açık kaynak kodlu bir JavaScript kütüphanesidir. Daha kolay, rahat ve hızlı bir şekilde web istemcisi yapılabilmesini sağlar. Geliştirilen istemci, web servisi (Backend) kısmında istenen teknolojideki servisle kolayca iletişim kurabilir. Web istemcisinin arayüz işlemlerini (arayüzün dinamikleştirilmesini) kolaylaştırır ve güzel bir görünüm sunar. Facebook şirketinin önderliğinde geliştirilmiştir. Bu yüzden gittikçe daha da popülerleşmekte, kullanımı yaygınlaşmaktadır ve sağlanan destek de üst düzeydedir. 2013 Mart’ta ilk sürümünün çıkmış olmasına rağmen günümüzde en son 15.5.4 versiyonu çıkmıştır ve bu da ne kadar büyük bir hızla geliştiğini, ilgi gördüğünü göstermektedir.  
</br>
</br>
  <img src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="350" alt="react-logo">  
</br>  
React Kullanmanın Avantajları:
* Kolay kullanım,
* Daha anlaşılır ve sade kodlar,
* Hızlı öğrenme (JSX, Javascript kodlamak gibidir. Sadece temel JavaScript ve HTML bilgisi yeterlidir),
* Web uygulamasından hızlı ve kolay bir şekilde mobil uygulamaya geçiş. (Kodu bir kere yazıp her yerde kullanabilme. JSX iş mantığı kodları aynı kalarak sadece HTML etiketleri değişiyor)
* JSX sayesinde derleme anında hataların tespit edilmesi

## Geliştirilen Borsa Uygulaması
Geliştirilen projede:
* Spring web servisi, PostgreSQL veri tabanına 5 BIST şirketinin 2015-2016 yılları arasındaki hisse değerlerinin kaydını oluşturacak ve bunları RESTful servis olarak hizmete sunacak,  
 ![database](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/main%20readme%20images/database.PNG)
* React web istemcisi, RESTful Spring web servisimiz ile JSON veri alış verişinde bulunup ekranda hisselerin son değerlerini listeleyebilecek ve her şirketin 1 senelik hisse değeri grafiğini ekrana çizebilecektir.  
  <img src="https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/complete2.png" width="500" alt="react-final">  
  
* Ve React web projesinden React Native mobil projesine geçişin ne kadar kolay olduğunu göstermek için oluşturduğumuz mobil React Native istemcisi de web istemcisinin yapabildiklerini mobil uygulama da yapabilecek.  
  <img src="https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-native-client%20readme%20images/react_native_final.gif" width="400" alt="react_native_final">  
  
</br>(Not: Bu proje, belirli bir aralığa ait örnek bir data oluşturularak yapıldığı için veriler günümüz canlı borsa verileri değildir. Bunun nedeni, proje amacının öğretici bir React rehberi hazırlamak olmasıdır. Eğer güncel verilerle canlı bir borsa uygulaması yapılmak istenirse React ve React Native istemcileri çeşitli Borsa API'lerine bağlanabilir/iletişim kurdurulabilir. (Örnek: https://apiportal.akbank.com/)

### Borsa Uygulaması Spring MVC Web Servisi Kurulumu ve Yapısı
* Web ve mobil istemcilerini yapmaya başlamadan önce veri iletişimi kuracakları web servisi hazır hale getirmeniz gerekmektedir. Bunun için oluşturduğumuz [Spring MVC Web Servisi Kurulum Rehberine](stock-market-webservice) bakınız.
* Daha sonrasında ise web servisin yapısını, kullanılan model sınıfını ve RestController'ı, RESTful fonksiyonları ve url adreslerini görüp anlayabilmek için oluşturduğumuz [Spring MVC Web Servisi Yapısına](stock-market-webservice/README-STRUCTURE.md) bakınız.

### React Kurulumu ve Borsa Uygulaması Web İstemcisi Yapımı
* Web servis kurulumunu tamamladıktan sonra React ile Borsa Uygulaması web istemcisi yapımını adım adım gerçekleştirmek için oluşturduğumuz [React Kurulumu ve Borsa Uygulaması Web İstemcisi Yapım Rehberine](stock-market-react-client) bakınız.

### React Native Kurulumu ve Borsa Uygulaması Mobil İstemcisi Yapımı
* React web istemcisini gerçekleştirdikten sonra React Native ile Borsa Uygulaması mobil web istemcisi yapımını adım adım gerçekleştirmek için oluşturduğumuz [React Native Kurulumu ve Borsa Uygulaması Mobil İstemcisi Yapım Rehberine](StockMarketReactNativeClient/README.md) bakınız.

## Kaynaklar:
- https://facebook.github.io/react/
- https://facebook.github.io/react-native/
- http://angulartr.com/angular-2-ve-react-kapismasi/
- http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png
- https://www.youtube.com/watch?v=-AbaV3nrw6E&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA&index=1                    
- https://github.com/ReactTraining/react-fundamentals/tree/hosting

