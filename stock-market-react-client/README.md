# React Kurulumu ve Borsa Uygulaması Web İstemcisi Yapım Rehberi
## React Başlangıç İçin
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

## Borsa Uygulaması Web İstemcisi Yapımı
