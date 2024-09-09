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

    class RefundPolicyView extends React.PureComponent {

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
            textHeading1={'Refund Policy'}
            styleHeader={{backgroundColor: themeColor}}
            Navigation={() => this.props.navigation.goBack()}
            />
            
            <ScrollView>
                <View>
                    <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',}}>Refund Policy for Education Trade App (Boomerang)</Text>

                    <View style={{width:'95%',alignSelf:'center',marginTop:dynamicSize(10)}}>
                        <Text style={styles.subHeadingTxt}>Introduction</Text>
                        <Text style={styles.contentTxt}>We are committed to ensuring that our users have a positive experience with our Education Trade App. To maintain transparency and trust, we have outlined our refund policy below. This policy explains the conditions under which refunds are granted, the process for requesting a refund, and other relevant details.</Text>

                        <Text style={styles.subHeadingTxt}>Refund Eligibility</Text>
                        <Text style={styles.contentTxt}>
                            <Text style={{fontWeight:'bold'}}>1. Initial Deposits:</Text> Users can deposit funds into their account to participate in the Education Trade App. These deposits are subject to a 10% non-refundable fee. The remaining 90% of the deposit is refundable under the conditions stated below.</Text>
                        <Text style={styles.contentTxt}>
                        <Text style={{fontWeight:'bold'}}>2. Safe Funds:</Text> We guarantee that your funds are secure. Any deposited funds, minus the 10% non-refundable fee, can be refunded upon request.</Text>

                        <Text style={styles.subHeadingTxt}>Refund Conditions</Text>
                        <Text style={styles.contentTxt}>
                            <Text style={{fontWeight:'bold'}}>1. Refund Requests: </Text>Users can request a refund at any time. The refund will include 90% of the total deposited amount.</Text>
                            <Text style={styles.contentTxt}>
                            <Text style={{fontWeight:'bold'}}>2. Processing Time: </Text>Refund requests will be processed within 1-3 business days from the date of request. Users will receive an email confirmation once the refund has been processed.</Text>
                            <Text style={styles.contentTxt}>
                            <Text style={{fontWeight:'bold'}}>3. Method of Refund: </Text>Refunds will be issued to the original payment method used for the deposit. In cases where this is not possible, an alternative method may be arranged, subject to our discretion and agreement with the user.</Text>

                        <Text style={styles.subHeadingTxt}>Non-Refundable Situations</Text>
                        <Text style={styles.contentTxt}>
                        <Text style={{fontWeight:'bold'}}>1. 10% Deduction: </Text>A non-refundable fee of 10% is deducted from the total deposit to cover administrative and processing costs.</Text>
                        <Text style={styles.contentTxt}>
                        <Text style={{fontWeight:'bold'}}>2. Violation of Terms: </Text>If a user is found to be in violation of our Terms of Service or engaged in fraudulent activities, their refund request may be denied.</Text>

                        <Text style={styles.subHeadingTxt}>Contact Us</Text>
                        <Text style={styles.contentTxt}>If you have any questions or need further assistance regarding our refund policy, please do not hesitate to contact our customer support team: </Text>
                        <Text style={[styles.contentTxt,{color:'blue', }]} onPress={()=>{Linking.openURL('mailto:info@boomerang.net.in')}}><Text style={{fontWeight:'bold',color:'black',  }}>Email:</Text> info@boomerang.net.in</Text>
                        <Text style={styles.contentTxt}><Text style={{fontWeight:'bold'}}>Phone:</Text> +91 9838543714, +91 9565566662</Text>

                        <Text style={styles.subHeadingTxt}>Changes to the Refund Policy</Text>
                        <Text style={styles.contentTxt}>We reserve the right to modify this refund policy at any time. Any changes will be posted within the app and on our website. Users are encouraged to review this policy periodically to stay informed about our refund practices.</Text>
                        <View style={{height:1,backgroundColor:'black',marginVertical:5,top:3}}></View>
                        <Text style={styles.contentTxt}>By using the Education Trade App, you agree to this refund policy. Thank you for being a valued user. Your trust and satisfaction are our top priorities.</Text>

                        <View style={{height:1,backgroundColor:'black',marginVertical:5,top:3}}></View>
                        
                        <Text style={styles.contentTxt}><Text style={{fontWeight:'bold'}}>Disclaimer:</Text> This refund policy is for informational purposes only and does not constitute legal advice. Please consult with a legal professional for advice tailored to your specific circumstances.</Text>
                    </View>
                    

                </View>
            </ScrollView>

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
      export default connect(mapStateToProps)(RefundPolicyView)
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
      },
    subHeadingTxt:{
        fontSize:19,
        fontWeight:'bold',
        marginTop:dynamicSize(10)
    },
    contentTxt:{
        fontSize:16,
        marginTop:dynamicSize(5)
    }
      })