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
    ScrollView,
    FlatList,
    useState
    //CheckBox
  } from 'react-native';
  //import { ICons } from '../Icons'
  import { Globalstyles } from '../Styles/GlobalStyle'
  import Icon from 'react-native-vector-icons/Entypo';
  import AntIcon from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import RIcon from 'react-native-vector-icons/MaterialIcons';
  import MCICON from 'react-native-vector-icons/MaterialCommunityIcons';
  import Foundation from 'react-native-vector-icons/Foundation';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import * as React from 'react';
  //import DatePicker from 'react-native-date-picker';
  // import CalendarPicker from 'react-native-calendar-picker';
  //import MDrawer from '../Components/MDrawer';
  //import store from "../Redux/Store";
  import { connect } from 'react-redux';
  //import {login} from '../RestApi';
  //import { Checkbox } from 'react-native-paper';
  // import CheckBox from '@react-native-community/checkbox';
  import { themeColor } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  //import { URL, Logo1, Logo2 } from '../Constant/ApiLink';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import SearchScreen from './Receipt';
  
  class TopView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
  
      }
  
  
    }
  
  
  
    TopNav = () => {
      return (
          
            <View style={styles.header}>
                <View style={{flexDirection:'row',}}>    
                {/* <Image source={require('../Icons/learnearnlogo-white.png')} resizeMode='stretch' style={{
                    width:180,
                    height:46,
                    // left:15,
                }} /> */}
                <Text style={{width:180,textAlign:'center',color:'white',fontSize:22,fontWeight:'bold',top:10}}>Boomerang</Text>

                <TouchableOpacity style={{marginLeft:'15%',padding:'2%'}}
                  onPress={()=>{
                    this.props.navigation.navigate('WalletScreen')
                  }}
                >
                {/* <FontAwesome name={'search'} color={'white'} size={25}></FontAwesome> */}
                <Ionicons name={'wallet-outline'} color={'white'} size={35}/>
                </TouchableOpacity>

                {/* <TouchableOpacity style={{padding:'3%'}}
                  onPress={()=>{this.props.navigation.navigate('AddtocardScreen')}}
                >
                <FontAwesome name={'shopping-basket'} color={'white'} size={25}></FontAwesome>
                <Text style={{color:'white',backgroundColor:'#bc004a',width:'80%',borderRadius:10,textAlign:'center',padding:2,top:-30,left:18}}>{this.props.count}</Text>
                </TouchableOpacity> */}
                </View>
            
            {/* <View style={{
                flexDirection:'row',
                backgroundColor:'white',
                width:'98%',
                alignSelf:'center',
                // borderWidth:10,
                // borderRadius:30
                }}>
            <FontAwesome style={{padding:'1%'}} name={'search'} color={'black'} size={20}></FontAwesome>
                <TextInput
                    placeholder='Search...'
                    style={{
                        backgroundColor:'white',
                        width:'90%',
                        
                    }}
                />
                </View> */}
            </View>   
          
      
      )
    }
  
    render() {
  
    //   if (!this.props.network.isConnected) {
    //     notifyMessage("Internet Connection Error....")
    //     // return null
    //   }
  
      return (
  
        //  this.props.loginInfo.isLoggedIn?
        ////require('../Icons/logo1.png')
        <this.TopNav />
  
  
      );
  
    }
  }
//   const mapStateToProps = (state) => {
//     return {
//       network: state.network,
//       count:state.CartCount.count
  
//     };
//   };connect(mapStateToProps)
  export default (TopView)
  
  const styles = StyleSheet.create({
    header:{
        width:'100%',
        // backgroundColor:'#101427',
        padding:'1%',
      
    }
  })