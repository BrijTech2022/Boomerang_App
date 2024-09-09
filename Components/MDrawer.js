import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import { View,StyleSheet,TouchableOpacity,Image, LogBox,Text,Linking } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {themeColor} from '../Styles/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Updicon from 'react-native-vector-icons/MaterialIcons'
import Aticon from 'react-native-vector-icons/Entypo'

import FirstScreenStack from "../Components/FirstScreenStack";
import BottomScreen from '../Screens/Bottom';
import { connect } from 'react-redux';
import Store from '../Redux/Store';
import { setLoginState } from '../Redux/Actions';
import { aboutUs, howtoplay, logout, refund, terms, transaction, wallet } from './icon';
import { dynamicSize } from './dynamicSize';
import { imageUrl } from '../Api/ApibaseUrl';
const Drawer=new createDrawerNavigator(); 
const Stack = createStackNavigator();

class MDrawer extends React.PureComponent{
        
         constructor(props){
           super(props)
    
         
         }
        
    render(){
    LogBox.ignoreAllLogs(true);
    

    return(
       
         
          <MyDrawer {...this.props} />
        // <Text>hi</Text>
                     
       )
     
    }
  }
  const mapStateToProps = (state) => {
    return {
      network: state.network,
      uInfo:state.login.UserInfo
    
    };
  };
  export default connect(mapStateToProps)(MDrawer)
  
  
   const TabView=(scrnm,props)=>
  {
    return(
      <FirstScreenStack scr={scrnm} {...props}/>
    )
  }
 function  MyDrawer(Data){
  //  console.log("draw",Data)
  return(
            
        <Drawer.Navigator
        drawerContent={props => customDrawerContent(props,Data)}
        screenOptions={{
          
          headerShown: false,
          drawerStyle: {
            // backgroundColor: 'rgba(255,255,255,0.7)',
            // backgroundColor:themeColor,
            backgroundColor:'white',
            width: 230,
          },
          drawerActiveTintColor:"red",
          drawerItemStyle:{marginVertical:-3}  ,
          drawerPosition:'left',
          
        }}
        initialRouteName="FirstScreenStack"
        
        //drawerContent={(props)=>SideBar(props) }       
        >
 
         
        <Drawer.Screen 
          name="FirstScreenStack"
          component={(props)=><FirstScreenStack {...props}/>}  
          options={{ 
          drawerLabel: 'Updates', drawerIcon: (({focused}) => <Updicon name={"update"} size={30} color={themeColor} /> ) }}
      />      
            </Drawer.Navigator>
      
 );
 }

 const customDrawerContent = (props,Data) => {
  // console.log("Drwaer",Data.uInfo.profilePic)
  
  return (
      
        <View style={{height:'100%',}}>
          <DrawerContentScrollView>
        <View style={{backgroundColor:themeColor,marginTop:-5,}}>
            <View style={{marginTop:20,marginBottom:20}}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('NewProfileScreen')}}>
            <Image style={{width:80,height:80,alignSelf:'center',borderRadius:80}} source={Data.uInfo.profilePic?{uri:imageUrl+Data.uInfo.profilePic}:require("../Icons/profileNew.png")} resizeMode={'stretch'} />
            </TouchableOpacity>
            <View style={{alignSelf:'center'}}>
              <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:18,top:5}}>{Data.uInfo.userId}</Text>
              
              <Text style={{textAlign:'center',color:'white',top:5}}>+91 {Data.uInfo.mobileNo}</Text>
            </View>
            </View>
        </View>
        {/* <Text style={{color:'#B24FC6',fontWeight:'bold',textAlign:'center',fontSize:10}}>Become a writer and earn</Text> */}
        <View>
          {/* <Text style={{textAlign:'center',color:'white',fontSize:20}}>John Linearn</Text> */}
          <View style={styles.side}></View>
          <View style={{}}>
            <View style={styles.bottomBorder}>
              <TouchableOpacity
                onPress={()=>{props.navigation.navigate('WalletScreen')}}
                style={{flexDirection:'row'}}
              >
                <Image source={wallet} style={styles.imgIcon} />
              <View style={{backgroundColor:'white'}}>
              <Text style={styles.sideTxt}>My Wallet</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.side}></View>
            <View style={styles.bottomBorder}>
            <TouchableOpacity
              onPress={()=>{props.navigation.navigate('MyTransactionScreen')}}
              style={{flexDirection:'row'}}
            >
              <Image source={transaction} style={[styles.imgIcon]} />
            <View style={{backgroundColor:'white'}}>
            <Text style={styles.sideTxt}>My Transaction</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.side}></View>
            <View style={styles.bottomBorder}>
            <TouchableOpacity
              onPress={()=>{Linking.openURL('https://boomerang.net.in/play.html')}}
              style={{flexDirection:'row'}}
            >
              <Image source={howtoplay} style={[styles.imgIcon]} />
            <View style={{backgroundColor:'white'}}>
            <Text style={styles.sideTxt}>How to Play</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.side}></View>
            <View style={styles.bottomBorder}>
              <TouchableOpacity
              onPress={()=>{Linking.openURL('https://boomerang.net.in/about.html')}}
              style={{flexDirection:'row'}}
              >
                <Image source={aboutUs} style={[styles.imgIcon]} />
              <View style={{backgroundColor:'white'}}>
              <Text style={styles.sideTxt}>About Us</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.side}></View>
            <View style={styles.bottomBorder}>
              <TouchableOpacity
              onPress={()=>{Linking.openURL('https://boomerang.net.in/Term&Condition.html')}}
              style={{flexDirection:'row'}}
              >
                <Image source={terms} style={[styles.imgIcon]} />
              <View style={{backgroundColor:'white'}}>
              <Text style={styles.sideTxt}>Terms & Condition</Text>
              </View>
            </TouchableOpacity>
            </View>

            <View style={styles.bottomBorder}>
              <TouchableOpacity
              onPress={()=>{props.navigation.navigate('RefundPolicyScreen')}}
              style={{flexDirection:'row'}}
              >
                <Image source={refund} style={[styles.imgIcon]} />
              <View style={{backgroundColor:'white'}}>
              <Text style={styles.sideTxt}>Refund Policy</Text>
              </View>
            </TouchableOpacity>
            </View>

          {/* <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/skyreadnovels/')}} style={styles.logo}>
            <Aticon name={"facebook"} size={40} color={"blue"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UCRG1oxaOD2j5Yu6zaoFIwfg')}} style={styles.logo}>
          <Aticon name={"youtube"} size={40} color={"red"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL('https://www.instagram.com/skyreadnovel/?hl=en')}} style={styles.logo}>
          <Image style={{width:40,height:30}} source={require("../Icons/instagram.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL('mailto:customersupport@skyreadnovels.com')}} style={styles.logo}>
          <Image style={{width:40,height:30}} source={require("../Icons/gmail.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL('https://twitter.com/SkyReadDigital')}} style={styles.logo}>
          <Aticon name={"twitter-with-circle"} size={40} color={"#0096FF"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL('https://www.linkedin.com/company/skyread-digital-private-limited/?originalSubdomain=in')}} style={styles.logo}>
          <Aticon name={"linkedin-with-circle"} size={40} color={"#0047AB"}/>
          </TouchableOpacity> */}
        </View>
        </View>
        <View style={{bottom:0}}>
          <TouchableOpacity 
            onPress={()=>{Store.dispatch(setLoginState({Logout:true}))}}

            style={{flexDirection:'row'}}
          >
          {/* <Ionicons name={"power"} size={20} color={'black'} style={{left:10}}/> */}

          <Image source={logout} style={[styles.imgIcon]} />
          <Text style={{color:'black',fontSize:17,padding:10}}>LogOut</Text>
          </TouchableOpacity>
        </View>
        </DrawerContentScrollView>
        </View>
        
      )
}


 const styles = StyleSheet.create({
  logo:{
    margin:10
  },
  sideTxt:{
    color:'black',fontSize:17,padding:10
  },
  bottomBorder:{
    borderBottomWidth:1,
    borderBottomColor:'gray'
  },
  imgIcon:{
    width:dynamicSize(17),
    height:dynamicSize(17),
    top:dynamicSize(15),
    marginLeft:dynamicSize(10),
    
  },
  side:{
    marginTop:dynamicSize(2)
  }
})
