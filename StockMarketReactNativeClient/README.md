# React Native Kurulumu ve Borsa Uygulaması Mobil İstemcisi Yapım Rehberin
Tutorial’in bu kısmından sonra aynı uygulamanın react-native ile oluşturulmuş android hali incelenecektir. Bunun için öncelikle react-native ve geliştirme yapmak için gereken diğer bileşenler kurulmalıdır.
 
Kurulum aşamasında;
 
Windows için öncelikle Node, Python2 ve JDK kurulumu yapmanız gerekmektedir. React kısmında Node yüklediyseniz Python2 ve JDK yeterli olacaktır. Bunları hızlıca yükleyebilmek adına Windows için popüler bir paket yöneticisi olan Chocolatey’i kullanabilirsiniz.
 
https://chocolatey.org/
 
Sitesinden indirdikten sonra(Sizde yüklü olanları atlayınız. JDK8 yüklemeniz gerektiğini unutmayınız.):
```terminal
choco install nodejs.install 
choco install python2 
choco install jdk8
```
 
komutlarıyla gereken kurulumları yapabilirsiniz.
 
Linux için npm’i edinebilmek adına Node.js yüklemeniz yeterlidir.
 
https://nodejs.org/en/download/package-manager/ 
 
Sitesinden Linux dağıtımınıza göre Node.js indirip kurabilirsiniz.
 
 
macOS için Homebrew kullanarak Node.js ve Watchman kurunuz:
```terminal
brew install node
brew install watchman
```
 
İşletim sisteminize göre gereken kurulumları yaptıktan sonra:
```terminal
npm install -g react-native-cli
```
 
Komutu ile React Native’i kurabilirsiniz.
 
Sonrasında Android Studio kurmanız gerekmektedir.
 
https://developer.android.com/studio/index.html 
 
Sitesinden kurabilirsiniz. Kurulum adımlarına işletim sisteminize göre https://developer.android.com/studio/install.html buradan bakabilirsiniz.
 
Android Studio’yu yükledikten sonra ilk açışınızda “Custom” seçeneği üzerinden ilerleyin ve aşağıdaki bileşenleri seçili olduğundan emin olduktan sonra “Next” ile bu bileşenleri yükleyiniz:
 
Windows/macOS:
Android SDK
Android SDK Platform
Performance (Intel ® HAXM)
Android Virtual Device
 
Linux:
Android SDK
Android SDK Platform
Android Virtual Device
 
Android Studio en güncel Andorid SDK’sını otomatik olarak yükler; ancak React Native, Android 6.0 (Marshmallow) SDK’sına ihtiyaç duyar. Bunu yükleyebilmek için "Welcome to Android Studio" ekranından "Configure" > "SDK Manager" seçilerek SDK Manager’a girilmelidir. (“Preferences” menüsünden “Appearance & Behavior” → “System Settings” → “Android SDK” şeklinde de erişilebilir.)
 
Burada "SDK Platforms" tabı açıkken ve sağ alttaki “Show Package Details” seçiliyken “Android 6.0 (Marshmallow)” girdisini genişletin ve aşağıdakilerin seçili olduğundan emin olun:
 
Google APIs
Android SDK Platform 23
Intel x86 Atom_64 System Image
Google APIs Intel x86 Atom_64 System Image
 
Daha sonra aynı pencerede "SDK Tools" tabına geçin ve yine sağ alttaki "Show Package Details" seçeneğinin işaretli olduğundan emin olun. Burada "Android SDK Build Tools" girdisini genişletin ve “Android SDK Build-Tools 23.0.1” bileşeninin seçili olduğundan emin olun.
 
Son olarak “Apply” butonu ile bu araçları yükleyiniz.
 
Bu adımdan sonra ANDROID_HOME çevresel değişkenini ayarlamanız gerekmektedir.
 
Windows için:
Control Panel → System and Security → System → Change settings → Advanced System Settings → Environment variables → New
 

(Android SDK’nızı başka bir yere kurduysanız burada kurduğunuz yeri veriniz.)
 
Linux için:
 
~/.profile dosyasına(veya linux dağıtımınıza göre eşdeğerine) aşağıdaki satırları ekleyiniz:
```terminal
export ANDROID_HOME=${HOME}/Android/Sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
 
macOS için:

~/.profile dosyasına aşağıdaki satırları ekleyiniz:
 
```terminal
export ANDROID_HOME=${HOME}/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
 
ANDROID_HOME çevresel değişkenini ayarladıktan sonra açık olan shell ekranlarınızı(varsa) kapatıp tekrar açınız(değişikliklerin yansıması için).
 
Bu adımlardan sonra “AVD Manager” ekranından  var olan bir AVD(Android Virtual Device)’nizi edit’leyerek aşağıdaki ayarları verebilir yada aşağıdaki ayarlarla yeni bir tane oluşturabilirsiniz:
 
Device: "Android 6.0 - API Level 23"
CPU/ABI: “Intel Atom (x86_64)”
 
