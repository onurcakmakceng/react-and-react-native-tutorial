# React Kurulumu ve Borsa Uygulaması Web İstemcisi Yapım Rehberi
## Başlangıç
#### (Not: Bu bölümdeki anlatımlar rehberin devamında kullanacağımız ortamı hazırlamak için olan kurulum adımları değildir. Rehberde esas alınacak kurulum adımları NPM ile React Kurulumunun anlatıldığı bir sonraki başlıktadır.)
* React’ı birkaç şekilde kullanmaya başlayabilirsiniz. Eğer sadece denemek/incelemek istiyorsanız CodePen’deki [“Hello, world!”](https://codepen.io/gaearon/pen/rrpgNB?editors=0010) uygulamasına göz atabilirsiniz.
* Denemek yerine geliştirme yapmaya başlamak istiyorsanız birinci yöntem olarak; HTML dosyanızın içine React kütüphanesini kaynak olarak vererek geliştirme yapmaya başlayabilirsiniz. Bunun için şu iki JavaScript kütüphanesini HTML dosyasına eklemeniz gerekmektedir:
  ````html
  <script src="https://unpkg.com/react@latest/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
  ````
* Bu haliyle React kütüphanelerini kullanarak yazacağınız javascript kodlarıyla uygulamanızı geliştirebilirsiniz; ancak kodlarınızı jsx halinde yazmak istiyorsanız üçüncü bir kütüphane gereklidir:
  ````html
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  ````
* Bu kütüphaneyi de ekledikten sonra,
  ````html
  <script type="text/babel">   </script>
  ````
  etiketleri içine yazacağınız JSX kodları, React kütüphanesini kullanan JavaScript kodlarına çevrilip çalıştırılacaktır.
* Bu şekilde çalışan örnek bir [HTML dosyası](https://facebook.github.io/react/downloads/single-file-example.html)
* Dilerseniz [babeljs.io](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&code=ReactDOM.render(%0A%20%20%20%20%3Ch2%3EMerhaba!%3C%2Fh2%3E%0A)%3B) sitesinden JSX halinde yazdığınız kodların nasıl JavaScript’e çevrildiğini inceleyebilirsiniz.
## NPM ile React Kurulumu ve Ortamın Hazırlanması
* Geliştirme yapmaya başlamak, React projesi oluşturmak için bir başka yöntem ise npm kullanmaktır. Bu rehberde yukarıdaki yöntemler değil, npm kullanılarak oluşturulmuş bir proje üzerinden ilerlenecektir. Npm, JavaScript için bir paket yöneticisidir (package manager). JavaScript geliştiricilerinin kod paylaşmasını ve paylaşılan kodların güncellenmesini kolaylaştırır. Projenizi geliştirirken ihtiyaç duyduğunuz kütüphaneleri tek komutla yüklemenizi sağlar.
* Npm’i kullanmaya başlamak için bilgisayarınıza Node.js kurmanız gerekmektedir. Npm, Node.js ile birlikte yüklenir. Bu yüzden önce linkten [Node.js indirip](https://nodejs.org/en/) bilgisayarınıza kurunuz. Bu işlemden sonra npm komutlarını kullanmaya başlayabilirsiniz.
* Yeni bir React projesi oluşturmak için önce “npm install” komutu ile “create-react-app” paketini indiriniz:
  ````terminal
  npm install -g create-react-app
  ````
* Daha sonra bu “create-react-app” komutunu kullanarak “stock-market-react-client” isminde bir React projesi oluşturunuz:
  ````terminal
  create-react-app stock-market-react-client
  ````
* Bu komuttan sonra bulunduğunuz konumda “stock-market-react-client” isminde bir klasör oluşmuş olmalıdır. Daha sonra bu proje klasörünün içine girip “npm start” komutu ile sunucuyu başlatınız:
  ````terminal
  cd stock-market-react-client
  npm start
  ````
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
  ````html
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
  ````
  Gördüğünüz gibi id’si “root” olan içi boş bir div bulunmaktadır.
* [src/index.js](src/index.js) dosyası incelendiğinde;
  ````jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import registerServiceWorker from './registerServiceWorker';
  import './index.css';

  ReactDOM.render(<App />, document.getElementById('root'));

  registerServiceWorker();
  ````
  Burada gördüğünüz
  ````jsx
  ReactDOM.render(<App />, document.getElementById('root'));
  ````
  satırı; “<App />” bileşeninin, az önce [index.html](public/index.html)’de gördüğünüz id’si “root” olan div’in içinde oluşmasını sağlar.
* Sonrasında [src/App.js](src/App.js) dosyası incelendiğinde, burda App isimli bileşenin içeriğini görebilirsiniz. Burda “render()” fonksiyonunun içinde döndürülen içerik “http://localhost:3000” sayfasını açtığınızda gördüğünüz içerik ile aynıdır. Yani App bileşeni index.js tarafından index.html içindeki id’si “root” olan divin içine konmuştur.
* Artık projeyi borsa uygulamasına dönüştürmek amacıyla bir takım değişiklikler yapılacaktır.
* [src](src) klasörü altına Title.js isminde bir dosya oluşturunuz. Dosyanın içeriği şu şekilde olmalıdır:
  ````jsx
  import React, { Component } from 'react';

  class Title extends Component {
     render() {
         return (
             <h3>
                 Borsa Uygulaması
             </h3>
         );
     }
  }
  export default Title;
  ````
* Burada “Title” isminde bir bileşen oluşturmuş oldunuz. Ayrıca bu bileşenin "render()" fonksiyonunun döndüreceği HTML'i tanımlayarak bileşenin ekrana yansıtılacak arayüzü de oluşturuldu. Burada dikkat ederseniz "return" içine hiç bir string belirteci, string'in satırlara bölündüğünü ifade eden ayraçlar veya benzeri bir şey koymadan direk saf HTML halini yazabildik. Bu JSX'in sağladığı ve JavaScript'e göre çok büyük avantaj sağlayan bir özelliktir.
* Şimdi ```<App />``` bileşeninin yerine ```<Title />``` bileşeninin “index.html” içindeki id’si “root” olan div’in içine konması için [src/index.js](src/index.js) dosyasına geri dönerek içeriğini şu şekilde değiştirin:
  ````jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Title from './Title';
  import registerServiceWorker from './registerServiceWorker';
  import './index.css';

  ReactDOM.render(<Title />, document.getElementById('root'));

  registerServiceWorker();
  ````
* En yukarıda “import Title from './Title';” şeklinde oluşturduğumuz Title bileşenini import etmeyi unutmayınız. 
 
* Şimdi eğer “npm start” komutuyla başlattığınız sunucuyu kapatmadıysanız, http://localhost:3000 ’e girdiğinizde karşınıza bu şekilde bir sayfa çıkmalı:  
  ![just_title2](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/just_title2.png)
* Görüğünüz gibi App bileşeni yerine Title bileşeni index.html içine eklendi. Şimdi borsa uygulamasının diğer bileşenlerinin dosyalarını da “...\stock-market-react-client\src” klasörü altına oluşturunuz. Oluşturulacak dosyaların isimleri ve içerikleri:
  #### StockGraph.js
  ````jsx
  import React, { Component } from 'react';

  class Title extends Component {
     render() {
         return (
             <h3>
                 Grafiği daha sonra ekleyeceğiz.
             </h3>
         );
     }
  }

  export default Title;
  ````
 
  #### Stock.js
  ````jsx
  import React, { Component } from 'react';

  class Stock extends Component {

     render() {
         return (
             <tbody>
             <tr>
                 <td>Şirket adı </td>
                 <td>Hisse değeri </td>
                 <td>Hisse sayısı </td>
                 <td>Toplam değeri </td>
                 <td>Tarih </td>
                 <td>Değişim </td>
                 <td>
                     <button>Grafiği Oluştur</button>
                     <button>Grafiği Kaldır</button>
                 </td>
             </tr>
             </tbody>
         );
     }
  }

  export default Stock;
  ````
 
 
  #### StockList.js
  ````jsx
  import React, { Component } from 'react';
  import Stock from './Stock';

  class StockList extends Component {

     render() {
         return (
             <table>
                 <Stock />
                 <Stock />
                 <Stock />
                 <Stock />
                 <Stock />
             </table>
         );
     }
  }

  export default StockList;
  ````
 
 
* Son olarak “...\stock-market-react-client\src\index.js” dosyasını şu şekilde değiştiriniz:
  ````jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Title from './Title';
  import StockList from './StockList';
  import registerServiceWorker from './registerServiceWorker';
  import './index.css';

  ReactDOM.render(<div><Title /> <StockList /></div>, document.getElementById('root'));

  registerServiceWorker();
  ````
 
* Burada birkaç noktaya değinmek gereklidir. Birincisi; burada Title dışında üç bileşen(Stock, StockList, StockGraph) oluşturuldu; ancak toplamda oluşturulan dört bileşenden sadece ikisi index.js’de index.html’e gönderildi. Bunun sebebi diğer iki bileşenden “Stock” bileşeninin “StockList” bileşeninin içinde oluşuyor olmasıdır. “StockGraph” bileşeni ise “Stock” bileşeninin içinde oluşacaktır. Yani onun çocuğu olacaktır. Bu bileşenlerin kodlarına bakarsanız, döndürdükleri etiketlerde bunları görebilirsiniz.
 
* Değinilmesi gereken ikinci konu; gördüğünüz gibi “index.js” dosyasında “Title” ve “StockList” bileşenleri bir div’in içine alınarak yazıldı. Ancak bunlar zaten index.html’de id’si “root” olan bir div’in içinde yer alacaklar. Neden ikinci bir div oluşturuldu? Bunun sebebi React’ın döndürülen her içeriğin en dış katmanda tek etikette olmasını istemesidir. Bileşenleri incelerseniz hiç birinde en üst katmanda iki etiket(Örneğin iki div: ```<div><div/> <div><div/>```) döndürülmemiştir.
 
* Değinilmesi gereken üçüncü konu ise; buradaki bileşenler kaba taslak halleriyle hazırlanmıştır. Şu an içlerinde herhangi bir mantık yoktur. Bu haliyle “http://localhost:3000”’e girdiğinizde karşınıza işlevsiz bir sayfa gelecektir.  
  ![https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/without_app_logic3.png](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/without_app_logic3.png)
 
* Rehberin ilerleyen kısmında uygulama geliştirilecektir. Şimdi StockList(Stock bileşenlerinin listesini içeren bileşen) ve Stock bileşenleri üzerinde yapılacak değişiklikler ile uygulamanın gerçekten web servisten veri çekerek hisse bilgileri vermesi sağlanacaktır.
 
* “...\stock-market-react-client\src\StockList.js”  dosyasına giriniz. Dosyayı şu şekilde değiştiriniz:

  ````jsx
  import React, { Component } from 'react';
  import Stock from './Stock';
  import axios from 'axios';

  class StockList extends Component {

      constructor(props) {
          super();
          this.state = {stockList: []};
          axios.get(`http://localhost:8080/stock-market-webservice/api/getLastRecordsOfAllStocks`)
              .then(res => {
                  this.setState({stockList: res.data});
              });
      }

      render() {
          return (
              <table>
                  <tbody>
                      <tr>
                          <td><h4>Hisse Adı  &emsp;</h4></td>
                          <td><h4>Hisse Değeri (TL) &emsp;</h4></td>
                          <td><h4>Hisse Sayısı  &emsp;</h4></td>
                          <td><h4>Toplam Değer (TL) &emsp;</h4></td>
                          <td><h4>Kayıt Tarihi  &emsp;</h4></td>
                          <td><h4>Değişim  &emsp;</h4></td>
                          <td></td>
                      </tr>
                  </tbody>


                  {this.state.stockList.map(function(stock, index) {
                      return <Stock key={index} lotCount={stock.stockRecord.lotCount} lotValue={stock.stockRecord.lotValue}
                                    stockName={stock.stockRecord.stockName} timestamp={stock.stockRecord.timestamp}
                                    totalValue={stock.stockRecord.totalValue} change={stock.lastLotValueChange}></Stock>;
                  })}
              </table>
          );
      }
  }

  export default StockList;
  ````
 
* Kodu bu değişimle çalıştırmak istediğinizde çalışmayacaktır. Bunun sebebi axios isimli istek yapmaya yarayan  ayrı bir kütüphane import edilmiş ve kullanılmış olmasıdır. Bu kütüphaneyi yüklemek için proje klasörünün içindeyken şu komutu çalıştırmanız gerekmektedir:
  ````terminal
  npm install --save axios
  ````
 
* “--save” opsiyonu ile yüklediğiniz paket, projenizdeki “package.json” dosyasının “dependencies” kısmına eklenir. Bu sayede uygulamanızın düzgün çalışması için bu pakete ihtiyaç duyduğunu belirtmiş olursunuz.
 
* Npm ile uygulamanıza bir paket yükledikten sonra sunucuyu “npm start” ile yeniden başlatmanız gerekmektedir.
 
* Bu adımdan sonra uygulama çalışacaktır. Ancak önceki halinden henüz bir farkı olmayacaktır.
 
* Burada ilk gözünüze çarpan şey “constructor()” olacaktır. “constructor()” fonksiyonu, bileşen DOM içine yerleştirileceğinde, yerleştirilmeden önce çalışan fonksiyondur. Bileşen oluşmadan önce bileşen ile ilgili bazı işlemleri burada yapabilirsiniz.
 
* Her react bileşeni için iki veri tipi vardır. Bunlardan birincisi props, diğeri ise state’dir. Props bir bileşenin oluşurken aldığı ve bir daha bileşenin hayatı boyunca değişmeyecek olan verilerdir. State içindeki veriler ise değişebilir. Bu değişimler bileşeni değiştirebilir(örneğin görünümünü). constructor() bileşenin state’inin ilk değerini vermek için iyi bir yerdir.
 
* StockList.js kodunda constructor’da state’in içine stockList isminde bir boş dizi tanımlanmıştır. Daha sonra axios kütüphanesini kullanarak webservis’ten GET methodu ile gerekli veriler çekilmiştir. Veriler json dizisi şeklindedir. İstek başarılı olduğu takdirde cevabın data’sı this.setstate() kullanılarak “stockList” state’ine set edilmiştir.
  ````jsx
  this.state = {stockList: []};
  axios.get(`http://localhost:8080/stock-market-webservice/api/getLastRecordsOfAllStocks`)
     .then(res => {
         this.setState({stockList: res.data});
     });
  ````
 
  #### Örnek Veri:
  ````json
  [
     {
        "stockRecord":{
           "timestamp":1455224400000,
           "stockName":"THYAO",
           "lotCount":86205183,
           "lotValue":6.66,
           "totalValue":5.74126528E8
        },
        "lastLotValueChange":-1
     },
     {
        "stockRecord":{
           "timestamp":1455224400000,
           "stockName":"KCHOL",
           "lotCount":71888838,
           "lotValue":11.51,
           "totalValue":8.27440512E8
        },
        "lastLotValueChange":-1
     },
     {
        "stockRecord":{
           "timestamp":1455224400000,
           "stockName":"GSRAY",
           "lotCount":817816,
           "lotValue":16.9,
           "totalValue":1.382109E7
        },
        "lastLotValueChange":1
     },
     {
        "stockRecord":{
           "timestamp":1455224400000,
           "stockName":"ASELS",
           "lotCount":5735352,
           "lotValue":17.13,
           "totalValue":9.8246576E7
        },
        "lastLotValueChange":-1
     },
     {
        "stockRecord":{
           "timestamp":1455224400000,
           "stockName":"ADEL",
           "lotCount":83491,
           "lotValue":59.25,
           "totalValue":4946842.0
        },
        "lastLotValueChange":-1
     }
  ]
  ````
 
* Daha sonra render() fonksiyonu içinde this.state.stockList şeklinde stockList dizisine ulaşılıp, içindeki veri kadar <Stock /> bileşeni üretilmiştir.
  ````jsx
  return (
     <table>
         {this.state.stockList.map(function(stock, index) {
             return <Stock key={index} lotCount={stock.stockRecord.lotCount} lotValue={stock.stockRecord.lotValue}
                           stockName={stock.stockRecord.stockName} timestamp={stock.stockRecord.timestamp}
                           totalValue={stock.stockRecord.totalValue} change={stock.lastLotValueChange}></Stock>;
         })}
     </table>
  );
  ````
 
 
* Burada görüldüğü üzere, Stock bileşeni üretilirken bazı özellikler eklenmiştir(<Stock key={value} /> şeklinde). Bu şekilde Stock bileşeninin props verileri set edilmiştir. Daha sonra Stock bileşenini içeriğini yazarken bu değerler “this.props.stockName” şeklinde erişilip kullanılacaktır.
 
* Gördüğünüz gibi StockList bileşeni webservis’ten json dizisi halinde olan verileri çekip bu dizideki verilerin sayısı kadar Stock bileşenini property(props)’lerini set ederek üretmiştir. Şimdi bu verilerin nasıl kullanıldığını Stock bileşenini yazmaya başlayarak inceleyebiliriz.
 
* “...\stock-market-react-client\src\Stock.js”  dosyasına giriniz. Dosyayı şu şekilde değiştiriniz:
  ````jsx
  import React, { Component } from 'react';
  import StockGraph from './StockGraph';
  import Moment from 'moment';

  class Stock extends Component {

     constructor(props) {
         super();
         this.state = {getGraphButtonVisibility: true, removeGraphButtonVisibility: false, stockGraph: null};
         this.getGraph = this.getGraph.bind(this);
         this.removeGraph = this.removeGraph.bind(this);
     }

     getGraph() {
         this.setState({stockGraph: <StockGraph stockName={this.props.stockName} />});
         this.setState({getGraphButtonVisibility: false, removeGraphButtonVisibility: true});
     }

     removeGraph() {
         this.setState({stockGraph: null});
         this.setState({getGraphButtonVisibility: true, removeGraphButtonVisibility: false});
     }

     render() {
         return (
             <tbody>
             <tr>
                 <td>{this.props.stockName}</td>
                 <td>{this.props.lotValue}</td>
                 <td>{this.props.lotCount}</td>
                 <td>{this.props.totalValue}</td>
                 <td>{Moment(this.props.timestamp).format('MMM YYYY')}</td>
                 <td>{this.props.change}</td>
                 <td>
                     <button onClick={this.getGraph} hidden={!this.state.getGraphButtonVisibility}>Grafiği Oluştur</button>
                     <button onClick={this.removeGraph} hidden={!this.state.removeGraphButtonVisibility}>Grafiği Kaldır</button>
                 </td>
             </tr>
             <tr>
                 <td colSpan="7">
                     {this.state.stockGraph}
                 </td>
             </tr>
             </tbody>
         );
     }
  }

  export default Stock;
  ````
 
* Kodu bu değişimle çalıştırmak istediğinizde çalışmayacaktır. Bunun sebebi “moment” isimli, milisaniye cinsinde gelen unix timestamp’leri okunabilir tarihe dönüştürmeye yarayan ayrı bir kütüphane import edilmiş ve kullanılmış olmasıdır. Bu kütüphaneyi yüklemek için proje klasörünün içindeyken şu komutu çalıştırmanız gerekmektedir:
  ````terminal
  npm install --save moment
  ````
 
* Bu adımdan sonra uygulama çalışacaktır ve görüntüsü şu şekilde olacaktır:
  ![without_graph2](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/without_graph2.png)
 
* Görüldüğü üzere veriler başarıyla çekilmiş ve listeye eklenmiştir. Daha önce bakıldığında “Grafiği Oluştur” ve “Grafiği Kaldır” şeklinde iki buton varken şimdi “Grafiği Oluştur” isminde tek buton var. Bu butona tıklandığında verilerin olduğu satırın hemen altında “Grafiği daha sonra ekleyeceğiz.” yazısı oluşup buton kaybolmakta ve yerine “Grafiği Kaldır” butonu gelmektedir.
 
* Değişiklikler adım adım incelenirse; buradaki constructor()’ın içinde bileşenin state’inin içine üç farklı değişken set edilmiştir:
  ````jsx
  this.state = {getGraphButtonVisibility: true, removeGraphButtonVisibility: false, stockGraph: null};
  ````
 
* Bu üç değişkenden birincisinin (“getGraphButtonVisibility”) değeri başlangıçta “true” olarak set edilmiştir ve bu “Grafiği Oluştur” butonunun görünürlük değeri olacaktır. İkinci değişkenin (“removeGraphButtonVisibility”) başlangıçtaki değeri “false” olarak ayarlanmıştur ve bu “Grafiği Kaldır” butonunun görünürlük değeri olacaktır. Bu başlangıç değerlerinden dolayı uygulama açıldığında en başta “Grafiği Oluştur” butonu görünürken “Grafiği Kaldır” butonu görünmez. “stockGraph” değişkenine daha sonra değinilecektir. Başlangıç değeri null olarak ayarlanmıştır.
 
* Daha sonraki iki satırda:
  ````jsx
  this.getGraph = this.getGraph.bind(this);
  this.removeGraph = this.removeGraph.bind(this);
  ````
 
* constructor()’dan sonra yazılmış olan iki fonksiyona(“getGraph()” ve “removeGraph()”) “this” bağlanmıştır(bind edilmiştir). Bu yapılmadığında o fonksiyonların içinde “this.” şeklinde bir erişim yapılamaz.
 
* Sonrasındaki iki fonksiyon incelendiğinde:
  ````jsx
  getGraph() {
     this.setState({stockGraph: <StockGraph stockName={this.props.stockName} />});
     this.setState({getGraphButtonVisibility: false, removeGraphButtonVisibility: true});
  }

  removeGraph() {
     this.setState({stockGraph: null});
     this.setState({getGraphButtonVisibility: true, removeGraphButtonVisibility: false});
  }
  ````
* getGraph() fonksiyonu “Grafiği Oluştur” butonuna tıklandığında çağrılacaktır. removeGraph() fonksiyonu ise “Grafiği Kaldır” butonuna tıklandığında çağrılacaktır. getGraph() fonksiyonu ile stockGraph state’inin içine bir StockGraph bileşeni yerleştirilmiştir ve butonların görünürlükleri ayarlanmıştır. removeGraph() fonksiyonunda ise bunların tersi yapılmıştır.
 
* render() fonksiyonuna gelindiğinde ise görüldüğü üzere StockList bileşeninde Stock bileşeni oluşturulurken set edilen tüm parametreler “{this.props.example}” şeklinde erişilerek kullanılmıştır. Butonların onClick özelliklerine fonksiyonlar verilmiş, görünürlük değerleri de hidden özelliklerine verilmiştir. Burada dikkat edilmesi gerekilen bir nokta ise tıklanan butona göre içine StockGraph bileşeni yada null set edilen stockGraph state’i en altta ayrı bir satır olarak yazdırılmıştır. React ile bu şekilde yeni bileşenler üretilebilir.
 
* Görüldüğü üzere bileşenlerin state’leri değiştirilerek görünümleri farklılaştırılabilir hatta yeni bileşenler eklenebilir. Ancak props özellikleri bileşenlerin hayatı boyunca sabit kalır.
 
* Uygulamanın son halini alması için kalan son adım; “Grafiği Oluştur” butonuna tıklandığında eklenen StockGraph bileşeninin DOM’a “Grafiği daha sonra ekleyeceğiz.” yazısı eklemesi yerine gerçekten bir grafik eklemesini sağlamaktır.
 
* Bunun için “...\stock-market-react-client\src\StockGraph.js” dosyası aşağıdaki şekilde değiştirilmelidir:
  ````jsx
  import React, { Component } from 'react';
  import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
  import axios from 'axios';

  class StockGraph extends Component {
     constructor(props) {
         super(props);
         this.state = {graphData: []};
         axios.get(`http://localhost:8080/stock-market-webservice/api/getAllRecordsOfStock/` + this.props.stockName)
             .then(res => {
                 this.setState({graphData: res.data});
             });
     }

     render() {
         return (
             <LineChart width={600} height={300} data={this.state.graphData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                 <Line type="monotone" dot={false} dataKey="lotValue" stroke="#8884d8" />
                 <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                 <XAxis dataKey="timestamp" />
                 <YAxis />
                 <Tooltip />
             </LineChart>
         );
     }
  }

  export default StockGraph;
  ````
 
 
* Kodu bu değişimle çalıştırmak istediğinizde çalışmayacaktır. Bunun sebebi “recharts” isimli grafik oluşturma kütüphanesinin import edilmiş ve kullanılmış olmasıdır. Bu kütüphaneyi yüklemek için proje klasörünün içindeyken şu komutu çalıştırmanız gerekmektedir.
  ````terminal
  npm install --save recharts
  ````
 
* Bu adımdan sonra uygulamanın son halini çalıştırmış olacaksınız. Değişiklikleri incelerseniz StockGraph bileşeninin constructor()’ı içinde webservise bir istek yaptığını görebilirsiniz. Burada oluşturulacak grafiğin verileri çekiliyor ve graphData state’ine set ediliyor.
  ````jsx
  super(props);
  this.state = {graphData: []};
  axios.get(`http://localhost:8080/stock-market-webservice/api/getAllRecordsOfStock/` + this.props.stockName)
     .then(res => {
         this.setState({graphData: res.data});
     });
  ````
 
* Burada dikkat edilmesi gereken bir nokta; constructor()’ın içinde super() fonksiyonuna props’un parametre olarak verilmiş olmasıdır. Daha önceki bileşenlerde bu yapılmamıştır. Bunun sebebi diğer bileşenlerde constructor içinde props’a erişilmemesidir. Eğer constructor içinde bileşenin props değerlerine erişilmek isteniyorsa, super() fonksiyonuna props verilmelidir. Bu durum constructor dışını etkilememektedir. İki durumda da constructor dışında bileşenin props değerlerine this.props şeklinde erişilebilir. Burada bu StockGraph bileşenini oluşturan bileşenin(parent) set ettiği stockName verisine constructor içinde web servise istek yapabilmek adına this.props.stockName şeklinde erişilmiştir.
 
* render() fonksiyonunda ise ```<Linechart>, <Line>, <CartesianGrid>``` vb. gibi bileşenler göreceksiniz. Bunlar yüklediğimiz recharts kütüphanesinin bileşenleridir ve her biri en yukarıda import edilerek kullanılmıştır.
  ````jsx
  import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
  ````
 
* Gördüğünüz gibi kısa bir süre içinde bir single-page application yapmış olduk. Bileşen mantığını, bileşen oluşturma ve kaldırmayı, bileşenlerin props ve state verilerini set etmeyi ve state’ini değiştirmeyi, başka kütüphaneler kullanmayı, istek yapmayı, isteğin cevabına göre döngüsel şekilde bileşen oluşturmayı, fonksiyonları ve olay ele almayı(event handling) görmüş olduk.  
  ![complete2](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-client%20readme%20images/complete2.png)


#### [-->Bir Sonraki Adıma Geç: React Native Kurulumu ve Borsa Uygulaması Mobil İstemcisi Yapım Rehberi](/StockMarketReactNativeClient/README.md)
#### [--Ana Rehbere Geri Dön](../README.md)
#### [<--Bir Önceki Adım](../stock-market-webservice/README-STRUCTURE.md)
