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
    FlatList,
    Dimensions,
    Linking,
    Platform,
    ToastAndroid,
  } from 'react-native';
  import { Globalstyles } from '../Styles/GlobalStyle'
  import Icon from 'react-native-vector-icons/Entypo';
  import Feather from 'react-native-vector-icons/Feather';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import RIcon from 'react-native-vector-icons/MaterialIcons';
  import Simple from 'react-native-vector-icons/SimpleLineIcons';
  import Evillcons from 'react-native-vector-icons/EvilIcons'
  import Octicons from 'react-native-vector-icons/Octicons';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import * as React from 'react';
  import { connect } from 'react-redux';
  import { backColor, buyColor, themeColor } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import BottomNewScreen from './BottomNew';
import { back, unique1, unique2, unique3, unique4 } from '../Components/icon';
import Custom_Header from '../Components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dynamicSize, getFontSize } from '../Components/dynamicSize';
import { TransactionApi } from '../Api/TransactionAPI';
import RNUpiPayment from 'react-native-upi-payment';
import upiqr from 'upiqr';
import { initiateTransaction } from 'react-native-allinone-upi';
import { NativeModules } from 'react-native';

// const {SabPaisaSDK} = NativeModules
const { width, height } = Dimensions.get('window');

  class AddMoneyView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        balance:0,
        addAmount:500,
        errMsg:''
      }
      
  
    }

    componentDidMount(){
      this.GetWalletAmount();
    }

    willFocus = this.props.navigation.addListener(
      'focus',
      (payload) => {
        if(this.props.uInfo)
        this.RefreshData()
      }
    );

    GetWalletAmount=()=>{
      this.setState({isLoading:true})
      let WData={
        "fkUserId":this.props.uInfo.userId
      }
      TransactionApi.GetWalletAmountByUserId(WData).then((data)=>{
        if(data.status==true)
        {
        if(data.data.length!=0)
        {
          this.setState({balance:data.data[0].amount,isLoading:false})
        }
        else
        this.setState({isLoading:false})   
      }
      else
      this.setState({isLoading:false})
      })
    }

    RefreshData=()=>{
      this.GetWalletAmount();

      // this.setState({
      //   errMsg:''
      // })
    }

    AddAmount=()=>{
      if(Number(this.state.addAmount)<0 || this.state.addAmount==null || this.state.errMsg!='')
      {
        this.setState({errMsg:'Amount should be greater than or equal to 50'})
      }
      else
      {

        // SabPaisaSDK.openSabpaisaSDK(["450","testHellow","sabpaisa","7234323432","sabpaisa@gmail.com",],(errpr,message,clientTxnId)=>{
        //   console.log("sdk integrated. Transaction Status: "+message);
        //   if (Platform.OS === 'android') {
        //     ToastAndroid.show(clientTxnId, ToastAndroid.SHORT);
        //   }
        // })

        // upiqr({
        //   payeeVPA: "9838543714@okbizaxis",
        //   payeeName: "Kiezen Soft Tech"
        // })
        // .then((upi) => {
        //   console.log(upi.qr);      // data:image/png;base64,eR0lGODP...
        //   console.log(upi.intent);  // upi://pay?pa=bhar4t@upi&pn=Bharat..
        // })
        // .catch(err => {
        //   console.log(err);
        // });


        // initiateTransaction({
        //   upi: 'upi_id', // Required
        //   transactionId: 'transaction_id', // Required
        //   currency: 'INR', // Currency Code (Required)
        //   merchantCategoryCode: 'Merchant Category Code', // Four digit Code. (Required)
        //   payeeName: 'Name of the Payee', // Required
        //   amount: '1', // Amount must be in String and must be greater than 1.00 (Required)
        //   note: 'test', // Additional Notes or description (Optional)
        // })
        //   .then((res) => {
        //     console.log(res, 'RESPONSE');
        //   })
        //   .catch((e) => {
        //     console.log(e.message, 'ERROR');
        //   });


        // Linking.openURL('phonepe://upi/pay?pa=9838543714@okbizaxis&pn=Kiezen Soft Tech&am=1.00&cu=INR&aid=uGICAgIC10N_Qaw')

        // Linking.openURL('upi://pay?pa=9838543714@okbizaxis&pn=Kiezen%20Soft%20Tech&mc=0000&mode=02&purpose=00')

      //     RNUpiPayment.initializePayment({
      //       vpa: '9838543714@okbizaxis',  		//your upi address like 9838543714@ikwik
      //       payeeName:'KIEZEN SOFT TECH',   			// payee name 
      //       amount: Number(this.state.addAmount),				//amount
      //       transactionNote:'Payment Of Wallet Added Amount',		//note of transaction
      //       transactionRef: 'aab322-34232xx-sdsd'	//some refs to aknowledge the transaction
      //   },successCallback,failureCallback);
  
      //   function failureCallback(data){
       
      //     console.log("Failure",JSON.stringify(data))
      //     // {"status":"FAILURE"}
      //     // {"txnId":"null","txnRef":"aabb-34232xx-sdsd","Status":"Failed","responseCode":"01"}
      //     alert("Failure==>>>"+JSON.stringify(data));
      //   }
      //  function successCallback(data){
      //     alert("Sucess==>>>"+JSON.stringify(data));

      //     this.setState({isLoading:true})
      //     let TData={
      //       "transactionId": 0,
      //       "participation_id": null,
      //       "amount": Number(this.state.addAmount),
      //       "quantity": 0,
      //       "fkUserId": this.props.uInfo.userId,
      //       "transactionStatus": "true"
      //     }
  
      //     // console.log("ReqTran"+JSON.stringify(TData))
  
      //     TransactionApi.SaveTransaction(TData).then((ReqTdata)=>{
      //       // console.log("Tran"+JSON.stringify(ReqTdata))
      //       if(ReqTdata.status==true)
      //       {
      //       if(ReqTdata.data.length!=0)
      //       {
      //         this.setState({isLoading:false})
      //         alert('Amount successfully added')
      //         this.RefreshData()
  
      //         // console.log("tra"+JSON.stringify(ReqTdata.data[0].transactionId))  
      //       }
      //       else
      //       {
      //         this.setState({isLoading:false})
      //         notifyMessage('some error occured')
      //       }
      //      }
      //      else
      //      {
      //       this.setState({isLoading:false})
      //       notifyMessage('some error occured')
      //      }
  
      //     })  
  
      // }
  
      
      }
    }
  

    AddMoney=()=>{
        return(
          <SafeAreaView style={{flex:1,width:'100%',height:'100%',backgroundColor:backColor}}>

          <Custom_Header
            openDrawer={true}
            textHeading={true}
            // textHeading={true}
            source={back} 
            textHeading1={'Add Amount'}
            styleHeader={{backgroundColor: themeColor}}
            Navigation={() => this.props.navigation.goBack()}
          />
          
         <ScrollView>

         <View style={{width:width,alignSelf:'center'}}>
            <View style={{width:'95%',alignSelf:'center'}}>

            <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                <Ionicons name={'wallet-outline'} color={'black'} size={22}/>
                    <Text style={{fontSize:16,fontWeight:'bold',left:10}}>Current Balance</Text>
                </View>
                <View>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>₹{Number(this.state.balance)}</Text>
                </View>
            
            </View>
            </View>

            <View style={{width:width,height:1,backgroundColor:'lightgray',marginTop:dynamicSize(20)}}></View>

            <View style={{width:'90%',alignSelf:'center'}}>
            <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{borderBottomWidth:1,borderBottomColor:'black',height:dynamicSize(60),width:width/2-dynamicSize(20),backgroundColor:'#fbf9f9',padding:dynamicSize(5)}}>
                    <Text style={{color:'gray',left:5,fontSize:dynamicSize(15)}}>Amount to add</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'black',fontSize:dynamicSize(18),left:5}}>₹</Text>
                <TextInput 
                    placeholder=' 0'
                    style={{color:'black',fontSize:18,bottom:0,left:5,width:width/2-dynamicSize(45)}}
                    keyboardType={'number-pad'}
                    value={this.state.addAmount==0?'':this.state.addAmount+''}
                    maxLength={4}
                    onChangeText={(txt)=>{
                      if(txt.length!=0)
                      this.setState({addAmount:Number(txt),errMsg:''})
                      else
                      this.setState({addAmount:0,errMsg:'Amount should be greater than or equal to 50'})
                    }}
                />
                </View>
                </View>
                <TouchableOpacity style={{height:50,borderWidth:1,borderColor:'black',justifyContent:'center',}}
                  onPress={()=>{this.setState({addAmount:500})}}
                >
                <View style={{width:60}}>
                    <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>₹500</Text>    
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{height:50,borderWidth:1,borderColor:'black',justifyContent:'center',}}
                  onPress={()=>{this.setState({addAmount:1000})}}
                >
                <View style={{width:60}}>
                    <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>₹1000</Text>    
                </View>
                </TouchableOpacity>

            </View>
            </View>
            </View>
         </ScrollView>
        

        <View>
        <View style={{width:'80%',backgroundColor:'#f38589',alignSelf:'center',marginBottom:dynamicSize(10),display:this.state.errMsg!=''?'flex':'none'}}>
          <Text style={{color:'white',textAlign:'center',padding:dynamicSize(5),fontSize:getFontSize(14)}}>{this.state.errMsg}</Text>
          </View>

        <View style={{height:1,backgroundColor:'lightgray'}}></View>

     
         <View style={{padding:20,backgroundColor:backColor}}>

            
         <View style={{width:width-50,alignSelf:'center',backgroundColor:buyColor,borderRadius:10}}>
                <TouchableOpacity
                    onPress={()=>{this.AddAmount()}}
                >
                    <Text style={{padding:10,color:'white',fontSize:15,textAlign:'center'}}>Add ₹{this.state.addAmount==''?0:this.state.addAmount}</Text>  
                </TouchableOpacity>              
            </View>
        </View>
        </View>

         </SafeAreaView>
        )
    }
  
    render() {
  
        if (!this.props.network.isConnected) {
        notifyMessage("Internet Connection Error....")
        }
    
        return (
          <>
          <Loader loading={this.state.isLoading}/>
       <this.AddMoney/>
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
      export default connect(mapStateToProps)(AddMoneyView)
      const styles = StyleSheet.create({
      Container:{
        backgroundColor:'#FFFFFF',
          //flex:1,
          width:"100%",
          height:"100%",
        
      },
      SubCon:{
        marginTop:"10%",
        //backgroundColor:'white'
    }
      })