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
import { NavigationContainer } from '@react-navigation/native';
import Store from '../Redux/Store';
class BottomNewView extends React.PureComponent {

    constructor(props) {
      super(props);
  
      this.state = {
      }
      
      console.log(JSON.stringify(props))
  
    }

    BottomNew=()=>{
        return(
        <View style={{bottom:0,backgroundColor:themeColor,height:50,}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{alignContent:'center',justifyContent:'center',left:20}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('HomeScreen')}
                
            >
                <Simple name={"home"} size={30} color={'white'} style={{top:7}} />
            </TouchableOpacity>
          </View>
          <View style={{alignContent:'center',justifyContent:'center'}}>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('ProfileScreen')}
            >
                <Evillcons name={"user"} size={45} color={'white'} style={{top:7}} />
            </TouchableOpacity>
          </View>

          <View style={{alignContent:'center',justifyContent:'center',right:20}}>
            <TouchableOpacity
            // onPress={()=>this.props.navigation.navigate('ExistScreen')}
            onPress={()=>{Store.dispatch(setLoginState({Logout:true}))}}
            >
                <Octicons name={"sign-out"} size={30} color={'white'} style={{top:7}} />
            </TouchableOpacity>
          </View>
         </View>
         </View>
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
        //   <NavigationContainer>
       <this.BottomNew/>
    //    </NavigationContainer>
      
    
        );
    
      }
    }
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          
        
        };
      };
      export default connect(mapStateToProps)(BottomNewView)