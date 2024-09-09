// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Button,
//    TouchableOpacity,
//     Image,
//     Alert,
//     Modal,
//     ImageBackground,
//     Picker,
//     //CheckBox
// } from 'react-native';
// import { Globalstyles } from '../Styles/GlobalStyle'
// import Icon from 'react-native-vector-icons/Entypo';
// import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import Evillcons from 'react-native-vector-icons/EvilIcons'
// import Octicons from 'react-native-vector-icons/Octicons';
// import RIcon from 'react-native-vector-icons/MaterialIcons';
// import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import * as React from 'react';
// import { connect } from 'react-redux';
// import CheckBox from '@react-native-community/checkbox';
// import { themeColor } from '../Styles/Color';
// import { Loader } from '../Components/Loader';
// import { notifyMessage } from '../Components/Toast';
// import { ActivityIndicator } from 'react-native';
// import store from '../Redux/Store';
// import { setCartCount, setLoginState } from '../Redux/Actions';
// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { ScrollView } from 'react-native-gesture-handler';
// import BottomNewView from './BottomNew';
// class ProfileView extends React.PureComponent {

//     constructor(props) {
//       super(props);
  
//       this.state = {
//       }
      
  
//     }

//     Profile=()=>{
//         return(
//           <>
//           <ScrollView>
//           <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//           <Text style={{ color: "#006600", fontSize: 40 }}>! Profile Screen!</Text>
//         </View>
//         </ScrollView>
//         <BottomNewView/>
//         </>
//         )
//     }

//     render() {
    
//         return (
//        <this.Profile/>
      
    
//         );
    
//       }
//     }
//       export default (ProfileView)









import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Modal,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  PermissionsAndroid, NativeModules,
  FlatList,
  SafeAreaView,
  SectionList,


} from 'react-native';

import { Globalstyles } from '../Styles/GlobalStyle'
import Icon from 'react-native-vector-icons/Entypo';
import RIcon from 'react-native-vector-icons/MaterialIcons';
import MCICON from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import { connect } from 'react-redux';
import { themeColor } from '../Styles/Color';
import { notifyMessage } from '../Components/Toast';
// import ImagePicker from 'react-native-image-crop-picker';
class ProfileView extends React.PureComponent{
  constructor(props) {
      super(props);

      this.state = {
        isVisible: false,
        isVisible2:false,
        UserData:"",
        UproPic:"",
        userName:"",
        penName:"",
        Address:"",
        gender:"",
        AbUser:"",
        Contact:"",
        WalletData:[],

      }
      // console.log(JSON.stringify(this.props.loginInfo.userDetails))

    }

    uploadImage=(img)=>{
    // //  console.log(img)
    //   API.UploadPic(img).then((data)=>{console.log(JSON.stringify(data));  this.getProfile()
      
    //   })
      
     }


    bindData=()=>{        
      // this.getProfile()       
      // // console.log(JSON.stringify(this.props.loginInfo.userDetails))
      // this.setState({UserData:JSON.parse(this.props.loginInfo.userDetails)})
      // this.setState({userName:JSON.parse(this.props.loginInfo.userDetails).UserName,penName:JSON.parse(this.props.loginInfo.userDetails).PenName,email:JSON.parse(this.props.loginInfo.userDetails).Email,Address:JSON.parse(this.props.loginInfo.userDetails).Address,AbUser:JSON.parse(this.props.loginInfo.userDetails).AboutUser,Contact:JSON.parse(this.props.loginInfo.userDetails).Contact,gender:JSON.parse(this.props.loginInfo.userDetails).Gender})
      // API.GetWalletList(JSON.parse(this.props.loginInfo.userDetails).ID).then((data)=>{
      //   console.log(JSON.parse(data))
      //   this.setState({WalletData:JSON.parse(data)})
      // })
      
    }

    willFocus = this.props.navigation.addListener(
      'focus',
      (payload) => {
        this.bindData()
      }
    );

