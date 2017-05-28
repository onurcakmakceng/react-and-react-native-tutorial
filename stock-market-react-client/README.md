# React Kurulumu ve Borsa Uygulaması Web İstemcisi Yapım Rehberi
## Başlangıç
#### (Not: Bu bölümdeki anlatımlar rehberin devamında kullanacağımız ortamı hazırlamak için olan kurulum adımları değildir. Rehberde esas alınacak kurulum adımları NPM ile React Kurulumunun anlatıldığı bir sonraki başlıktadır.)
* React’ı birkaç şekilde kullanmaya başlayabilirsiniz. Eğer sadece denemek/incelemek istiyorsanız CodePen’deki [“Hello, world!”](https://codepen.io/gaearon/pen/rrpgNB?editors=0010) uygulamasına göz atabilirsiniz.
* Denemek yerine geliştirme yapmaya başlamak istiyorsanız birinci yöntem olarak; HTML dosyanızın içine React kütüphanesini kaynak olarak vererek geliştirme yapmaya başlayabilirsiniz. Bunun için şu iki JavaScript kütüphanesini HTML dosyasına eklemeniz gerekmektedir:
  ```html
  <script src="https://unpkg.com/react@latest/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
  ```
* Bu haliyle React kütüphanelerini kullanarak yazacağınız javascript kodlarıyla uygulamanızı geliştirebilirsiniz; ancak kodlarınızı jsx halinde yazmak istiyorsanız üçüncü bir kütüphane gereklidir:
  ```html
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  ```
* Bu kütüphaneyi de ekledikten sonra,
  ```html
  <script type="text/babel">   </script>
  ```
  etiketleri içine yazacağınız JSX kodları, React kütüphanesini kullanan JavaScript kodlarına çevrilip çalıştırılacaktır.
* Bu şekilde çalışan örnek bir [HTML dosyası](https://facebook.github.io/react/downloads/single-file-example.html)
* Dilerseniz [babeljs.io](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&code=ReactDOM.render(%0A%20%20%20%20%3Ch2%3EMerhaba!%3C%2Fh2%3E%0A)%3B) sitesinden JSX halinde yazdığınız kodların nasıl JavaScript’e çevrildiğini inceleyebilirsiniz.
## NPM ile React Kurulumu ve Ortamın Hazırlanması
* Geliştirme yapmaya başlamak, React projesi oluşturmak için bir başka yöntem ise npm kullanmaktır. Bu rehberde yukarıdaki yöntemler değil, npm kullanılarak oluşturulmuş bir proje üzerinden ilerlenecektir. Npm, JavaScript için bir paket yöneticisidir (package manager). JavaScript geliştiricilerinin kod paylaşmasını ve paylaşılan kodların güncellenmesini kolaylaştırır. Projenizi geliştirirken ihtiyaç duyduğunuz kütüphaneleri tek komutla yüklemenizi sağlar.
* Npm’i kullanmaya başlamak için bilgisayarınıza Node.js kurmanız gerekmektedir. Npm, Node.js ile birlikte yüklenir. Bu yüzden önce linkten [Node.js indirip](https://nodejs.org/en/) bilgisayarınıza kurunuz. Bu işlemden sonra npm komutlarını kullanmaya başlayabilirsiniz.
* Yeni bir React projesi oluşturmak için önce “npm install” komutu ile “create-react-app” paketini indiriniz:
  ```terminal
  npm install -g create-react-app
  ```
* Daha sonra bu “create-react-app” komutunu kullanarak “stock-market-react-client” isminde bir React projesi oluşturunuz:
  ```terminal
  create-react-app stock-market-react-client
  ```
* Bu komuttan sonra bulunduğunuz konumda “stock-market-react-client” isminde bir klasör oluşmuş olmalıdır. Daha sonra bu proje klasörünün içine girip “npm start” komutu ile sunucuyu başlatınız:
  ```terminal
  cd stock-market-react-client
  npm start
  ```
* Şimdi tarayıcınızdan “http://localhost:3000” adresine girerek React istemcinizin çalışıp çalışmadığını kontrol edebilirsiniz. Şu şekilde bir ekranla karşılaşmanız gereklidir:
![welcome-to-react](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/welcome-to-react.bmp)
* Artık dosyaları değiştirerek geliştirme yapmaya başlayabilirsiniz. Sunucu, dosyalar üzerinde yaptığınız değişiklikleri fark edip her değişiklikten sonra yazdığınız JSX kodlarını derleyerek tarayıcınızın çalıştırabileceği JavaScript koduna dönüştürecektir. Bu yüzden sunucunuzu hiç kapatıp açmadan anlık olarak kod üzerinde yaptığınız değişiklikleri “http://localhost:3000” adresine girerek sayfanızda görüntüleyebilirsiniz.
## Borsa Uygulaması Web İstemcisi Yapımı
Proje kapsamında basit bir borsa uygulaması yapılacaktır ve React rehberi bu projeyi geliştirerek ilerleyecektir. Bir önceki aşamada (NPM ile React Kurulumu) oluşturulan proje üzerinden devam edilecektir. Uygulama 5 adet şirketin borsa verilerini (hisse kaydı tarihi, hisse adı, hisse değeri, hisse sayısı, toplam değeri, hisse değeri değişimi gibi) oluşturmuş olduğumuz Spring RESTful web servis’ten çekerek kullanıcıya liste şeklinde sunar. Listedeki her şirketin yanında “Grafiği Oluştur” veya “Grafiği Kaldır” butonları bulunur. “Grafiği Oluştur” butonuna tıklandığında şirketin 2015-2016 aralığında hisse değeri verisi yine Spring RESTful web servisten çekilerek oluşturulan grafik bileşeninde sergilenir. “Grafiği Kaldır” butonu ise oluşturulmuş grafik bileşenini kaldırır.
### React ile Oluşturulacak Web İstemcisinin Yapısı:
![project_structure](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/project_structure.png)
![component_structure](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/component_structure.png)
* React, tek sayfa uygulaması(single-page application) yapmak için kullanılır. Bu tarz uygulamalar bileşen(component) tabanlıdır. Sayfada gördüğünüz neredeyse herşey bir bileşendir ve bazı bileşenler başka bileşenlerin çocuğu şeklindedir.
* Şimdi oluşturduğunuz “stock-market-react-client” isimli proje klasöründe [public/index.html](public/index.html) dosyasının body etiketleri arasına bakıldığında;
  ```html
  ...
   <body>
     <noscript>
       You need to enable JavaScript to run this app.
     </noscript>
     <div id="root"></div>
     <!--
       This HTML file is a template.
       If you open it directly in the browser, you will see an empty page.

       You can add webfonts, meta tags, or analytics to this file.
       The build step will place the bundled scripts into the <body> tag.

       To begin the development, run `npm start` or `yarn start`.
       To create a production bundle, use `npm run build` or `yarn build`.
     -->
   </body>
  </html>
  ```
  Gördüğünüz gibi id’si “root” olan içi boş bir div bulunmaktadır.
* [src/index.js](src/index.js) dosyası incelendiğinde;

#### [-->Bir Sonraki Adıma Geç: React Native Kurulumu ve Borsa Uygulaması Mobil İstemcisi Yapım Rehberi](/StockMarketReactNativeClient/README.md)
#### [--Ana Rehbere Geri Dön](../README.md)
#### [<--Bir Önceki Adım](../stock-market-webservice/README-STRUCTURE.md)

