import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
    Linking
    //CheckBox
  } from 'react-native';
  import { Globalstyles } from '../Styles/GlobalStyle'
  import Icon from 'react-native-vector-icons/Entypo';
  import AntIcon from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import RIcon from 'react-native-vector-icons/MaterialIcons';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Feather from 'react-native-vector-icons/Feather';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Foundation from 'react-native-vector-icons/Foundation';
  import * as React from 'react';
  import { connect } from 'react-redux';
  import { themeColor } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { notifyMessage } from '../Components/Toast';
  import Store from '../Redux/Store';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import MDrawer from '../Components/MDrawer';
  import FirstScreenStack from '../Components/FirstScreenStack';
import { ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import { RegistrationApi } from '../Api/RegistrationAPI';
import { AutocompleteDropdown,AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import SearchableDropDown from 'react-native-searchable-dropdown';
  const { width, height } = Dimensions.get('window');
  const CurrentDate=new Date();

  class RegisterView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        U_name:"",
        U_mobNo:"",
        U_country:'IN',
        U_state:"",
        U_city:"",
        U_id:"",
        U_password:"",
        U_confirmPassword:"",
        U_mail:"",
        T_Agree:false,
        dtp:false,
        valDob:"",
        countryList:[],
        errName:"",
        errMob:"",
        errMail:"",
        errUId:"",
        errdob:"",
        errCountry:"",
        errState:"",
        errCity:"",
        errPassword:"",
        errConfirmPassword:"",
        errTerm:"",
        StateList:[],
        CityList:[],
        isLoading:false
      }
    }

    componentDidMount(){
      RegistrationApi.AllCountries().then((data)=>{
        
          if(data.status)
          {
            // console.log(JSON.stringify(data.data))
            this.setState({countryList:data.data})
          }
      })
      this.GetStateList();
    }

    GetStateList=()=>{
      // console.log('hiiii')
      RegistrationApi.AllStateByCountryCode(this.state.U_country).then((data)=>{
        if(data.status)
        {
          this.setState({StateList:data.data})
        }
        // console.log(JSON.stringify(data))
      })
    }

    GetCityList=()=>{
      let ReqData={
        "state_code": this.state.U_state,
        "country_code": this.state.U_country
      }

      RegistrationApi.AllCityByStateANDCountryCode(ReqData).then((data)=>{
        if(data.status)
        {
          this.setState({CityList:data.data})
        }
      })

    }

    CheckUserId=()=>{
      if(this.state.U_id.indexOf(' ')<0)
      {
      RegistrationApi.ValidateRegistration(this.state.U_id).then((data)=>{
        if(data.status==false)
        {
          this.setState({errUId:data.message})
        }
      })
    }
    else{
      this.setState({errUId:'Space not allow in userId'})
    }
    }
  
  checkLogin=()=>{
    // this.props.navigation.navigate('OtpScreen')
    if(this.state.U_name==""){
      // notifyMessage("Name is required")
      this.setState({errName:'Name is required'})
      notifyMessage('Name is required')
    }
    else{ 
      if(this.state.U_mobNo=="")
      {
        this.setState({errMob:'Mob no is required'})
        notifyMessage('Mob no is required')
      }
      else
      {
        // if(this.state.U_mail=="")
        // {
        //   this.setState({errMail:'E-mail is required'})
        // }
        // else
        // {
      if(this.state.U_id==""){
      this.setState({errUId:"User Id is required"})
      notifyMessage('User Id is required')
      }
      else
      {
        if(this.state.errUId=="")
        {
        if(this.state.valDob=="")
        {
          this.setState({errdob:'DOB is required'})
          notifyMessage('DOB is required')
        }
        else
        {
          if(this.state.U_country=="")
          {
            this.setState({errCountry:'Country is required'})
            notifyMessage('Country is required')
          }
          else
          {
            if(this.state.U_state=="")
            {
              this.setState({errState:'State is required'})
              notifyMessage('State is required')
            }
            else
            {
              if(this.state.U_city=="")
              {
                this.setState({errCity:'City is required'})
                notifyMessage('City is required')
              }
              else
              {
                if(this.state.U_password=="")
                {
                  this.setState({errPassword:'Password is required'})
                  notifyMessage('Password is required')
                }
                else
                {
                  if(this.state.U_confirmPassword=="")
                  {
                    this.setState({errConfirmPassword:'Confirm Password is required'})
                    notifyMessage('Confirm Password is required')
                  }
                  else
                  {
                    if(this.state.U_password!=this.state.U_confirmPassword)
                    {
                      this.setState({errConfirmPassword:'Paasword and Confirm Password must be same'})
                      notifyMessage('Paasword and Confirm Password must be same')
                    }
                    else
                    {
                      if(this.state.T_Agree==false)
                      {
                        this.setState({errTerm:'Terms & Condition accept required'})
                        notifyMessage('Terms & Condition accept required')
                      }
                      else
                      {
                        let ReqData={
                          "regId": 0,
                          "regName": this.state.U_name,
                          "mobileNo": this.state.U_mobNo,
                          "country": this.state.U_country,
                          "city": this.state.U_city,
                          "profilePic": "",
                          "email": "",
                          "userId": this.state.U_id,
                          "userPassword":this.state.U_password,
                          "dateOfBirth": this.state.valDob,
                          "userState": this.state.U_state,
                          "errorMsg": ""
                        }
                        this.props.navigation.navigate('OtpScreen',{Data:ReqData})
                        // console.log(JSON.stringify(ReqData))

                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      }
    // }
    }
    }
        // Store.dispatch(setLoginState({Logout:false}))
          
  }
  
  
  Register = () => {
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
                marginTop:20,
                marginBottom:10
              }}
               />
            {/* End Logo Part  */}
              <Text style={{top:5,fontSize:25,textAlign:'center',color:themeColor,fontWeight:'bold'}}>REGISTER</Text>
              <Text style={{top:5,textAlign:'center'}}>Please enter your detail to register</Text>
              <View style={styles.loginForm}>
              
                <View style={styles.input}>
                  {/* <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Username</Text> */}
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <FontAwesome name={"users"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    placeholder='Enter Your Name'
                    onChangeText={(txt)=>{this.setState({U_name:txt,errName:""})}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errName}</Text>
                </View>
                <View style={styles.input}>
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Feather name={"smartphone"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    placeholder='Enter Your Mobile No '
                    keyboardType={'number-pad'}
                    maxLength={10}
                    onChangeText={(txt)=>{this.setState({U_mobNo:txt,errMob:""})}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errMob}</Text>
                </View>

                {/* <View style={styles.input}>
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Icon name={"mail"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    placeholder='Enter Your Email '
                    onChangeText={(txt)=>{this.setState({U_mail:txt,errMail:""})}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errMail}</Text>
                </View> */}

                <View style={styles.input}>
                  {/* <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Username</Text> */}
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <FontAwesome name={"user"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    placeholder='Enter Your UserId'
                    onChangeText={(text)=>{this.setState({U_id:text,errUId:""})}}
                    onEndEditing={()=>{this.CheckUserId()}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errUId}</Text>
                </View>

                <View style={styles.input}>
                <TouchableOpacity onPress={()=>this.setState({dtp:true})}>
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <FontAwesome5 name={"birthday-cake"} size={22} color={'gray'} style={{top:10,left:10}} />

<View style={{}}>
                         <DatePicker
                                modal
                                open={this.state.dtp}
                                date={new Date(CurrentDate.getFullYear()-18,CurrentDate.getMonth(),CurrentDate.getDate())}
                                mode={'date'}
                                maximumDate={new Date(CurrentDate.getFullYear()-18,CurrentDate.getMonth(),CurrentDate.getDate())}
                                onConfirm={(date) => {
                                    this.setState({dtp:false})
                                    // this.setState({valDob:date.getFullYear()+'-'+(date.getMonth()<10?'0'+(date.getMonth()+1):date.getMonth()+1)+'-'+date.getDate()<10?'0'+date.getDate():date.getDate(),errdob:""},()=>{
                                    //   console.log("dob:====",this.state.valDob)
                                    // })
                                    let mon=date.getMonth()<10?'0'+(date.getMonth()+1):date.getMonth()+1;
                                    let da=date.getDate()<10?'0'+date.getDate():date.getDate();
                                    this.setState({
                                      valDob:date.getFullYear()+'-'+(mon)+'-'+(da)
                                      ,errdob:""
                                    },()=>{
                                      console.log("dob:====",this.state.valDob)
                                    })
                                    }}
                                onCancel={() => {
                                    this.setState({dtp:false})
                                    }}
                                    />
                                    <TouchableOpacity onPress={()=>this.setState({dtp:true})}>
                         
                         <Text 
                            placeholder='Date Of Birth'
                            style={{
                                padding:6,
                                marginVertical:7,
                                height:35,
                                color:this.state.valDob==""?'gray':'black',
                                justifyContent:"center",                                
                                left:10
                            }}
                                                                                                           
                        >{this.state.valDob==""?"Choose Your Date of Birth":this.state.valDob}</Text></TouchableOpacity>
                        </View> 

                  </View>
                  </TouchableOpacity>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errdob}</Text>
                </View>
                
                <View style={styles.input}>
                  {/* <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Username</Text> */}
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Foundation name={"flag"} size={22} color={'gray'} style={{top:10,left:10}} />

                  <View style={{maxHeight:35,justifyContent:'center', marginVertical:5,width:'95%',left:5}}>
                   <Picker style={{color:'#666666'}} selectedValue={this.state.U_country} onValueChange={(value,index)=>{this.setState({U_country:value,errCountry:""},()=>{this.GetStateList()}) }} >
                    <Picker.Item label="Choose Your Country" value=""/>
                    {
                      (this.state.countryList)?
                      this.state.countryList.map((item,index)=>(
                        <Picker.Item label={item.name} value={item.iso2} />
                      ))
                      :""
                    }

                    </Picker>

                    {/* <AutocompleteDropdown
                    dataSet={this.state.countryList}
                    suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                    /> */}


          {/* <SearchableDropDown

            // onItemSelect={(item) => {
            //   const items = this.state.selectedItems;
            //   items.push(item)
            //   this.setState({ selectedItems: items });
            // }}

            containerStyle={{ padding: 5 }}
            // onRemoveItem={(item, index) => {
            //   const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
            //   this.setState({ selectedItems: items });
            // }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={this.state.countryList}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        /> */}

                      </View> 
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errCountry}</Text>
                </View>

                <View style={styles.input}>
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Feather name={"check-circle"} size={22} color={'gray'} style={{top:10,left:10}} />

                  <View style={{maxHeight:35,justifyContent:'center', marginVertical:5,width:'93%',left:5}}>
                    <Picker style={{color:'#666666'}} selectedValue={this.state.U_state} onValueChange={(value,index)=>{this.setState({U_state:value,errState:""},()=>{this.GetCityList()}) }} >
                    <Picker.Item label="Choose Your State" value="" />
                    {
                      (this.state.StateList)?
                        this.state.StateList.map((item,index)=>(
                              <Picker.Item label={item.name} value={item.state_code} />
                        )):""
                    }
                                
                    </Picker>
                  </View>

                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errState}</Text>
                </View>

                <View style={styles.input}>
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <FontAwesome5 name={"city"} size={22} color={'gray'} style={{top:10,left:10}} />

                  <View style={{maxHeight:35,justifyContent:'center', marginVertical:5,width:'91%',left:5}}>
                    <Picker style={{color:'#666666'}} selectedValue={this.state.U_city} onValueChange={(value,index)=>{this.setState({U_city:value,errCity:""})}} >
                    <Picker.Item label="Choose Your City" value="" />
                    {
                      (this.state.CityList)?
                        this.state.CityList.map((item,index)=>(
                        <Picker.Item label={item.name} value={item.name} />
                        )):""
                    }
                    </Picker>
                  </View>

                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errCity}</Text>
                </View>

                
                <View style={styles.input}>
                {/* <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Password</Text> */}
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Fontisto name={"locked"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    placeholder='Enter New Password'
                    onChangeText={(text)=>{this.setState({U_password:text,errPassword:""})}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errPassword}</Text>
                </View>

                <View style={styles.input}>
                {/* <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Password</Text> */}
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Fontisto name={"locked"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    placeholder='Enter Confirm Password'
                    onChangeText={(text)=>{this.setState({U_confirmPassword:text,errConfirmPassword:""})}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errConfirmPassword}</Text>
                </View>

                <View style={styles.input}>
                  {/* <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Username</Text> */}
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Icon name={"slideshare"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    placeholder='Enter Refer Code'
                    
                  />
                  </View>
                </View>

                <View style={styles.input}>
                  <View style={{flexDirection:'row'}}>
                  <View>
                    <TouchableOpacity
                      onPress={()=>{this.setState({T_Agree:!this.state.T_Agree,errTerm:""})}}
                    >
                      {
                        this.state.T_Agree?
                        <Fontisto name={"checkbox-active"} size={22} color={'gray'} style={{}} />
                        :
                        <Fontisto name={"checkbox-passive"} size={22} color={'gray'} style={{}} />
                      }
                    
                    </TouchableOpacity>

                  </View>
                  <Text style={{fontSize:15,bottom:3,color:'#484848',marginLeft:7}}>I clarify that i'm above 18 years by registering, I am agree to <TouchableOpacity
                    onPress={()=>{Linking.openURL('https://boomerang.net.in/Term&Condition.html')}}
                  >
                    <Text style={{textDecorationLine:'underline',top:3}}>Terms & Condition</Text>
                    </TouchableOpacity>
                  </Text>
                  </View>
                  {/* <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <Icon name={"slideshare"} size={22} color={'gray'} style={{top:10,left:10}} />
                  <TextInput
                    style={[styles.TextInput,{left:10}]}
                    placeholderTextColor="gray"
                    placeholder='Enter Refer Code'
                    
                  /> */}
                  {/* </View> */}

                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errTerm}</Text>
                </View>
              </View>
  
            </View>
            <View style={{marginTop:'5%',marginBottom:5}}>
            <View style={{flexDirection:'row',alignSelf:'center',bottom:10}}>
            <Text style={{color:'gray'}}>Already have an account?</Text>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('LoginScreen')}
            >
              <Text style={{left:3,textDecorationLine:'underline'}}>Login</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width:300,backgroundColor:themeColor,borderRadius:30}}
              onPress={()=>this.checkLogin() }
              // <FirstScreenStack {...this.props}/>}
              //  <MDrawer {...this.props}/>}
                // this.props.navigation.navigate('SansthaScreen')}
            >
              <Text style={{padding:10,textAlign:'center',color:'white',fontWeight:'bold',fontSize:20}}>REGISTER</Text>
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
        <this.Register />
        </>
  
      );
  
    }
  }
  // const mapStateToProps = (state) => {
  //   return {
  //     network: state.network,
  
  
  //   };
  // };
  export default (RegisterView)
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // alignSelf:'center'
    },
    Main: {
     //flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      marginTop: '10%',
      alignSelf:'center'
  
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
      marginTop: "1%",
      width:width-70,
      alignSelf:'center'
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