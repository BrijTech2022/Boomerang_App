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
    Dimensions
    //CheckBox
  } from 'react-native';
  // import { ICons } from '../Icons'
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
  import { backColor, themeColor, themeText } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import BottomNewScreen from './BottomNew';
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { notFound, unique1, unique2, unique3, unique4 } from '../Components/icon';
import { ContestApi } from '../Api/ContestAPI';
import { getFontSize } from '../Components/dynamicSize';
import { imageUrl } from '../Api/ApibaseUrl';
import { TransactionApi } from '../Api/TransactionAPI';
  class HoldingParticipationView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:true,
        upcoming:true,
        mList:[{"val":1,"image":unique1,"price":120},{"val":0,"image":unique2,"price":90},{"val":1,"image":unique3,"price":80},{"val":0,"image":unique4,"price":60},{"val":1,"image":unique1,"price":55},{"val":0,"image":unique4,"price":50},{"val":1,"image":unique3,"price":42},{"val":0,"image":unique2,"price":20}],
        HoldingList:[],
        refreshing:false
      }
      
  
    }

    componentDidMount(){
        this.setState({isLoading:true})
        let HoldReq={
            "fkUserId": this.props.uInfo.userId
          }
      TransactionApi.GetHoldingByUserId(HoldReq).then((data)=>{

        console.log("holding=>>>",JSON.stringify(data))

        if(data.data.length!=0)
        {
          this.setState({HoldingList:data.data,isLoading:false})
        }
        else
        {
          this.setState({HoldingList:[],isLoading:false})
        }
      })
    }

    willFocus = this.props.navigation.addListener(
      'focus',
      (payload) => {
        this.componentDidMount()
      }
    );

    Refresh=()=>{
      this.componentDidMount()
    }

    FindPercentage=(base,live)=>{
      base=(base!=0 && base !=null)?base:1;
      live=(live!=0 && live !=null)?live:1;
      // console.log(base)
      // console.log(live)
      return ((live-base)/base*100).toFixed(2)
    }

    FindProfitValue=(sell,qty,investment,live)=>{
        sell=(sell!=null && sell!=0)?sell:live;
        // live=(live!=null && live!=0)?live:0;
        let benefit=sell*qty;

        // console.log(benefit.toFixed(2))
        // console.log(investment.toFixed(2))
        let profit=benefit.toFixed(2)-investment.toFixed(2);

        return (profit).toFixed(2);
    }

    FindSellPrice=(sell,qty,live)=>{
      sell=(sell!=null && sell!=0)?sell:live;
      let profit=sell*qty;

      return profit.toFixed(4);
    }

    ListView1(item,index){
      return(
        <View style={{marginTop:10}}>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('SellStock',{data:item})}}
          >
          <View style={{alignSelf:'center',height:80,width:'95%',
          borderWidth:1,
          borderColor:themeColor,
          borderRadius:10,
          justifyContent:"center"}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:'25%'}}>
              <Image 
              source={item.imageURL?{uri:imageUrl+item.imageURL}:notFound} 
              style={{width:70,height:70,left:5,borderRadius:10}} resizeMode='stretch' />

              
            </View>
            
            <View style={{width:'50%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:themeText}}>{item.quantity?item.quantity:0} Qty</Text>
              <Text style={{fontSize:13,color:themeText}}>₹{item.currentAmount!=null?item.currentAmount.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]:item.liverate?item.liverate.toFixed(2):0.00}</Text>
              <Text style={{fontSize:12,color:'red'}}>Purchase Price: ₹{item.baseAmount?item.baseAmount.toFixed(4):0.00}</Text>
            </View>
            <View style={{width:'25%',height:70,top:10,right:3}}>
              {/* <Text style={{fontSize:16,fontWeight:'bold',textAlign:'right'}}>₹ {item.quantity * item.currentAmount.toFixed(4)} </Text> */}

              <Text style={{fontSize:12,fontWeight:'bold',textAlign:'right',color:themeText}}>₹ {item.amount.toFixed(2)} </Text>
              
              <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:getFontSize(11),color:this.FindPercentage(item.baseAmount,item.currentAmount)>=0?'green':'red',textAlign:'right',right:5}}>({(this.FindPercentage(item.baseAmount,item.currentAmount)>=0?"+"+this.FindPercentage(item.baseAmount,item.currentAmount):this.FindPercentage(item.baseAmount,item.currentAmount))}%)</Text>

              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'right',color:this.FindProfitValue(item.currentAmount,item.quantity,item.amount,item.liverate)>=0?'green':'red'}}> ₹ {this.FindProfitValue(item.currentAmount,item.quantity,item.amount,item.liverate)>=0?'+'+this.FindProfitValue(item.currentAmount,item.quantity,item.amount,item.liverate):this.FindProfitValue(item.currentAmount,item.quantity,item.amount,item.liverate)} 
              </Text>
              </View>

              <Text style={{fontSize:16,fontWeight:'bold',textAlign:'right',color:themeText}}>₹ {this.FindSellPrice(item.currentAmount,item.quantity,item.liverate)} </Text>


              {/* <Text style={{fontSize:getFontSize(12),color:this.FindPercentage(item.baseAmount,item.liverate)>=0?'green':'red',textAlign:'right',right:5}}>{(this.FindPercentage(item.baseAmount,item.liverate)>=0?"+"+this.FindPercentage(item.baseAmount,item.liverate):this.FindPercentage(item.baseAmount,item.liverate))}%</Text> */}

            </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      )
    }

    ListView(item,index){
      return(
    <View style={{marginTop:10}}>
          <TouchableOpacity
            // onPress={()=>{this.props.navigation.navigate('ViewDetailScreen')}}
          >
          <View style={{height:150,width:'50%',marginLeft:25,marginRight:25,
          // borderWidth:1,
          // borderColor:themeColor,
          borderRadius:10,
          justifyContent:"center"}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:120}}>
              <Image source={require('../Icons/fb.jpg')} style={{width:130,height:130,left:5,borderRadius:10}} resizeMode='stretch' />

              
            </View>
            
            {/* <View style={{width:'50%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Doge</Text>
              <Text style={{fontSize:13,}}>DogeCoin</Text>
            </View> */}
            {/* <View style={{width:70,height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',}}>₹ 250 </Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:item.val==1?'green':'red',}}>{item.val==1?'+':'-'} 0.25% </Text>
            </View> */}
            </View>


          </View>

            {/* <View style={{height:30,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',}}>₹ 250 </Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:item.val==1?'green':'red',}}>{item.val==1?'+':'-'} 0.25% </Text>
            </View> */}

          <View>
          <View style={{height:30,left:45}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Doge</Text>
              <Text style={{fontSize:13,}}>DogeCoin</Text>
            </View>
          </View>

          </TouchableOpacity>
        </View>
      )
    }
  
  
    HoldingParticipation=()=>{
        return(
          <>
          <View style={{width:'100%',height:'100%',backgroundColor:backColor}}>

         <ScrollView
            refreshControl={
              <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.Refresh}
            />
            }
         >

       


        {
          this.state.HoldingList.length!=0?
          < FlatList
            data={this.state.HoldingList}
            key={"data_dashboard"}
            keyExtractor={({ index }) => index}
            extraData={this.state.HoldingList}
            // numColumns={2}
            renderItem={({ item, index }) => this.ListView1(item, index)}
          />
          :
          <View style={{marginTop:50}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>! Holding not available !</Text>
              </View>
          </View>
        }
        

         </ScrollView>
         </View>
        {/* <BottomNewScreen/> */}
         </>
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
       <this.HoldingParticipation/>
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
      export default connect(mapStateToProps)(HoldingParticipationView)
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