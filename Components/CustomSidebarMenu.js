import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,

  Linking,
  TouchableOpacity
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {themeColor} from '../Styles/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import DropDownPicker from 'react-native-modal-dropdown';
import {connect, useDispatch} from 'react-redux';
import {notifyMessage} from './Toast';
//import {setSession,setIsLoggedInState} from '../RestApi';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {setLoginState} from '../Redux/Actions';
import Store from '../Redux/Store';
const CustomSidebarMenu = (props) => {
  //const[Icnname,setIcon]=useState("arrow-drop-down")
   
//   const BASE_PATH =
//     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  //const proileImage = 'react_logo.png';
  const arr=[];
//   if(!props.network.isConnected && !props.loginInfo.isLoggedIn){
//      notifyMessage("Internet Connection Failed..")
//      return null;
//    }
  


  return (
     
    <SafeAreaView style={styles.DrawerBack}>
      {/*Top Large Image */}
      
      <View style={[styles.ProContainer,{}]}>
    <TouchableOpacity
        onPress={()=>{alert('hi')
            // props.navigation.navigate('ProfileScreen')
        }}
    >
      <Image
        //source={{uri: BASE_PATH + proileImage}}
        source={require('../Icons/user.png')}
        style={styles.sideMenuProfileIcon}
      />
      </TouchableOpacity>
      <Text style={[styles.SDnm]}>
       {/* {props.uInfo.Name} */}Name
      </Text>
      <Text style={[styles.SDnm,{fontSize:12,marginTop:1,marginBottom:5}]}>
       {/* {props.uInfo.EmailId} */}Email
      </Text>
      {/* <Text style={[styles.SDnm,{fontSize:15},]}>
       {props.loginInfo.data[0].Contact_Number}
      </Text>
      <Text style={[styles.SDnm,{fontSize:18},]}>
       {props.loginInfo.data[0].Email_Id}
      </Text> */}
      
      </View>


      
      <DrawerContentScrollView {...props}  
      contentContainerStyle={{ paddingTop: 2 }}>
       { 
       <DrawerItemList {...props} />
       }
      
        {/* <DrawerItem
          label="Visit Us"
         // onPress={() => Linking.openURL('http://kiezensoft.com/')}
          icon={({focused}) => <Ionicons name={"find"} size={30} color={themeColor} />} 
        /> */}
        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
            //  Linking.openURL('http://kiezensoft.com/');
            }}>
            Rate Us
          </Text> */}
          {/* <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View> */}

        {/* <View style={[styles.outContainer,{}]}
        >
          <FontAwesome name='home'size={25} style={[styles.signICON,{marginLeft:'-67%'}]} color="black"/>
          <Text style={[styles.Signout,{marginLeft:'-5%',fontSize:15,fontWeight:'normal'}]}              
                onPress={()=>{props.navigation.navigate('ShopAllScreen')}}                                                
            >
            
            SHOP ALL
          </Text>
        </View>

        <View style={[styles.outContainer,{}]}
        >
          <FontAwesome name='home'size={25} style={[styles.signICON,{marginLeft:'-67%'}]} color="black"/>
          <Text style={[styles.Signout,{marginLeft:'-20%',fontSize:15,fontWeight:'normal'}]}              
                onPress={()=>{props.navigation.navigate('ShopAllScreen')}}                                                
            >
            
            BEER
          </Text>
        </View> */}

        <View style={[styles.outContainer,{}]}>
          <FontAwesome name='power-off'size={20} style={styles.signICON} color="black"/>
          <Text style={styles.Signout}
              onPress={() => {
                alert("logout")            
            // Store.dispatch(setLoginState({Logout:true}))
            }}
            >
            
            LogOut
          </Text>
        </View>
       {// <View style={styles.outContainer}><Text></Text></View>
       }
      </DrawerContentScrollView>
      {/* <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: themeColor,
          fontWeight:'bold',
        }}>
        http://Myeatry.in
      </Text> */}
    </SafeAreaView>
  );
};


// const mapStateToProps = (state) => {
//   return {
//     network: state.network,
//     uInfo: state.login.UserInfo,

//   };
// };
// connect(mapStateToProps)
export default (CustomSidebarMenu)

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 70,
    height: 70,
    // borderRadius: 100 / 2,
    alignSelf:"center",
    marginTop:30,
    top:10
        
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },


DrawerBack: {
  flex:1,
},
signICON:{
marginLeft:'-75%',
paddingTop:8,
flexDirection:'row'
},
ProContainer:{
  width:'100%',
//   height:210,
   backgroundColor:themeColor,
   borderRadius:5,
   alignSelf:'center',
   marginTop:0,
   shadowColor:'#A9A9A9',
//    elevation:20,
},
SDnm:{

marginTop:10,

flexDirection:'row',
alignSelf:'center',
fontSize:20,
color:'white',
fontWeight:'bold',

},
Signout:{

  marginTop:'-14%',
  marginLeft:'-19%',
  flexDirection:'row',
  alignSelf:'center',
  fontSize:18,
  color:'black',
  fontWeight:'bold',
  
  },
outContainer:{
  width:'100%',
  height:40,
//    backgroundColor:themeColor,
   borderRadius:0,
   alignSelf:'center',
   marginTop:10,
   alignItems:'center',
//    shadowColor:'#A9A9A9',
//    elevation:20,
   
}


});
