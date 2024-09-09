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
  //import MDrawer from '../Components/MDrawer';
  //import store from "../Redux/Store";
  import { connect } from 'react-redux';
  //import {login} from '../RestApi';
  //import { Checkbox } from 'react-native-paper';
  //import CheckBox from '@react-native-community/checkbox';
  import { backColor, buyColor, sGreen, themeColor } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  //import { URL, Logo1, Logo2 } from '../Constant/ApiLink';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import BottomNewScreen from './BottomNew';
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { back, moneyPouch, moneyPouchP, unique1, unique2, unique3, unique4 } from '../Components/icon';
import Custom_Header from '../Components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dynamicSize, getFontSize } from '../Components/dynamicSize';
import { TransactionApi } from '../Api/TransactionAPI';

const { width, height } = Dimensions.get('window');

  class MyTransactionView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        upcoming:true,
        mList:[{"val":1,"image":unique1,"category":"Best Image","price":30},{"val":0,"image":unique2,"category":"Best Art","price":50},{"val":1,"image":unique3,"category":"Best Color","price":120},{"val":0,"image":unique4,"category":"Best Mixture","price":150},{"val":0},{"val":0},{"val":1},{"val":0},{"val":0},{"val":1},{"val":1}],
        price:150,
        TransationList:[],
        refreshing:false
      }
      
  
    }

    componentDidMount(){
      this.setState({isLoading:true})
      TransactionApi.GetAllTransactionByUserId(this.props.uInfo.userId).then((data)=>{
        // console.log("Transaction",JSON.stringify(data))
        if(data.status)
        {
          if(data.data.length!=0){
            this.setState({TransationList:data.data,isLoading:false})
            this.setState({isLoading:false})
          }
          else{
            this.setState({isLoading:false})
          }
        }
        else{
          this.setState({isLoading:false})
        }
      })
    }

    Refresh=()=>{
      this.componentDidMount();
    }

    ListView(item,index){
      return(
      <View style={{width:'100%',alignSelf:'center'}}>
        <View style={{width:'90%',alignSelf:'center'}}>
          <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',}}>
              {/* <Ionicons name={'wallet-outline'} color={'black'} size={22} style={{top:5}}/> */}
                <Image source={item.amount>0?moneyPouchP:moneyPouch} style={{width:dynamicSize(25),height:dynamicSize(25),top:dynamicSize(5)}} />
              <View style={{left:dynamicSize(15)}}>
                  <Text style={{fontSize:15,color:item.amount>0?themeColor:'black'}}>{item.amount>0?item.participation_id!=null?item.quantity!=null?"Sell Share":"Contest Profit":"Amount Added in wallet":"Buy Share"}</Text>
                  <Text style={{fontSize:12,color:item.val==1?themeColor:'gray'}}>{item.transactionDate.split('T')[0]}</Text>
              </View>
              </View>
              <View>
                  <Text style={{fontSize:15,fontWeight:'bold',color:item.amount>0?themeColor:'black'}}>{item.amount>0?item.participation_id!=null?"+":"+":"-"} ₹{Math.abs(item.amount.toFixed(7))}</Text>
              </View>
          
          </View>
        </View>
        <View style={styles.line}></View>
    </View>
      )
    }

  

    MyTransaction=()=>{
        return(
          <SafeAreaView style={{flex:1,width:'100%',height:'100%',backgroundColor:backColor}}>

          <Custom_Header
            openDrawer={true}
            textHeading={true}
            // textHeading={true}
            source={back} 
            textHeading1={'My Transaction'}
            styleHeader={{backgroundColor: themeColor}}
            Navigation={() => this.props.navigation.goBack()}
          />
          
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
  this.state.TransationList.length!=0?

         <FlatList
            data={this.state.TransationList}
            key={"data_dashboard"}
            keyExtractor={({ index }) => index}
            extraData={this.state.TransationList}
            // numColumns={2}
            renderItem={({ item, index }) => this.ListView(item, index)}
          />
          :
          <View style={{marginTop:50}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>! List not available !</Text>
              </View>
          </View>
        }
         </ScrollView>

      
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
       <this.MyTransaction/>
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
      export default connect(mapStateToProps)(MyTransactionView)
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
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'lightgray',
        marginTop:dynamicSize(20)
      }
      })