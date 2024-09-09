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
    //CheckBox
} from 'react-native';
import { Globalstyles } from '../Styles/GlobalStyle'
import Icon from 'react-native-vector-icons/Entypo';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import Evillcons from 'react-native-vector-icons/EvilIcons'
import Octicons from 'react-native-vector-icons/Octicons';
import RIcon from 'react-native-vector-icons/MaterialIcons';
import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
//import MDrawer from '../Components/MDrawer';
//import store from "../Redux/Store";
import { connect } from 'react-redux';
//import {login} from '../RestApi';
import { ScrollView } from 'react-native-gesture-handler';
//import { Checkbox } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { themeColor } from '../Styles/Color';
import { Loader } from '../Components/Loader';
import { notifyMessage } from '../Components/Toast';
import { ActivityIndicator } from 'react-native';
import store from '../Redux/Store';
//import { URL, Logo1, Logo2 } from '../Constant/ApiLink';
import { setCartCount, setLoginState } from '../Redux/Actions';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import BottomNewScreen from './BottomNew';
class ReceiptView extends React.PureComponent {

    constructor(props) {
      super(props);
  
      this.state = {
      }
      
  
    }

    Receipt=()=>{
        return(
          <>
          <ScrollView>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{marginTop:100}}>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('GRCPacketScreen')}
              >
          <View style={{borderWidth:2,borderColor:themeColor,width:310,padding:10,borderRadius:30,marginTop:10,flexDirection:'row'}}>
            <Image source={require('../Icons/stockscan.png')} style={{width:25,height:25,marginLeft:5}} />
            <Text style={{fontSize:16,textAlignVertical:'center',left:5}}>Good Recipt-Box wise/packet wise</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{borderWidth:2,borderColor:themeColor,width:310,padding:10,borderRadius:30,marginTop:10,flexDirection:'row'}}>
            <Image source={require('../Icons/reportproduct.png')} style={{width:25,height:25,marginLeft:5}} />
            <Text style={{fontSize:16,textAlignVertical:'center',left:5}}>Good Recipt- Prepack wise</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{borderWidth:2,borderColor:themeColor,width:310,padding:10,borderRadius:30,marginTop:10,flexDirection:'row'}}>
            <Image source={require('../Icons/promotion.png')} style={{width:25,height:25,marginLeft:5}} />
            <Text style={{fontSize:16,textAlignVertical:'center',left:5}}>Good Recipt- Item wise</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{borderWidth:2,borderColor:themeColor,width:310,padding:10,borderRadius:30,marginTop:10,flexDirection:'row'}}>
            <Image source={require('../Icons/promotion.png')} style={{width:25,height:25,marginLeft:5}} />
            <Text style={{fontSize:16,textAlignVertical:'center',left:5}}>Stock Take</Text>
          </View>
          </TouchableOpacity>
          </View>
        </View>
         </ScrollView>
        <BottomNewScreen/>
         </>
        )
    }

    render() {

        // if (!this.props.network.isConnected) {
        // console.log("Internet Connection Error....")
        //   // return null
        // }
    
        return (
    
          //  this.props.loginInfo.isLoggedIn?
          ////require('../Icons/logo1.png')
       <this.Receipt/>
      
    
        );
    
      }
    }
    // const mapStateToProps = (state) => {
    //     return {
    //       network: state.network,
          
        
    //     };
    //   };connect(mapStateToProps)
      export default (ReceiptView)