    UpdateProfile=()=>{
      // if(this.state.userName=="")
      // notifyMessage("UserName should't be blank")
      // else
      // {
      //   let ProData=
      //   {
      //     ID:this.state.UserData.ID,
      //     UserName:this.state.userName,
      //     PenName:this.state.penName,
      //     AboutUser:this.state.AbUser,
      //     Gender:this.state.gender,
      //     Address:this.state.Address,
      //     Contact:this.state.Contact,
      //     Twitter:"",
      //     Facebook:"",
      //     Instagram:"",
      //     LinkedIn:"",
      //     Subscription:true
      // }
      // API.EditProfile(ProData).then((data)=>{
      //   notifyMessage("Profile Updated Successfully")
      //   this.setState({isVisible:false})
      //   this.bindData()
      //   this.forceUpdate()        

      // })
      // }
    }

    Open=(n)=>{
      // if(n==1)
      // ImagePicker.openCamera({
      //     width: 300,
      //     height: 400,
      //     cropping: true,
      //     includeBase64:true
      //   }).then(image => {
      //     //console.log(image);
      //     this.setState({UproPic:image.path})
      //     this.uploadImage(image.path)
      //   });
      //   else
      //   ImagePicker.openPicker({
      //       width: 300,
      //       height: 400,
      //       cropping: true,
      //       includeBase64:true
      //     }).then(image => {
      //       //console.log(image);
      //       this.setState({UproPic:image.path})
      //       this.uploadImage(image.path)
      //     });
      //     this.setState({modalVisible:!this.state.modalVisible});
        }



