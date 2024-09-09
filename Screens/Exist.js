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
// import { ICons } from '../Icons'
import { Globalstyles } from '../Styles/GlobalStyle'
import Icon from 'react-native-vector-icons/Entypo';
import RIcon from 'react-native-vector-icons/MaterialIcons';
import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
//import MDrawer from '../Components/MDrawer';
//import store from "../Redux/Store";
import { connect } from 'react-redux';
//import {login} from '../RestApi';
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
import { ScrollView } from 'react-native-gesture-handler';
import BottomNewView from './BottomNew';
class ExistView extends React.PureComponent {

    constructor(props) {
      super(props);
  
      this.state = {
      }
      
  
    }

    Exist=()=>{
        return(
          <>
          <ScrollView>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#006600", fontSize: 40 }}>! Exist Screen!</Text>
        </View>
        
        </ScrollView>
        <BottomNewView/>
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
       <this.Exist/>
      
    
        );
    
      }
    }
    // const mapStateToProps = (state) => {
    //     return {
    //       network: state.network,
          
        
    //     };
    //   };connect(mapStateToProps)
      export default (ExistView)