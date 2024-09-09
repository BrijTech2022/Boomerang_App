import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Modal,
    Button,
    Image,
    Alert,
    ImageBackground,
    PermissionsAndroid, NativeModules,
    FlatList,
    SectionList,
    Dimensions,
  } from 'react-native';
  
  import { Globalstyles } from '../Styles/GlobalStyle'
  import Icon from 'react-native-vector-icons/Entypo';
  import RIcon from 'react-native-vector-icons/MaterialIcons';
  import MCICON from 'react-native-vector-icons/MaterialCommunityIcons'
  import Feather from 'react-native-vector-icons/Feather';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import * as React from 'react';
  import { connect } from 'react-redux';
  import { backColor, sGreen, themeColor, themeText } from '../Styles/Color';
  import { notifyMessage } from '../Components/Toast';
import Custom_Header from '../Components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { back } from '../Components/icon';
import { dynamicSize } from '../Components/dynamicSize';
import { TransactionApi } from '../Api/TransactionAPI';
import { Loader } from '../Components/Loader';
import RNUpiPayment from 'react-native-upi-payment';

const { width, height } = Dimensions.get('window');
  class WalletView extends React.PureComponent{
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
          Amount:0,
          isLoading:false,
          refreshing:false
        }
        // console.log(JSON.stringify(this.props.loginInfo.userDetails))
  
      }

      componentDidMount(){
        this.bindData()
      }
  
      uploadImage=(img)=>{
      // //  console.log(img)
      //   API.UploadPic(img).then((data)=>{console.log(JSON.stringify(data));  this.getProfile()
        
      //   })
        
       }
  
  
      bindData=()=>{     
        this.setState({isLoading:true})   
        let WData={
          "fkUserId":this.props.uInfo.userId
        }
        TransactionApi.GetWalletAmountByUserId(WData).then((data)=>{
          if(data.status==true)
          {
          if(data.data.length!=0)
          {
            this.setState({Amount:data.data[0].amount,isLoading:false})
          }
          else
          this.setState({isLoading:false})   
        }
        else
        this.setState({isLoading:false})   
        })
        
      }
  
      willFocus = this.props.navigation.addListener(
        'focus',
        (payload) => {
          this.bindData()
        }
      );

      Refresh=()=>{
        this.bindData
      }
  
  
      Wallet=()=>{
        return(
          <SafeAreaView style={{flex:1,width:'100%',height:'100%',backgroundColor:backColor}}>

          <Custom_Header
            openDrawer={true}
            textHeading={true}
            // textHeading={true}
            source={back} 
            textHeading1={'Wallet'}
            styleHeader={{backgroundColor: themeColor}}
            Navigation={() => this.props.navigation.goBack()}
          />
              
              <View style={{height:'100%',width:'100%'}}>
              <ScrollView
                  refreshControl={
                  <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={this.state.refreshing}
                  onRefresh={this.Refresh}
                />
                }
              >
              
              <View style={styles.subcontainer}>

                <View style={{}}>
                <View style={{width:'90%',alignSelf:'center'}}>
                <Text style={{textAlign:'center',fontSize:17,}}>Total Balance</Text>

                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',}}>₹{this.state.Amount?this.state.Amount.toFixed(2):0.00}</Text>

                <TouchableOpacity
                    style={{width:130,alignSelf:'center',marginTop:20,backgroundColor:themeColor,borderRadius:5,borderWidth:0.2,borderColor:themeColor}}
                  onPress={()=>{this.props.navigation.navigate('AddMoneyScreen')}}
                >
                    <View style={{}}>
                        <Text style={{textAlign:'center',padding:10,fontSize:18,color:'white',fontWeight:'bold'}}>Add Amount</Text>
                    </View>
                </TouchableOpacity>
                </View>

                <View style={styles.line}></View>

                {/* 
                  <View style={{marginTop:20,width:'90%',alignSelf:'center'}}>
                      
                  <View style={{padding:5,flexDirection:'row',justifyContent:'space-between',}}>
                      <View>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>Amount Added (Unutilised)</Text>
                      </View>
                      <View>
                      <Text style={{fontSize:15,fontWeight:'bold'}}>₹0.00</Text>
                      </View>
                  </View>

                      <View style={{padding:5,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                      <View>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>Winning Amount</Text>
                      </View>
                      <View>
                      <Text style={{fontSize:15,fontWeight:'bold'}}>₹0.00</Text>
                      </View>

                      <View style={{borderWidth:0.3,}}>
                          <TouchableOpacity>
                          <Text style={{textAlign:'center',padding:10,fontSize:18,color:themeColor}}>Withdrawal</Text>
                          </TouchableOpacity>
                      </View> 
                      </View>

                  <View style={{padding:5,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                      <View>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>Bonus Amount</Text>
                      </View>
                      <View>
                      <Text style={{fontSize:15,fontWeight:'bold'}}>₹0.00</Text>
                      </View>
                  </View>
                  
                  </View>

                <View style={styles.line}></View> 
                */}

                <View style={{marginTop:20,width:'90%',alignSelf:'center'}}>
                    
                    <View style={{padding:5,flexDirection:'row',justifyContent:'space-between',}}>
                        <View>
                          <TouchableOpacity style={{flexDirection:'row'}}>
                            <Text style={{fontSize:14,fontWeight:'bold',color:themeText,}}>Withdraw</Text>
                            <SimpleLineIcons name={'arrow-right'} size={10} style={{top:5,left:2,color:themeText,fontWeight:'bold'}} />
                            </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>₹{this.state.Amount?this.state.Amount.toFixed(2):0.00}</Text>
                        </View>
                    </View>
                    
                    </View>
                  
                    <View style={styles.line}></View>

                </View>
              
                  
              </View>


              <View style={[styles.subcontainer,{}]}>
                <View style={{}}>
                    <TouchableOpacity
                      onPress={()=>{this.props.navigation.navigate('MyTransactionScreen')}}
                    >
                    <View style={{padding:15,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,color:themeText,fontWeight:'bold'}}>My Transaction</Text>
                    <SimpleLineIcons name={'arrow-right'} size={18} style={{top:2,color:themeText}} />
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <TouchableOpacity>
                    <View style={{padding:15,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,color:themeText,fontWeight:'bold'}}>Bank Verify</Text>
                    <SimpleLineIcons name={'arrow-right'} size={18} style={{top:2,color:themeText}} />
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <TouchableOpacity>
                    <View style={{padding:15,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,color:themeText,fontWeight:'bold'}}>PAN Card Verify</Text>
                    <SimpleLineIcons name={'arrow-right'} size={18} style={{top:2,color:themeText}} />
                    </View>
                    </TouchableOpacity>
                </View>
              </View>
              
              </ScrollView>
              </View>
              
              
          </SafeAreaView>
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
       <this.Wallet/>
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
      export default connect(mapStateToProps)(WalletView)
      const styles=StyleSheet.create({
        subcontainer:{
            width:"100%",
            // height:"95%",
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
      line:{
        width:'100%',
        height:1,
        backgroundColor:'lightgray',
        marginTop:dynamicSize(20)
      }
      })