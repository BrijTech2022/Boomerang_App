import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View,PermissionsAndroid, SafeAreaView } from 'react-native';
import  LoginStackScreen  from './Components/LoginStack';
import Store from "./Redux/Store";
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { ReduxNetworkProvider } from 'react-native-offline';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { persistStore } from "redux-persist";
import { themeColor } from './Styles/Color';
import PushNotificationController from './Components/Notification';

export default class App extends PureComponent{
  constructor(){
    super()
  }
  render(){
    return(
      <SafeAreaView style={{flex:1}}>
       <Provider store={Store}>
      <PersistGate persistor={persistStore(Store)}>
         {/* <ReduxNetworkProvider> */}
  <NavigationContainer>
  <PushNotificationController/>
    <LoginStackScreen></LoginStackScreen>
    <StatusBar style="light" backgroundColor={themeColor} />
  </NavigationContainer>
  
    {/* </ReduxNetworkProvider>  */}
    </PersistGate>
   </Provider>
   </SafeAreaView>
    )
  }
}


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
