# React Native Kurulumu ve Borsa Uygulaması Mobil İstemcisi Yapım Rehberin
Borsa Uygulamasının mobil versionu için rehberimizin bir önceki aşamasında oluşturduğumuz Borsa Uygulaması web istemcisi üzerinde değişiklikler yapılarak ilerlenecektir. Öncelikle react-native ile Android mobil uygulama geliştirmek için gereken diğer bileşenler kurulmalıdır.
 
## Kurulum ve Ortamın Hazırlanması
* Windows için öncelikle Node, Python2 ve JDK kurulumu yapmanız gerekmektedir. React kısmında Node yüklediyseniz Python2 ve JDK yeterli olacaktır. Bunları hızlıca yükleyebilmek adına Windows için popüler bir paket yöneticisi olan [Chocolatey’i](https://chocolatey.org/) kullanabilirsiniz. Sitesinden indirdikten sonra sizde yüklü olanları atlayarak;
  ```terminal
  choco install nodejs.install 
  choco install python2 
  choco install jdk8
  ```
  komutlarıyla gereken kurulumları yapabilirsiniz. (JDK8 yüklemeniz gerektiğini unutmayınız)

* Linux için npm’i edinebilmek adına [Node.js](https://nodejs.org/en/download/package-manager/) yüklemeniz yeterlidir. 

* macOS için [Homebrew](https://brew.sh/index_tr.html) kullanarak Node.js ve Watchman kurunuz:
  ```terminal
  brew install node
  brew install watchman
  ```
* İşletim sisteminize göre gereken kurulumları yaptıktan sonra:
  ```terminal
  npm install -g react-native-cli
  ```
 Komutu ile React Native’i kurabilirsiniz.
 
* Sonrasında bu linkten [Android Studio](https://developer.android.com/studio/index.html) kurmanız gerekmektedir. Kurulum adımlarına işletim sisteminize göre [Android'in kendi sayfasındaki anlatımdan](https://developer.android.com/studio/install.html) bakabilirsiniz.
* Android Studio’yu yükledikten sonra ilk açışınızda “Custom” seçeneği üzerinden ilerleyin ve aşağıdaki bileşenlerin seçili olduğundan emin olduktan sonra “Next” ile bu bileşenleri yükleyiniz:
  * Windows/macOS:
   ```
   Android SDK
   Android SDK Platform
   Performance (Intel ® HAXM)
   Android Virtual Device
   ```
  * Linux:
   ```
   Android SDK
   Android SDK Platform
   Android Virtual Device
   ```
* Android Studio en güncel Andorid SDK’sını otomatik olarak yükler; ancak React Native, Android 6.0 (Marshmallow) SDK’sına ihtiyaç duyar. Bunu yükleyebilmek için "Welcome to Android Studio" ekranından "Configure" > "SDK Manager" seçilerek SDK Manager’a girilmelidir. (“Preferences” menüsünden “Appearance & Behavior” → “System Settings” → “Android SDK” şeklinde de erişilebilir.)
* Burada "SDK Platforms" sekmesi açıkken ve sağ alttaki “Show Package Details” seçiliyken “Android 6.0 (Marshmallow)” girdisini genişletin ve aşağıdakilerin seçili olduğundan emin olun:
  ```
  Google APIs
  Android SDK Platform 23
  Intel x86 Atom_64 System Image
  Google APIs Intel x86 Atom_64 System Image
  ```
* Daha sonra aynı pencerede "SDK Tools" sekmesine geçin ve yine sağ alttaki "Show Package Details" seçeneğinin işaretli olduğundan emin olun. Burada "Android SDK Build Tools" girdisini genişletin ve “Android SDK Build-Tools 23.0.1” bileşeninin seçili olduğundan emin olun.
* Son olarak “Apply” butonu ile bu araçları yükleyiniz.
* Bu adımdan sonra ANDROID_HOME çevresel değişkenini ayarlamanız gerekmektedir.
  * Windows için:
    ```
    Control Panel → System and Security → System → Change settings → Advanced System Settings → Environment variables → New
    ```  
    
    <img src="https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-native-client%20readme%20images/env-var.png" width="600" alt="env-var">    
  
     (Android SDK’nızı başka bir yere kurduysanız burada kurduğunuz yeri veriniz.)  
  * Linux için:  ~/.profile dosyasına(veya linux dağıtımınıza göre eşdeğerine) aşağıdaki satırları ekleyiniz.
    ```terminal
    export ANDROID_HOME=${HOME}/Android/Sdk
    export PATH=${PATH}:${ANDROID_HOME}/tools
    export PATH=${PATH}:${ANDROID_HOME}/platform-tools
    ```
  * macOS için:  ~/.profile dosyasına aşağıdaki satırları ekleyiniz.
    ```terminal
    export ANDROID_HOME=${HOME}/Library/Android/sdk
    export PATH=${PATH}:${ANDROID_HOME}/tools
    export PATH=${PATH}:${ANDROID_HOME}/platform-tools
    ```
* ANDROID_HOME çevresel değişkenini ayarladıktan sonra açık olan shell ekranlarınızı (varsa) kapatıp tekrar açınız (değişikliklerin yansıması için).
* Bu adımlardan sonra “AVD Manager” ekranından  
  ![avd-icon](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-native-client%20readme%20images/avd-icon.jpg)  
  var olan bir AVD’nizi (Android Virtual Device) düzenleyerek (edit) aşağıdaki ayarları verebilir ya da aşağıdaki ayarlarla yeni bir tane oluşturabilirsiniz:
  ```  
  Device: "Android 6.0 - API Level 23"
  CPU/ABI: “Intel Atom (x86_64)”
  ```
* Sonrasında bu sanal android cihazını başlattığınızda karşınıza bir anroid arayüzü gelmelidir:  
  <img src="https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-native-client%20readme%20images/AVD.png" width="350" alt="env-var"> 
  
* Bu sanal cihaz açıkken aşağıdaki komutları bir shell ekranından çalıştırınız:
  ````terminal
  react-native init StockMarketReactNativeClient
  cd StockMarketReactNativeClient
  react-native run-android
  ````
* Burada “StockMarketReactNativeClient” isminde bir proje oluşturmuş ve bunu çalıştırmış oldunuz. 
  (Not: Özellikle Windows sistemlerde proje klasörünün path’i çok uzun olmamalı. Bu yüzden bu projeyi yerel disklerinizden birinin hemen altına oluşturmanız önerilir.)
* Bu adımdan sonra android sanal cihazınıza baktığınızda uygulamanızın açıldığını göreceksiniz (Henüz boş bir uygulama)
* Artık geliştirme yapmaya başlayabilirsiniz. Kodda yaptığınız değişiklikler android sanal makinenizdeki uygulamanıza art arda iki defa “R” tuşuna bastığınız anda yansıyacaktır. (Biraz hızlı basmanız gerekmektedir)
* React Native, React ile aynı mantık üzerine kuruludur. React Native ile yaptığınız mobil uygulamalar mobil platformun kendi bileşenleri (component) kullanılarak oluşturulur. Bundan dolayı React Native ile yaptığınız uygulamalar, uygulamanın içine tarayıcı gömülmüş şekilde değil, native android uygulaması olarak oluşur. Bu yüzden hibrid bir mobil uygulamaya göre çok daha avantajlıdır. 
* React Projesinden aşağıdaki React Native uygulama yapımımıza göre Title.js, StockList.js, Stock.js, StockGraph.js, package.json dosyalarını yerleştirelim. Ayrıca index.js dosyasını da index.android.js olarak taşıyalım
  ### Proje Yapısı:  
  ![project_structure](https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-native-client%20readme%20images/project_structure.png)
* Şimdi oluşturduğumuz dosyaların içeriklerini aşağıdaki şekilde değiştirelim. (Not: StockList.js ve StockGraph.js dosyalarında 192.168.0.14 yazan axios.get() fonksiyonu çağrılarına kendi web serverınızın bulduğu bilgisayarın IP adresini vermeniz gerekmektedir.)
* Burada değinmemiz gereken nokta sadece HTML etiketlerini mobil bileşen etiketlerine dönüştürerek ve proje ismi gibi ufak yerlerde değişiklikler yaparak React Native'e geçişin nasıl sağlandığına dikkat edilmeli.
  #### Title.js
  ````jsx
  import React, { Component } from 'react';
  import {
      Text
  } from 'react-native';

  export default class Title extends Component {
      render() {
          return (
              <Text style={{fontWeight: 'bold', fontSize: 30}}>
                  Borsa Uygulaması
              </Text>
          );
      }
  }
  ````
 
 
  #### StockList.js
  ````jsx
  import React, { Component } from 'react';
  import {
     View
  } from 'react-native';
  import Stock from './Stock';
  import axios from 'axios';

  export default class StockList extends Component {

     constructor(props) {
         super(props);
         this.state = {stockList: []};
         axios.get(`http://192.168.0.14:8080/stock-market-webservice/api/getLastRecordsOfAllStocks`)
             .then(res => {
                 this.setState({stockList: res.data});
             });
     }

     render() {
         return (
             <View>
                 {this.state.stockList.map(function(stock, index) {
                     return <Stock key={index} lotCount={stock.stockRecord.lotCount} lotValue={stock.stockRecord.lotValue}
                                   stockName={stock.stockRecord.stockName} timestamp={stock.stockRecord.timestamp}
                                   totalValue={stock.stockRecord.totalValue} change={stock.lastLotValueChange}></Stock>;
                 })}
             </View>
         );
     }
  }
  ````

  #### Stock.js
  ````jsx
  import React, { Component } from 'react';
  import {
      Text,
      View,
      Button
  } from 'react-native';
  import Moment from 'moment';
  import StockGraph from './StockGraph';

  export default class Stock extends Component {

      constructor(props) {
          super(props);
          this.state = {getGraphButtonVisibility: true, removeGraphButtonVisibility: false, stockGraph: null};
          this.getGraph = this.getGraph.bind(this);
          this.removeGraph = this.removeGraph.bind(this);
      }

      getGraph() {
          this.setState({stockGraph: <StockGraph stockName={this.props.stockName}/>});
          this.setState({getGraphButtonVisibility: false, removeGraphButtonVisibility: true});
      }

      removeGraph() {
          this.setState({stockGraph: null});
          this.setState({getGraphButtonVisibility: true, removeGraphButtonVisibility: false});
      }

      render() {
          return (
              <View>
                  <View style={{ flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.stockName}  </Text></View>
                      <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.lotValue}  </Text></View>
                      <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.lotCount}  </Text></View>
                      <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{this.props.totalValue}  </Text></View>
                      <View style={{flexDirection: 'column'}}><Text style={{fontSize: 17}}>{Moment(this.props.timestamp).format('MMM YYYY')}  </Text></View>
                      <View style={{flexDirection: 'column'}}><Text style={{fontWeight: 'bold', fontSize: 20}}>{this.props.change}</Text></View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                      <Button onPress={this.getGraph} disabled={!this.state.getGraphButtonVisibility} title="Grafiği Oluştur"/>
                      <Button onPress={this.removeGraph} disabled={!this.state.removeGraphButtonVisibility} title="Grafiği Kaldır"/>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                      {this.state.stockGraph}
                  </View>

              </View>
          );
      }
  }
  ````


  #### StockGraph.js
  ````jsx
  import React, { Component } from 'react';
  import { View} from 'react-native';

  import { StockLine } from 'react-native-pathjs-charts'
  import axios from 'axios';

  export default class StockGraph extends Component {
     static navigationOptions = ({ navigation }) => ({
         title: `StockLine - Basic`,
     });

     constructor(props) {
         super(props);
         this.state = {graphData: [{"timestamp":0,"stockName":"ASELS","lotCount":5735352,"lotValue":0,"totalValue":6.8193336E7}]};
         axios.get(`http://192.168.0.14:8080/stock-market-webservice/api/getAllRecordsOfStock/` + this.props.stockName)
             .then(res => {
                 this.setState({graphData: res.data});
             });
     }

     render() {
         let options = {
             width: 350,
             height: 200,
             color: '#2980B9',
             margin: {
                 top: 10,
                 left: 35,
                 bottom: 30,
                 right: 10
             },
             animate: {
                 type: 'delayed',
                 duration: 200
             },
             axisX: {
                 showAxis: true,
                 showLines: true,
                 showLabels: true,
                 showTicks: true,
                 zeroAxis: false,
                 orient: 'bottom',
                 tickValues: [],
                 label: {
                     fontFamily: 'Arial',
                     fontSize: 8,
                     fontWeight: true,
                     fill: '#34495E'
                 }
             },
             axisY: {
                 showAxis: true,
                 showLines: true,
                 showLabels: true,
                 showTicks: true,
                 zeroAxis: false,
                 orient: 'left',
                 tickValues: [],
                 label: {
                     fontFamily: 'Arial',
                     fontSize: 8,
                     fontWeight: true,
                     fill: '#34495E'
                 }
             }
         }

         return (
             <View>
                 <StockLine data={[this.state.graphData]} options={options} xKey='timestamp' yKey='lotValue' />
             </View>
         )
     }
  }
  ````

  ### Index.android.js
  ````jsx
  /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

  import React, { Component } from 'react';
  import {
   AppRegistry,
   StyleSheet,
   ScrollView
  } from 'react-native';
  import Title from './Title';
  import StockList from './StockList';

  export default class ReactNativeProject extends Component {
   render() {
     return (
       <ScrollView>
         <Title />
         <StockList />
       </ScrollView>
     );
   }
  }

  AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
  ````

  #### package.json
  ````json
  {
   "name": "StockMarketReactNativeClient",
   "version": "0.0.1",
   "private": true,
   "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
   },
   "dependencies": {
    "axios": "^0.16.1",
    "moment": "^2.18.1",
    "react": "16.0.0-alpha.6",
    "react-native": "0.44.2",
    "react-native-pathjs-charts": "0.0.28"
   },
   "devDependencies": {
    "babel-jest": "20.0.3",
    "babel-preset-react-native": "1.9.2",
    "jest": "20.0.4",
    "react-test-renderer": "16.0.0-alpha.6"
   },
   "jest": {
    "preset": "react-native"
   }
  }
  ````
 
* Görüldüğü gibi render() fonksiyonlarında döndürülen içeriklerdeki etiketler dışında bileşenlerin yapısında çok fazla değişiklik yapılmamıştır. Bu etiketlerin değişmesinin sebebi yazdığımız uygulamanın native android uygulaması olacak olmasıdır. Bu yüzden android’in kendi bileşenleri kullanılarak uygulamanın geliştirilmesi gerekiyor. Örneğin div yerine view, onClick yerine onPress kullanılması gibi. Bu yüzdendir ki Facebook, React’ın sitesinde slogan olarak sadece “Write once, run anywhere.” değil, daha da ötesinde “Learn once, write anywhere.” sloganını kullanmıştır.  
  <img src="https://github.com/onurd-ck/react-and-react-native-tutorial/blob/master/tutorial%20files/stock-market-react-native-client%20readme%20images/react_native_final2.gif" width="400" alt="react_native_final">  
  
* Bunun dışında kulanılan bazı kütüphaneler değişebilir. StockGraph bileşeninin React Native versiyonunda farklı bir grafik çizdirme kütüphanesi kullanılmıştır. Bunun da sebebi yine bileşenlerin android’e uyumlu olması gerekliliğidir.
* Görüldüğü üzere tutorial kapsamında kısa bir sürede ufak değişikliklerle hem bir web uygulaması hem de bir android uygulaması geliştirilmiştir.
#### [--Ana Rehbere Geri Dön](../README.md)
#### [<--Bir Önceki Adım](../stock-market-react-client)