Sonrasında bu sanal android cihazını başlattığınızda karşınıza bir anroid arayüzü gelmelidir:
 

 
Bu sanal cihaz açıkken aşağıdaki komutları bir shell ekranından çalıştırınız:
```terminal
react-native init StockMarketReactNativeClient
cd StockMarketReactNativeClient
react-native run-android
```
 
Burada “StockMarketReactNativeClient” isminde bir proje oluşturmuş ve bunu çalıştırmış oldunuz. 
 
Not: Özellikle Windows sistemlerde proje klasörünün path’i çok uzun olmamalı. Bu yüzden bu projeyi yerel disklerinizden birinin hemen altına oluşturmanız önerilir.
 
Bu adımdan sonra android sanal cihazınıza baktığınızda şu ekranı görmeniz gerekmektedir:
 

 
Artık geliştirme yapmaya başlayabilirsiniz. Kodda yaptığınız değişiklikler android sanal makinenizdeki uygulamanıza iki defa “R” tuşuna bastığınız anda yansıyacaktır.
 
React Native, React ile aynı mantık üzerine kuruludur. React Native ile yaptığınız mobil uygulamalar mobil platformun kendi bileşenleri(component’leri) kullanılarak oluşturulur. Bundan dolayı React Native ile yaptığınız uygulamalar, uygulamanın içine tarayıcı gömülmüş şekilde değil, native android uygulaması olarak oluşur. Bu yüzden React ile React Native uygulama geliştirme arasında ufak farklar vardır.
 
Şimdi React ile oluşturduğumuz uygulamanın React Native haline bir göz atalım:
 
Proje yapısı:

 
 
Title.js
```jsx
import React, { Component } from 'react';
import {
   Text
} from 'react-native';
 
export default class Title extends Component {
   render() {
       return (
           <Text style={{fontWeight: 'bold'}}>
               Exchange App React Client
           </Text>
       );
   }
}
```
 
 
StockList.js
```jsx
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
```
 
Stock.js
```jsx
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
       this.state = {showButtonVisibility: true, hideButtonVisibility: false, stockGraph: null};
       this.getGraph = this.getGraph.bind(this);
       this.removeGraph = this.removeGraph.bind(this);
   }
 
   getGraph() {
       this.setState({stockGraph: <StockGraph stockName={this.props.stockName}/>});
       this.setState({showButtonVisibility: false, hideButtonVisibility: true});
   }
 
   removeGraph() {
       this.setState({stockGraph: null});
       this.setState({showButtonVisibility: true, hideButtonVisibility: false});
   }
 
   render() {
       return (
           <View>
               <View style={{ flexDirection: 'row'}}>
                   <View style={{flexDirection: 'column'}}><Text>{this.props.stockName}  </Text></View>
                   <View style={{flexDirection: 'column'}}><Text>{this.props.lotValue}  </Text></View>
                   <View style={{flexDirection: 'column'}}><Text>{this.props.lotCount}  </Text></View>
                   <View style={{flexDirection: 'column'}}><Text>{this.props.totalValue}  </Text></View>
                   <View style={{flexDirection: 'column'}}><Text>{Moment(this.props.timestamp).format('MMM YYYY')}  </Text></View>
                   <View style={{flexDirection: 'column'}}><Text>{this.props.change}</Text></View>
               </View>
               <View style={{flexDirection: 'row'}}>
                   <Button onPress={this.getGraph} disabled={!this.state.showButtonVisibility} title="Get Graph"/>
                   <Button onPress={this.removeGraph} disabled={!this.state.hideButtonVisibility} title="Remove Graph"/>
               </View>
               <View style={{flexDirection: 'row'}}>
                   {this.state.stockGraph}
               </View>
 
           </View>
       );
   }
}
```
 
 
StockGraph.js
```jsx
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
```
 
Index.android.js
```jsx
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
```
 
Görüldüğü gibi render() fonksiyonlarında döndürülen içeriklerdeki etiketler dışında bileşenlerin yapısında çok fazla değişiklik yapılmamıştır. Bu etiketlerin değişmesinin sebebi yazdığımız uygulamanın native android uygulaması olacak olmasıdır. Bu yüzden android’in kendi bileşenleri kullanılarak uygulamanın geliştirilmesi gerekiyor. Örneğin div yerine view, onClick yerine onPress kullanılması gibi. Bu yüzdendir ki Facebook, React’ın sitesinde slogan olarak “Write once, run anywhere.” değil, “Learn once, write anywhere.” sloganını kullanmıştır.
 
Bunun dışında kulanılan bazı kütüphaneler değişebilir. StockGraph bileşeninin React Native versiyonunda farklı bir grafik çizdirme kütüphanesi kullanılmıştır. Bunun da sebebi yine bileşenlerin android’e uyumlu olması gerekliliğidir.
 
Görüldüğü üzere tutorial kapsamında kısa bir sürede ufak değişikliklerle hem bir web uygulaması hem de bir android uygulaması geliştirilmiştir.

#### [--Ana Rehbere Geri Dön](../README.md)
#### [<--Bir Önceki Adım](../stock-market-react-client)