    profile=()=>{
      return(
        <View style={{}}>
            
            
            <View style={{height:'100%',width:'100%'}}>
            <ScrollView>
            
              
            {/* <Text style={{alignSelf:'center'}}>welcome</Text> */}
            <View style={styles.subcontainer}>
              <View style={{backgroundColor:themeColor,alignSelf:'center',borderRadius:5}}>
                <Text style={{padding:'1%',paddingLeft:'3%',paddingRight:'3%',fontSize:25,fontWeight:'bold',color:'blue'}}>ME</Text>
              </View>
              <TouchableOpacity
                onPress={()=>{this.setState({isVisible2:true})}}
              >
                <Image source={require('../Icons/profile.png')} style={{width:80 ,height:80,alignSelf:'center',margin:5}} />
              </TouchableOpacity>
                {/* <FontAwesome style={{alignSelf:'center',padding:"4%"}} color={"#9b69fc"} name={"user-circle-o"} size={70}></FontAwesome> */}
                <View style={{backgroundColor:'white',width:'50%',alignSelf:'center',borderRadius:50,elevation:10 }}>
                <Text style={{textAlign:'center',fontSize:18,color:'#B24FC6'}}>User Type</Text>
                </View>
                <Text style={{textAlign:'center',fontStyle:'italic',fontSize:25,fontWeight:'bold',color:themeColor}}>User</Text>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:themeColor}}>{(this.state.penName=="" || this.state.penName==null)?this.state.UserData.Email?"@"+this.state.UserData.Email.split('@')[0]:"@"+this.state.penName:"@"+this.state.penName}</Text>
                {/* <View style={{backgroundColor:'white',alignSelf:'center',width:'90%',borderRadius:20,padding:'5%',marginTop:'1%',elevation:10}}>
                  <Text style={{textAlign:'center',fontSize:18}}>ID: {this.state.UserData.ID}</Text>
                  <View style={{flexDirection:'row',marginBottom:10,justifyContent:'space-between',top:5}}>
                  <Text style={{textAlign:'center',fontSize:25,width:'45%',}}>{this.state.WalletData.length!=0?this.state.WalletData[0].BonusCoin:"0"}</Text>
                  <Text style={{textAlign:'center',fontSize:25,width:'45%',}}>{this.state.WalletData.length!=0?this.state.WalletData[0].Coin:"0"}</Text>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{textAlign:'center',color:'#B24FC6',fontWeight:'bold',width:'50%'}}>BONUS COINS</Text>
                  <Text style={{textAlign:'center',color:'#B24FC6',fontWeight:'bold',width:'50%'}}>PAID COINS</Text>
                  </View>
                  <TouchableOpacity
                    onPress={()=>{
                      this.props.navigation.navigate('TopUpScreen')
                    }}
                  >
                  <View style={{marginTop:15,backgroundColor:'red',width:'70%',alignSelf:'center',borderRadius:20,flexDirection:'row'}}>
                    <Text style={{textAlign:'center',color:'yellow',padding:'2%',marginLeft:'25%',fontWeight:'bold',fontSize:17}}>TOP UP</Text>
                    <Image source={require("../Icons/coin.gif")} style={styles.coin} />
                  </View>
                  </TouchableOpacity>
                </View> */}
                <View style={{padding:10,marginTop:'4%'}}>
                  <View style={styles.menubar}>
                    <TouchableOpacity
                      // onPress={()=>{this.setState({isVisible:true})}}
                      disabled={true}
                    >
                    <Text style={styles.menu}>Edit Profile</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                      onPress={()=>{
                        this.props.navigation.navigate('AboutScreen')
                      }}
                    >
                    <Text style={styles.menu}>About Us</Text>
                    </TouchableOpacity> */}

                  </View>
                {/* <Button
                    onPress={() => Alert.alert('Simple Button pressed')}
                    title="Edit Profile"
                    color="#a9d2e8"
                    activeOpacity={0.95}
                    
                    accessibilityLabel="Learn more about this purple button"
                /> */}
                <View style={{margin:'3%'}}></View>
                 
                </View>
                
            </View>
            
            </ScrollView>
            </View>
            
            
        </View>
      )
  }

  Edit_Pofile=()=>{
    return(
      <Modal            
    animationType ={'slide'}  
    transparent = {false}  
    visible = {this.state.isVisible}  
    onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
    {/*All views of Modal*/}  
    <View style={{backgroundColor:themeColor,flexDirection:'row',justifyContent:'space-between'}}>
    <TouchableOpacity
         onPress={()=>{this.setState({ isVisible:!this.state.isVisible})}}
        >
    <Text style={{fontSize:17,color:'white',padding:'2%'}}>Cancel</Text>
    </TouchableOpacity>
    {/* <TouchableOpacity> */}
      <Text style={{fontSize:17,color:'white',padding:'2%',}}>Edit Profile</Text>
    {/* </TouchableOpacity> */}
    </View>
    <ScrollView>

      <View>
        <View style={{}}>
        <FontAwesome style={{alignSelf:'center',padding:"4%"}} color={"#9b69fc"} name={"user-circle-o"} size={70}></FontAwesome>
        </View>
        <View>
    <View style={{flexDirection:'row',padding:10}}>
                    <Text style={{fontSize:20,marginLeft:'5%'}}>User Name:</Text>
                    <TextInput 
                       placeholder='Full Name'
                       placeholderTextColor="drak"
                       style={styles.input}
                       value={this.state.userName}
                       onChangeText={(txt)=>{this.setState({userName:txt})}}
                    />
                  </View>
                  <View style={{flexDirection:'row',padding:10}}>
                    <Text style={{fontSize:20,marginLeft:'4%'}}>Pen Name:</Text>
                    <TextInput 
                       placeholder='Pen name'
                       placeholderTextColor="drak"
                       style={styles.input}
                       value={this.state.penName}
                       onChangeText={(txt)=>{this.setState({penName:txt})}}
                    />
                  </View>
                  <View style={{flexDirection:'row',padding:10}}>
                    <Text style={{fontSize:20,marginLeft:'4.3%'}}>About User:</Text>
                    <TextInput 
                       placeholder='Reader/Author'
                       placeholderTextColor="drak"
                       style={styles.input}
                       value={this.state.AbUser}
                       onChangeText={(txt)=>{this.setState({AbUser:txt})}}
                    />
                  </View>
                  <View style={{flexDirection:'row',padding:10}}>
                    <Text style={{fontSize:20,marginLeft:'4.3%'}}>Contact No:</Text>
                    <TextInput 
                       placeholder='Contact no.'
                       placeholderTextColor="drak"
                       style={styles.input}
                       value={this.state.Contact}
                       keyboardType='number-pad'
                       onChangeText={(txt)=>{this.setState({Contact:txt})}}
                    />
                  </View>
                  <View style={{flexDirection:'row',padding:10}}>
                    <Text style={{fontSize:20,marginLeft:'4.3%'}}>Address:</Text>
                    <TextInput 
                       placeholder='Address'
                       placeholderTextColor="drak"
                       style={styles.input}
                       value={this.state.Address}
                       onChangeText={(txt)=>{this.setState({Address:txt})}}
                    />
                  </View>
                    <View style={{flexDirection:"row",}}>
                      <Text style={{padding:'1%',fontSize:20,marginLeft:'5%'}}>Gender:</Text>
                      <TouchableOpacity style={styles.button} onPress={()=>{this.setState({gender:"Male"})}}>
                        <Ionicons color={this.state.gender=="Male"?themeColor:'black'} name={"man"} size={30}></Ionicons>
                       
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={()=>{this.setState({gender:"Female"})}}>
                        <Ionicons color={this.state.gender!="Male"?themeColor:'black'} name={"woman"} size={30}></Ionicons>
                       
                      </TouchableOpacity>
                      
                    </View>
                    <TouchableOpacity
                      onPress={()=>{
                        this.UpdateProfile()
                      }}
                    >
                  <View style={{marginTop:15,backgroundColor:themeColor,width:'70%',alignSelf:'center',borderRadius:20,flexDirection:'row'}}>
                    <Text style={{textAlign:'center',color:'white',padding:'2%',marginLeft:'38%',fontWeight:'bold',fontSize:17}}>Update</Text>
                    
                  </View>
                  </TouchableOpacity>
                    </View>
                    </View>  
    </ScrollView> 
  </Modal> 
  )
  }

  Upload_Pofile=()=>{
    return(
      <Modal            
    animationType ={'slide'}  
    transparent = {true}  
    visible = {this.state.isVisible2}  
    onRequestClose = {() =>{ console.log("Modal has been closed.") } } >  
    {/*All views of Modal*/} 
    <TouchableOpacity
      style={{backgroundColor:'rgba(255,255,255,0.8)',top:"85%",position:'absolute',width:'100%',alignItems:"center"}}
         onPress={()=>{this.setState({ isVisible2:!this.state.isVisible2})}}
        >
    <View > 
      
    

      <View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
           onPress={()=>this.Open(2)}
          >
        <Icon style={{alignSelf:'center',padding:'4%'}} color={themeColor} name={"folder-images"} size={50}></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.Open(1)}
        >
        <Icon style={{alignSelf:'center',padding:'4%'}} color={themeColor} name={"camera"} size={50}></Icon>
        </TouchableOpacity>
        {/* <FontAwesome style={{alignSelf:'center',padding:"4%"}} color={"#9b69fc"} name={"user-circle-o"} size={70}></FontAwesome> */}
        </View>
      </View>  
      </View>
      </TouchableOpacity>
  </Modal> 
  )
  }
    render() {

      if (!this.props.network.isConnected) {
      notifyMessage("Internet Connection Error....")
        // return null
      }
  
      return (
  
        //  this.props.loginInfo.isLoggedIn?
        ////require('../Icons/logo1.png')
      
     <>
     <this.profile/>
      <this.Edit_Pofile/>
      <this.Upload_Pofile/>
      </>
      );
  
    }
  }

  const mapStateToProps = (state) => {
      return {
        network: state.network,
        loginInfo:state.login
      
      };
    };
    export default connect(mapStateToProps)(ProfileView)
    const styles=StyleSheet.create({
      subcontainer:{
          borderRadius:20,
          width:"90%",
          height:"95%",
          alignSelf:'center',
          marginTop:'5%'
          // backgroundColor:themeColor,
          // elevation:5,
          
      },
      imgback: {
        width: "100%",
        height: '100%'
      },
      coin:{
        width:30,
        height:25,
        marginLeft:'5%',
        // alignSelf:'center'
    },
    menubar:{
      backgroundColor:'white',
      borderRadius:20,
      elevation:10        
    },
    menu:{
        color:'#B24FC6',
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        marginTop:'3%',
        marginBottom:'5%'

    },
    input: {
      //height: 40,
      marginHorizontal:10,
      borderBottomWidth: 1,
      width:"55%"
      //padding: 10,
    },
    })