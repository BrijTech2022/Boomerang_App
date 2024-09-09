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
  import { SafeAreaView } from 'react-native-safe-area-context';
import { RegistrationApi } from '../Api/RegistrationAPI';
  
  const { width, height } = Dimensions.get('window');
  class OtpView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        timer:60,
        otp:'',
        errOtp:'',
        isLoading:false
      }
    }

  componentDidMount(){
    this.CreateOTP();
  }

  StartTimer=()=>{
    var i=58;
    const inter= setInterval(()=> {
      if(i>0)
      {
      this.setState({timer:i})
      i=i-1;
      }
      else
      {
        this.setState({timer:60})
          clearInterval(inter)   
      }
    }, 1000);
  }

  CreateOTP=()=>{
    this.setState({timer:59}); 

    this.StartTimer();
    let otpData={
      "id": 0,
      "otp": "",
      "mobileNo":this.props.route.params.Data.mobileNo
    }
    RegistrationApi.GenerateOtp(otpData).then((data)=>{
      if(data.status)
      {
        notifyMessage('OTP send successfully')
      }
      else
      {
        notifyMessage(data.message)
      }
    })
    
    // console.log(this.props.route.params.Data.mobileNo)
  }

  VerifyOTP=()=>{
    if(this.state.otp=="")
    {
      this.setState({errOtp:'OTP is required'})
    }
    else
    {
      if(this.state.errOtp=='')  
      {
        
        RegistrationApi.GetOtp(this.props.route.params.Data.mobileNo).then((data)=>{
          // console.log("OTP:==",JSON.stringify(data))
          if(data.data.length!=0)
          {
         
            if(this.state.otp!=data.data[0].otp)
            {
              this.setState({errOtp:'Wrong otp inputed'})
            }
            else
            {
              // console.log(JSON.stringify(this.props.route.params.Data))
              this.SaveRegistration()
              this.setState({errOtp:''})
            }
          }
          else
          {
            notifyMessage('OTP not found')
          }
        })
    }
  }
  }

  SaveRegistration=()=>{

    this.setState({isLoading:true})
    let ReqData={
      "regId": 0,
      "regName": this.props.route.params.Data.regName,
      "mobileNo": this.props.route.params.Data.mobileNo,
      "country": this.props.route.params.Data.country,
      "city": this.props.route.params.Data.city,
      "profilePic": "",
      "email": "",
      "userId": this.props.route.params.Data.userId,
      "userPassword":this.props.route.params.Data.userPassword,
      "dateOfBirth": this.props.route.params.Data.dateOfBirth,
      "userState": this.props.route.params.Data.userState,
      "errorMsg": ""
    }
    // console.log(ReqData)

    RegistrationApi.SaveRegistration(ReqData).then((data)=>{
      // console.log(JSON.stringify(data))
      this.setState({isLoading:false})
      notifyMessage(data.message)
      this.props.navigation.navigate('LoginScreen')
    })
    
  }
  
  
    Otp = () => {
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
              <Text style={{top:20,fontSize:28,textAlign:'center',color:themeColor,fontWeight:'bold'}}>OTP</Text>
              <Text style={{top:20,textAlign:'center'}}>Please enter OTP sent to your mobile number.</Text>
              <View style={styles.loginForm}>
            
                
                <View style={styles.input}>
                <Text style={{fontSize:18,bottom:3,color:'#484848',textAlign:'center',marginBottom:8}}>Enter OTP</Text>
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Fontisto name={"locked"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10,width:'100%'}]}
                    placeholderTextColor="gray"
                    placeholder='Enter OTP'
                    keyboardType={'number-pad'}
                    onChangeText={(txt)=>{this.setState({otp:txt,errOtp:''})}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errOtp}</Text>
                </View>

              </View>
  
            </View>
            <View style={{marginTop:'15%'}}>
            <TouchableOpacity style={{width:300,backgroundColor:themeColor,borderRadius:30}}
              onPress={()=>this.VerifyOTP()}
            >
              <Text style={{padding:10,textAlign:'center',color:'white',fontWeight:'bold',fontSize:20}}>Submit</Text>
            </TouchableOpacity>
            
            <View style={{flexDirection:'row',alignSelf:'center',bottom:10,marginTop:20}}>
            <Text style={{color:'gray'}}>Do you want to resend OTP ? </Text>
            <TouchableOpacity
              onPress={()=>{this.CreateOTP()}}
            >
              <Text style={{left:3,textDecorationLine:'underline',display:this.state.timer==60?'flex':'none'}}>Resend</Text>
            </TouchableOpacity>
            <Text style={{left:3,display:this.state.timer!=60?'flex':'none'}}>{this.state.timer}</Text>
            </View>
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
        <this.Otp />
        </>
  
  
      );
  
    }
  }
  // const mapStateToProps = (state) => {
  //   return {
  //     network: state.network,
  
  
  //   };
  // };
  export default (OtpView)
  
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
      width:width-70,
      alignSelf:'center'
    },
    TextInput: {
      padding: 8,
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