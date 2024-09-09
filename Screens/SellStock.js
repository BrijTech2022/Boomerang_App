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
  import { backColor, themeColor } from '../Styles/Color';
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
import { TransactionApi } from '../Api/TransactionAPI';
import { dynamicSize, getFontSize } from '../Components/dynamicSize';
import { ContestApi } from '../Api/ContestAPI';

const { width, height } = Dimensions.get('window');

  class SellStockView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        liverate:0,
        balance:0,
        qty:0,
        needAmount:0,
        warning:false,
        errmsg:'',
        participation_id:null,
        totalUnit:0,
        Qtywarning:false,
        maxQtyAmount:100,
        selfQty:0,
        baseAmount:0,
        OgLiveRate:0,
      }
  
    }

    componentDidMount(){
      // console.log("Buy="+JSON.stringify(this.props.route.params.data))
      // if(this.props.route.params.data)
      // {
        this.setState({
          // liverate:this.props.route.params.data.liverate,
          participation_id:this.props.route.params.data.id,
        },()=>{this.ParticipationDetail()})
      // }
      this.GetWalletAmount();

    }

    ParticipationDetail=()=>{
      this.GetSelfQty();
      ContestApi.GetDetailsByParticipationId(this.state.participation_id).then((data)=>{
        console.log(data)
        if(data.status==true)
        {
          if(data.data.length!=0)
          {
            this.setState({
              // liverate:Math.abs(data.data[0].liverate.toFixed(2)),
              liverate:data.data[0].sellPrice!=null?Math.abs(data.data[0].sellPrice.toFixed(4)):Math.abs(data.data[0].liverate.toFixed(4)),
              totalUnit:data.data[0].totalUnit-data.data[0].quantity,
              baseAmount:data.data[0].baseAmount,
              OgLiveRate:Math.abs(data.data[0].liverate.toFixed(4)),
            })
          }
        }
        console.log("participationSell====>>"+JSON.stringify(data))
      })
    }

    GetSelfQty=()=>{

      let Sdata={
        "participation_id": this.state.participation_id,
        "fkUserId":this.props.uInfo.userId
      }

      TransactionApi.GetParticipationStockQuantityByUserId(Sdata).then((data)=>{
        if(data.status)
        {
          if(data.data.length!=0)
          {
            this.setState({selfQty:data.data[0].quantity==null?0:data.data[0].quantity})
          }
        }
      })

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
        // console.log("Wallet"+JSON.stringify(data))
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
      this.setState({
        // liverate:5,
        balance:0,
        qty:0,
        needAmount:0,
        warning:false,
        errmsg:'',
      },()=>{
        this.ParticipationDetail();
        this.GetWalletAmount();
      })


    }

    checkAmount=(txt)=>{
        this.setState({qty:Number(txt),needAmount:Number(this.state.liverate)*Number(txt)})
        if(this.state.selfQty>=Number(txt))
        {
        // if(this.state.balance<=(Number(this.state.liverate)*Number(txt)))
        // {
        //   this.setState({warning:true,errmsg:'Available amount is not enough'})
        // }
        // else
        // {
          this.setState({warning:false,errmsg:''})
        // }
       }
       else
       {
        this.setState({warning:true,errmsg:'You have only '+this.state.selfQty+' shares to sell.'})
       }
    }

    SellStockQty=()=>{
      if(this.state.qty==0)
      {
        this.setState({warning:true,errmsg:'Quantity should be more than 0'})
      }
      else
      { 
        if(this.state.selfQty>=this.state.qty)
        {

        this.setState({isLoading:true})

            let TData={
              "transactionId": 0,
              "participation_id": Number(this.state.participation_id),
              "amount": Number(this.state.needAmount),
              "quantity": -Number(this.state.qty),
              "fkUserId": this.props.uInfo.userId,
              "transactionStatus": "true"
            }

            // console.log("ReqTran"+JSON.stringify(TData))
  
            TransactionApi.SaveTransaction(TData).then((ReqTdata)=>{
              // console.log("Tran"+JSON.stringify(ReqTdata))
              if(ReqTdata.status==true)
              {
              if(ReqTdata.data.length!=0)
              {
                this.setState({isLoading:false})
                alert('Sell success')
                this.RefreshData()
                this.props.navigation.navigate('HomeScreen');

                // console.log("tra"+JSON.stringify(ReqTdata.data[0].transactionId))  
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
       this.setState({warning:true,errmsg:'You have only '+this.state.selfQty+' shares to sell.'})
      }

      }
    }

    FindPercentage=(base,live)=>{
      base=(base!=0 && base !=null)?base:1;
      live=(live!=0 && live !=null)?live:1;
      // console.log(base)
      return ((live-base)/base*100).toFixed(2)
    }


    SellStock=()=>{
        return(
          <SafeAreaView style={{flex:1,width:'100%',height:'100%',backgroundColor:backColor}}>

          <Custom_Header
            openDrawer={true}
            textHeading={true}
            // textHeading={true}
            source={back} 
            textHeading1={'Sell Share'}
            styleHeader={{backgroundColor: themeColor}}
            Navigation={() => this.props.navigation.goBack()}
          />
          
         <ScrollView>

            <View style={{width:'95%',alignSelf:'center'}}>

            <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize:25,fontWeight:'bold',}}>₹ {this.state.liverate} <Text style={{fontSize:15,fontWeight:'bold',color:this.FindPercentage(this.state.baseAmount,this.state.OgLiveRate)>=0?'green':'red' }}>( {this.FindPercentage(this.state.baseAmount,this.state.OgLiveRate)>=0?"+"+this.FindPercentage(this.state.baseAmount,this.state.OgLiveRate):this.FindPercentage(this.state.baseAmount,this.state.OgLiveRate)}% )</Text></Text>
              
              </View>
              <View>
              <Text style={{fontSize:14,top:10,color:'gray'}}>Share available <Text style={{fontWeight:'bold',color:'green'}}>{this.state.selfQty}</Text></Text>
              
              </View>
              </View>
            </View>

            <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:15}}>Quantity :</Text>
                <View style={{borderWidth:1,borderColor:'lightgray',height:30,width:width/4,}}>
                <TextInput 
                    placeholder='0'
                    style={{left:5,color:'black',width:'100%'}}
                    keyboardType={'number-pad'}
                    maxLength={8}
                    value={this.state.qty==0?'':this.state.qty+''}
                    onChangeText={(txt)=>{
                      if(txt.length!=0){
                      // this.setState({qty:Number(txt),needAmount:Number(this.state.liverate)*Number(txt)})
                        this.checkAmount(txt)
                    }
                    else {
                      this.setState({qty:0,needAmount:0,warning:false,errmsg:''})
                    }
                  }}
                />
                </View>
            </View>
            <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:15}}>Price :</Text>
                <View style={{borderWidth:1,borderColor:'lightgray',height:30,width:width/4,}}>
                <TextInput 
                    placeholder='₹ 0'
                    style={{left:5,color:'black'}}
                    keyboardType={'number-pad'}
                    editable={false}
                    value={'₹ '+this.state.liverate}
                />
                </View>
            </View>

    


   


            </View>
         </ScrollView>
        

        <View>
          <View style={{width:'80%',backgroundColor:'#f38589',alignSelf:'center',marginBottom:dynamicSize(10),display:this.state.warning==true?'flex':'none'}}>
          <Text style={{color:'white',textAlign:'center',padding:dynamicSize(5),fontSize:getFontSize(14)}}>{this.state.errmsg}</Text>
          </View>
        <View style={{height:1,backgroundColor:'lightgray'}}></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:25,marginTop:5}}>
            <View>
                <Text style={{color:'gray'}}>Balance :  ₹{this.state.balance}</Text>
            </View>
            <View>
                <Text style={{color:'gray'}}>Get Amount :  ₹{this.state.needAmount.toFixed(2)}</Text>
            </View>
        </View>
         <View style={{padding:20,backgroundColor:backColor}}>

            
         <View style={{width:width-50,alignSelf:'center',backgroundColor:'#ED2939',borderRadius:10}}>
                <TouchableOpacity
                  onPress={()=>{
                    // if(this.state.qty!=0 && this.state.warning==true){
                    // this.props.navigation.navigate('AddMoneyScreen')
                    // // alert('Add money')
                    // }
                    // else
                    // {
                      this.SellStockQty()
                    // }
                  }}

                  disabled={this.state.warning}
                >
                    <Text style={{padding:10,color:'white',fontSize:15,textAlign:'center'}}>{"Sell"}</Text>  
                </TouchableOpacity>              
            </View>
        </View>
        </View>

      
        {/* <BottomNewScreen/> */}
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
          <Loader loading={this.state.isLoading}/>
       <this.SellStock/>
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
      export default connect(mapStateToProps)(SellStockView)
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