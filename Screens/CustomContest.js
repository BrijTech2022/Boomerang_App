import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    Alert,
    Modal,
    ImageBackground,
    FlatList,
    Dimensions
    //CheckBox
  } from 'react-native';
  import { Globalstyles } from '../Styles/GlobalStyle'
  import Icon from 'react-native-vector-icons/Entypo';
  import AntIcon from 'react-native-vector-icons/AntDesign';
  import Feather from 'react-native-vector-icons/Feather';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import RIcon from 'react-native-vector-icons/MaterialIcons';
  import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import * as React from 'react';
  import { connect } from 'react-redux';
  import { themeColor } from '../Styles/Color';
  import ImagePicker from 'react-native-image-crop-picker';
  import { Loader } from '../Components/Loader';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import Custom_Header from '../Components/CustomHeader';
import { back } from '../Components/icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dynamicSize } from '../Components/dynamicSize';
import Sound from 'react-native-sound';
import { ContestApi } from '../Api/ContestAPI';
import { TransactionApi } from '../Api/TransactionAPI';

Sound.setCategory('Playback');
const { width, height } = Dimensions.get('window');
  class CustomContestView extends React.PureComponent {

  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        Pimage:"",
        ContestID:"",
        Detail:"",
        errImg:"",
        errDetail:"",
        errFile:"",
        MetroFile:"",
        size:0,
        sound:null,
        joiningAmount:0,
        contestSubTitle:'',
        UpcomingEndDate:''
      }
              
    }
  
    componentDidMount(){
      console.log(this.props.route.params.data)
      if(this.props.route.params)
      {
        this.setState({ContestID:this.props.route.params.data.contestId,joiningAmount:this.props.route.params.data.joiningAmount,contestSubTitle:this.props.route.params.data.contestSubTitle,UpcomingEndDate:this.props.route.params.data.participationEndDate})
      }
    }

    // componentWillUnmount() {
    //   // Release the sound instance when the component unmounts
    //   // console.log("unmount")
    //   if (this.state.sound) {
    //     this.state.sound.release();
    //   }
    // }

    playAudio = (url) => {
      
      // If a sound is already playing, release it before playing a new one
      console.log("stop")
      if (this.state.sound) {
        // console.log("stop")
        this.state.sound.stop();
        this.state.sound.release();
      }
  
      // Create a new sound instance with the provided URL
      const sound = new Sound(url, null, (error) => {
        if (error) {
          console.log('Failed to load the sound', error);
          return;
        }
          console.log(
            'duration in seconds: ' +
              sound.getDuration() +
              'number of channels: ' +
              sound.getNumberOfChannels(),
          );
        // Play the sound
        sound.play(() => {
          sound.release(); // Release the sound after it's done playing
        });
        
      });
      
      // var audio = new Sound(
      //   url,
      //   null,
      //   error => {
      //     if (error) {
      //       console.log('failed to load the sound', error);
      //       return;
      //     }
      //     // if loaded successfully
      //     console.log(
      //       'duration in seconds: ' +
      //         audio.getDuration() +
      //         'number of channels: ' +
      //         audio.getNumberOfChannels(),
      //     );
      //   },
      // );

      // audio.setVolume(1);

      // if (audio.isPlaying()) {
      //   audio.pause();
      // } else {
      //   audio.play(success => {
      //     if (success) {
      //       console.log('successfully finished playing');
      //     } else {
      //       console.log('playback failed due to audio decoding errors');
      //     }
      //   });
      // }

      
      // console.log("start")
      // // Update the state with the new sound instance
      this.setState({ sound });
    };

    pauseAudio = () => {
      if (this.state.sound) {
        this.state.sound.pause();
      }
    };

  open=(ind)=>{
    ImagePicker.openPicker({
      
        cropping: true,
        //includeBase64:true,
        // multiple: true
        }).then(image => {
        //  console.log(image);

        let images={ uri: image.path }
        this.setState({Pimage:images,size:image.height,errImg:""})
        // this.forceUpdate()
        //console.log(JSON.stringify(this.state.screenShot[0]))
        });
    }
    
    openFile=()=>{
      ImagePicker.openPicker({
        
          cropping: true,
          //includeBase64:true,
          // multiple: true
          }).then(image => {
          //  console.log(image);
  
  
          let images={ uri: image.path }
          this.setState({MetroFile:images,errFile:""})
        
          });
      }

      Submit=()=>{
        // console.log("LoginData===>>>",this.props.uInfo.userId)
        if(this.state.Pimage=="")
        this.setState({errImg:"Please select image"})
        else
        if(this.state.Detail=="")
        this.setState({errDetail:"Please enter details"})
        else
        {
          this.setState({isLoading:true})
          
          let wData={
            "fkUserId":this.props.uInfo.userId
          }
          TransactionApi.GetWalletAmountByUserId(wData).then((data)=>{
            if(data.status==true)
            {
            if(data.data.length!=0)
            {
              if(Number(data.data[0].amount)>=this.state.joiningAmount)
              {
              // alert(data.data[0].amount)
              let TData={
                "transactionId": 0,
                "participation_id": null,
                "amount": -this.state.joiningAmount,
                "quantity": 0,
                "fkUserId": this.props.uInfo.userId,
                "transactionStatus": "true"
              }
    
              TransactionApi.SaveTransaction(TData).then((ReqTdata)=>{
                if(ReqTdata.status==true)
                {
                if(ReqTdata.data.length!=0)
                {
                  // console.log("tra"+JSON.stringify(ReqTdata.data[0].transactionId))  

                  let PData={
                    "fkUserId": this.props.uInfo.userId,
                    "fkContestId": Number(this.state.ContestID),
                    "transactionId": ReqTdata.data[0].transactionId.toString(),
                    "imageURL": "",
                    "videoURL": "",
                    "uDescription":this.state.Detail,
                    "audioURL": "",
                     "liverate": 0,
                     "isActive":true,
                     "approvedStatus":false
                  }
                  
                  // console.log("ReqParti"+JSON.stringify(ReqTdata))
                ContestApi.SaveParticipation(PData).then((ReqPdata)=>{
                  notifyMessage(ReqPdata.message)
                  
                  
                  // console.log("PartiData==",(ReqPdata))
                  const ReqImageData=new FormData();
                  ReqImageData.append('File',{
                    type: 'image/jpeg',
                    uri: this.state.Pimage.uri,
                    name: this.state.Pimage.uri.split("/")[this.state.Pimage.uri.split("/").length - 1]
                  })
                  ReqImageData.append('Id',ReqPdata.data[0].id)

                  ContestApi.UploadUrlImage(ReqImageData).then((ImgData)=>{
                      // console.log("Image===",JSON.stringify(ImgData))
                      this.setState({isLoading:false})
                      this.props.navigation.goBack();
                  })

                })
                }
                else
                {
                  this.setState({isLoading:false})
                  notifyMessage('some error occured')
                }
               }
               else
               {
                this.setState({isLoading:false})
                notifyMessage('some error occured')
               }
    
              })
              }
              else
              {
                this.setState({isLoading:false})
                alert('Wallet has insufficient balance ')
              }
            }
            else
            {
              this.setState({isLoading:false})
              alert('Wallet has insufficient balance ')
            }
          }
          else
          {
            this.setState({isLoading:false})
            notifyMessage('some problem occured')
          }
          })

        }
      }
    
    CustomContest=()=>{
        return(
        <>
             <SafeAreaView style={styles.Container}>
             <Custom_Header
                openDrawer={true}
                textHeading={true}
                // textHeading={true}
                source={back} 
                textHeading1={'Join Contest'}
                styleHeader={{backgroundColor: themeColor}}
                Navigation={() => this.props.navigation.goBack()}
            />

                    <ScrollView style={{}}>
                       <View style={{width:'95%',alignSelf:'center',}}>
                        
                        <View style={{top:dynamicSize(5)}}>
                            <Text style={{fontSize:dynamicSize(16),color:'gray',textAlign:'center'}}>🗝️ {this.state.contestSubTitle} 🗝️</Text>
                        </View>

                        <View style={{marginTop:dynamicSize(20)}}>
                          <View style={{flexDirection:'row',alignSelf:'center'}}>
                          <Text style={{fontSize:dynamicSize(15),color:'gray'}}>Contest End Date : </Text>
                          <Text style={{fontSize:dynamicSize(15),color:'gray'}}>{this.state.UpcomingEndDate.split('T')[0]?this.state.UpcomingEndDate.split('T')[0]:this.state.UpcomingEndDate}</Text>
                          </View>
                        </View>

                        {/* <Button
          title="Play Audio"
          onPress={() =>
            this.playAudio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3')
          }
        />

<Button
          title="Pause Audio"
          onPress={this.pauseAudio}
        /> */}

                            <View style={{display:this.state.Pimage==""?'flex':'none',width:'100%',height:200,borderWidth:1,borderColor:'#999999',borderRadius:10,marginTop:50}}>
                                
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity 
                                        onPress={()=>this.open()}
                                    >
                                    <RIcon style={{textAlign:'center'}} color={'gray'} name={"add-to-photos"} size={30} />
                                    <Text style={{color:'gray',fontWeight:'bold',textAlign:'center'}}>Add photos</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>

                            <View style={{
                                    display:this.state.Pimage==""?'none':'flex',
                                    marginTop:10
                                }}>
                                  
                                  <TouchableOpacity 
                                        onPress={()=>this.open()}
                                    >
                                    <Image
                                        source={this.state.Pimage!=""?this.state.Pimage:""}
                                        style={{
                                            width:'100%',
                                            height:parseInt(this.state.size)<250?(Dimensions.get('window').height-50)/3:parseInt(this.state.size)<1200?(Dimensions.get('window').height-50)/2:Dimensions.get('window').height-100,
                                            alignSelf:'center'
                                        }}
                                        resizeMode={'stretch'}
                                    />
                                  </TouchableOpacity>

                                </View>
                                <Text style={[Globalstyles.msgStyle,{left:10}]}>{this.state.errImg}</Text>

                                <View style={styles.input}>
                  <View style={{borderRadius: 10,borderColor:'gray',borderWidth:1,flexDirection:'row'}}>
                  <TextInput
                    style={[styles.TextInput,{left:10,}]}
                    placeholderTextColor="gray"
                    placeholder='Enter Description'
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={(txt)=>{this.setState({Detail:txt,errDetail:""})}}
                  />
                  </View>
                  <Text style={[Globalstyles.msgStyle,{left:10,marginBottom:-10}]}>{this.state.errDetail}</Text>
                </View>
                       </View>



                    </ScrollView>
             </SafeAreaView>

            <View 
                // style={{padding:dynamicSize(10),backgroundColor:'white'}}
            >
             <TouchableOpacity
              onPress={()=>{this.Submit()}}
              // onPress={()=>{this.setState({isLoading:true})}}
             >
            <View style={{backgroundColor:themeColor,width:'100%',height:50,
            // marginTop:20,
            bottom:0
            }}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>

                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Pay ₹{this.state.joiningAmount}</Text>

                    </View>
                </View>
                </TouchableOpacity>
            </View>
         </>
        )
    }
  
    render() {
  
        if (!this.props.network.isConnected) {
        console.log("Internet Connection Error....")
          // return null
        }
    
        return (
    
          //  this.props.loginInfo.isLoggedIn?
          ////require('../Icons/logo1.png')
          <>
          <Loader loading={this.state.isLoading} />
       <this.CustomContest/>
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
      export default connect(mapStateToProps)(CustomContestView)

      const styles = StyleSheet.create({
      Container:{
        backgroundColor:'#FFFFFF',
          flex:1,
          width:"100%",
          height:"100%",
          
        
      },
      SubCon:{
        // marginTop:"10%",
        //backgroundColor:'white'
    },
      Heading:{
        flexDirection:'row',
        padding:"2%",
        backgroundColor:'#FFFFFF'
    },
    lining1:{
        flexDirection: 'row',
        marginVertical: 0,
        borderBottomWidth: 3,
         borderBottomColor: '#CCCCCC',
         borderTopColor: '#CCCCCC',
         
      },
      adminStyle:{
        flexDirection:'row',
        //backgroundColor:'white'
      }, 
      FamilyText:{
        flexDirection:'row',
        //backgroundColor:'white'
      },
      relation:{
        marginTop:15
      },
      txtAdmin:{
        fontSize:20,
        //fontWeight:'bold',
        color:themeColor,
        padding:10
      },
      count:{
        width:"11%",
         marginHorizontal:0,
         marginVertical:10,
         backgroundColor:themeColor,
         borderRadius:10
         
       },
       FamilyMem:{
           flexDirection:'row'
       },
       itemPhoto:{
        width:80,
        height:80,
        borderRadius:50,
        marginLeft:10,
       
      },
      flatListItem:{
        fontSize:18,
        //fontWeight:'bold',
        letterSpacing:0.6,
        marginLeft:8
        
      },
      relation:{
        fontSize:15,
        
        letterSpacing:0.6,
        marginLeft:8
      },
      nameContainer:{
        marginLeft:10,
        justifyContent:'center'
      },
      btn:{
        flexDirection:'row',
        
      },
      btnED:{
          flexDirection:'row',
          backgroundColor:themeColor,
          margin:"5%",
          marginLeft:10,
          height:35,
          width:130,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:10,
          backgroundColor: themeColor,
          margin:4,
          marginTop:5
      },
      btnText:{
          color:'#FFFFFF',
          fontSize:16,
          fontWeight:'bold',
          letterSpacing:0.5
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
      })