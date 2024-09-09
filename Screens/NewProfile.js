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
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import * as React from 'react';
  import { connect } from 'react-redux';
  import { themeColor, themeText } from '../Styles/Color';
  import { notifyMessage } from '../Components/Toast';
import { RegistrationApi } from '../Api/RegistrationAPI';
import { Loader } from '../Components/Loader';
import { dynamicSize, getFontSize } from '../Components/dynamicSize';
import { imageUrl } from '../Api/ApibaseUrl';
import ImagePicker from 'react-native-image-crop-picker';
import Store from '../Redux/Store';
import { setCartCount, setLoginState } from '../Redux/Actions';

  class NewProfileView extends React.PureComponent{
    constructor(props) {
        super(props);
  
        this.state = {
          isVisible: false,
          isVisible2:false,
          UserData:"",
          UproPic:"",
          userName:"",
          userId:"",
          Address:"",
          gender:"",
          AbUser:"",
          Contact:"",
          WalletData:[],
          isLoading:false,
          mobileNo:'',
          email:'',
          dateOfBirth:'',
          profilePic:'',
          RegId:'',
          imgUpdate:false
        }
        // console.log(JSON.stringify(this.props.loginInfo.userDetails))
  
      }

      componentDidMount(){
        this.bindData();
      }
  
      uploadImage=()=>{

        ImagePicker.openPicker({
          cropping: true,
          //includeBase64:true,
          // multiple: true
          }).then(image => {
          //  console.log(image);
  
          let images={ uri: image.path }
          // this.setState({Pimage:images,
          //   // size:image.height,errImg:""
          // })

          const ReqImageData=new FormData();
          ReqImageData.append('Image',{
            type: 'image/jpeg',
            uri: images.uri,
            name: images.uri.split("/")[images.uri.split("/").length - 1]
          })
          ReqImageData.append('RegId',this.state.RegId)

          RegistrationApi.UploadFiles(ReqImageData).then((data)=>{
            if(data.status){
              notifyMessage(data.message)
              this.setState({imgUpdate:true})
              this.bindData();
            }
            else
              notifyMessage('some problem in update profile')
              console.log(data)
          })

          // this.forceUpdate()

          });


     
        
       }
  
  
      bindData=()=>{        
        // console.log(this.props.uInfo.token)
        this.setState({isLoading:true})
        RegistrationApi.GetAllRagitrationDetailsByUserId(this.props.uInfo.userId).then((data)=>{
          // console.log(data)
          if(data.status){
            if(data.data.length!=0){
              this.setState({
                RegId:data.data[0].regId,
                userName:data.data[0].regName,
                userId:data.data[0].userId,
                mobileNo:data.data[0].mobileNo,
                email:data.data[0].email,
                dateOfBirth:data.data[0].dateOfBirth,
                profilePic:data.data[0].profilePic!=null && data.data[0].profilePic!=''?data.data[0].profilePic:'',
                isLoading:false
              },()=>{
                if(this.state.imgUpdate){
                  let SData={
                    "token":this.props.uInfo.token,
                    "userId":this.props.uInfo.userId,
                    "regName":this.state.userName,
                    "mobileNo":this.props.uInfo.mobileNo,
                    "profilePic":this.state.profilePic
                  }

                Store.dispatch(setLoginState({Logout:false,UserInfo:SData,}))
                this.forceUpdate();
                }
              })
            }
          }
        })
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
        //     userId:this.state.userId,
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
  
  
  
      NewProfile=()=>{
        return(
          <View style={{backgroundColor:'white'}}>
              
              
              <View style={{height:'100%',width:'100%'}}>
              <ScrollView>
              
              <View style={styles.subcontainer}>
                <View style={{backgroundColor:themeColor,alignSelf:'center',borderRadius:5,width:100}}>
                  <Text style={{padding:'1%',paddingLeft:'3%',paddingRight:'3%',fontSize:23,fontWeight:'bold',color:'white',textAlign:'center'}}>ME</Text>
                </View>
                
                  <Image source={this.state.profilePic?{uri:imageUrl+this.state.profilePic}:require('../Icons/profileNew.png')} style={{width:120,height:120,alignSelf:'center',margin:5,borderRadius:100}} resizeMode={'stretch'} />
                  <TouchableOpacity
                    onPress={()=>{this.uploadImage()}}
                  >
                    <View style={{alignSelf:'flex-end',right:100,top:-40,backgroundColor:themeColor,borderRadius:30,borderColor:'white',borderWidth:0.5}}>
                      <AntDesign color={'white'} name={"edit"} size={20} style={{padding:5}}></AntDesign>
                    </View>
                </TouchableOpacity>

                  {/* <View style={{backgroundColor:'white',width:'50%',alignSelf:'center',borderRadius:50,elevation:10 }}>
                  <Text style={{textAlign:'center',fontSize:18,color:'#B24FC6'}}>User Type</Text>
                  </View> */}

                  {/* <Text style={{textAlign:'center',fontStyle:'italic',fontSize:25,fontWeight:'bold',color:themeColor}}>{this.state.userName}</Text> */}
                  

                  <View style={{marginTop:0}}>
                    <View style={styles.menubar}>

                      <View style={{borderBlockColor:'lightgray',borderBottomWidth:0.3}}>
                      <View style={{padding:dynamicSize(5),marginLeft:dynamicSize(10)}}>
                        <Text style={styles.listHeader}>User Id</Text>
                        <Text style={styles.listTxt}>{this.state.userId}</Text>
                      </View>
                      </View>

                      <View style={{borderBlockColor:'lightgray',borderBottomWidth:0.3}}>
                      <View style={{padding:dynamicSize(5),marginLeft:dynamicSize(10)}}>
                        <Text style={styles.listHeader}>Name</Text>
                        <Text style={styles.listTxt}>{this.state.userName}</Text>
                      </View>
                      </View>

                      <View style={{borderBlockColor:'lightgray',borderBottomWidth:0.3}}>
                      <View style={{padding:dynamicSize(5),marginLeft:dynamicSize(10)}}>
                        <Text style={styles.listHeader}>Email</Text>
                        <Text style={styles.listTxt}>{this.state.email}</Text>
                      </View>
                      </View>

                      <View style={{borderBlockColor:'lightgray',borderBottomWidth:0.3}}>
                      <View style={{padding:dynamicSize(5),marginLeft:dynamicSize(10)}}>
                        <Text style={styles.listHeader}>Mobile No.</Text>
                        <Text style={styles.listTxt}>{this.state.mobileNo}</Text>
                      </View>
                      </View>

                      
                      <View style={{padding:dynamicSize(5),marginLeft:dynamicSize(10)}}>
                        <Text style={styles.listHeader}>Date Of Birth</Text>
                        <Text style={styles.listTxt}>{this.state.dateOfBirth.split('T')[0]}</Text>
                      </View>
                      

              
                    </View>
                  </View>

                  <View style={{marginTop:dynamicSize(30)}}>
                    <TouchableOpacity>
                    <View style={{backgroundColor:themeColor,width:200,alignSelf:'center',borderRadius:20}}>
                      <Text style={{color:'white',padding:14,fontSize:getFontSize(16),textAlign:'center'}}>Edit Profile</Text>
                    </View>
                    </TouchableOpacity>
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
                         value={this.state.userId}
                         onChangeText={(txt)=>{this.setState({userId:txt})}}
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
       <Loader loading={this.state.isLoading} />
       <this.NewProfile/>
        <this.Edit_Pofile/>
        <this.Upload_Pofile/>
        </>
        );
    
      }
    }
  
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          uInfo:state.login.UserInfo
        
        };
      };
      export default connect(mapStateToProps)(NewProfileView)
      const styles=StyleSheet.create({
        subcontainer:{
            borderRadius:20,
            width:"90%",
            height:"95%",
            alignSelf:'center',
            marginTop:'5%',
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
        borderRadius:10,
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
      listHeader:{
        color:themeColor,
        fontSize:getFontSize(14),
      },
      listTxt:{
        fontSize:getFontSize(20),
        marginTop:dynamicSize(5),
        marginBottom:dynamicSize(5),
        color:themeText,
        fontWeight:'bold'
      }
      })