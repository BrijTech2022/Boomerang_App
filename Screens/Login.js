import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  ImageBackground,
  Picker,
  ScrollView,
  FlatList,
  useState,
  Dimensions
  //CheckBox
} from 'react-native';
import { Globalstyles } from '../Styles/GlobalStyle'
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RIcon from 'react-native-vector-icons/MaterialIcons';
import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import { connect } from 'react-redux';
import { themeColor } from '../Styles/Color';
import { Loader } from '../Components/Loader';
import { notifyMessage } from '../Components/Toast';
import Store from '../Redux/Store';
import { setCartCount, setLoginState } from '../Redux/Actions';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { SafeAreaView } from 'react-native-safe-area-context';
import MDrawer from '../Components/MDrawer';

import FirstScreenStack from '../Components/FirstScreenStack';
import { RegistrationApi } from '../Api/RegistrationAPI';
const { width, height } = Dimensions.get('window');
class LoginView extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
        userId:'',
        userPassword:'',
        errUserId:'',
        errPasword:'',
        isLoading:false
    }
  }

checkLogin=()=>{
  // this.setState({isLoading:true})
  // console.log(this.props.fcmToken.token)
  if(this.state.userId=="")
  {
    this.setState({errUserId:"User Id is required"})
  }
  else{ 
    if(this.state.userPassword==""){ 
      this.setState({errPasword:"Password is required"})
    }
    else
    {
      this.setState({isLoading:true})
      let loginData={
        "userId": this.state.userId,
        "userPassword": this.state.userPassword,
        "fcmToken":this.props.fcmToken.token
      }

      // console.log(loginData)

      RegistrationApi.LoginActivity(loginData).then((data)=>{
        if(data.status==true)
        {
          let SData={
            "token":data.token,
            "userId":this.state.userId,
            "regName":data.regName,
            "mobileNo":data.mobileNo,
            "profilePic":data.profilePic!=null?data.profilePic:''
          }
        // console.log(JSON.stringify(data))
        this.setState({isLoading:false})
        Store.dispatch(setLoginState({Logout:false,UserInfo:SData,}))
        
        }
        else
        {
          this.setState({errPasword:'Invalid UserId or Password',isLoading:false})
          notifyMessage('Invalid UserId or Password')
        }
      })
      // Store.dispatch(setLoginState({Logout:false}))
    }
  }
        
}


  Login = () => {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
          {/* logo part */}
          <View style={styles.Main}>
            <Image source={require('../Icons/boomerang.png')}  
            style={{
              alignSelf:'center',
              width:width-50,
              height:40,
              marginTop:20
            }}
               />
          {/* End Logo Part  */}
            <Text style={{top:20,fontSize:28,textAlign:'center',color:themeColor,fontWeight:'bold'}}>LOGIN</Text>
            <Text style={{top:20,textAlign:'center'}}>Please enter your credential to login</Text>
            <View style={styles.loginForm}>
            
              <View style={styles.input}>
                <Text style={{fontSize:18,bottom:3,color:'#484848'}}>User Id</Text>
                <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                {/* <Feather name={"smartphone"} size={22} color={'gray'} style={{top:10,left:10}} /> */}
                <FontAwesome name={"user"} size={22} color={'gray'} style={{top:10,left:10}} />
                <TextInput
                  style={[styles.TextInput,{left:10}]}
                  placeholderTextColor="gray"
                  placeholder='User Id'
                  onChangeText={(txt)=>{this.setState({userId:txt,errUserId:''})}}
                />
                </View>
                <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errUserId}</Text>
                {/* <Text style={{color:'gray'}}>Your unique username to app</Text> */}
              </View>
              
              <View style={styles.input}>
              <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Password</Text>
                <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                <Fontisto name={"locked"} size={22} color={'gray'} style={{top:10,left:10}} />
                <TextInput
                  style={[styles.TextInput,{left:10}]}
                  placeholderTextColor="gray"
                  secureTextEntry={true}
                  placeholder='*************'
                  onChangeText={(txt)=>{this.setState({userPassword:txt,errPasword:''})}}
                />
                </View>
                <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errPasword}</Text>
              </View>
              
              {/* <View style={{flexDirection:'row',top:0}}>
              <Text style={{color:'gray'}}>Forgot your password?</Text>
              <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('ForgotPasswordScreen')}}
              >
              <Text style={{textDecorationLine:'underline',left:2}}>Reset here</Text>
              </TouchableOpacity>
              </View> */}
            </View>

          </View>
          <View style={{marginTop:'15%'}}>
          <View style={{flexDirection:'row',alignSelf:'center',bottom:10}}>
          <Text style={{color:'gray'}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('RegisterScreen')}
          >
            <Text style={{left:3,textDecorationLine:'underline'}}>Register here</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width:300,backgroundColor:themeColor,borderRadius:30}}
            onPress={()=>this.checkLogin() }
            // <FirstScreenStack {...this.props}/>}
            //  <MDrawer {...this.props}/>}
              // this.props.navigation.navigate('SansthaScreen')}
          >
            <Text style={{padding:10,textAlign:'center',color:'white',fontWeight:'bold',fontSize:20}}>LOGIN</Text>
          </TouchableOpacity>
          </View>
          
          {/* <TouchableOpacity style={styles.loginBtn}
            onPress = {() => {<MDrawer/>}}
          >
        
      </TouchableOpacity> */}
        </View>
      </ScrollView>
    )
  }

  render() {

    // if (!this.props.network.isConnected) {
    //   notifyMessage("Internet Connection Error....")
    //   // return null
    // }

    return (

      //  this.props.loginInfo.isLoggedIn?
      ////require('../Icons/logo1.png')
      <>
      <Loader loading={this.state.isLoading}/>
      <this.Login />
      </>


    );

  }
}
const mapStateToProps = (state) => {
  return {
    network: state.network,
    fcmToken:state.FToken
  };
};
export default connect(mapStateToProps)(LoginView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Main: {
   //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: '10%',

  },
  loginTxt: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 0.6,
    fontWeight:'bold'

  },
  txt: {
    fontSize: 18,
    color: 'black'
  },
  loginForm: {
    marginTop: "20%",
    width:300
  },
  TextInput: {
    padding: 8,
    width:'100%'
    // backgroundColor: '#CCCCCC',
    // borderRadius: 10,
    // borderColor:'gray',
    // borderWidth:1,
    //marginVertical: 10
  },
  input:{
    marginVertical:10,
    
    
  },
  loginBtn: {
    // width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:'40%',
    backgroundColor: "#0068e5",
  }
})