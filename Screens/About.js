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
  //import MDrawer from '../Components/MDrawer';
  //import store from "../Redux/Store";
  import { connect } from 'react-redux';
  //import {login} from '../RestApi';
  //import { Checkbox } from 'react-native-paper';
  //import CheckBox from '@react-native-community/checkbox';
  import { backColor, themeColor } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  //import { URL, Logo1, Logo2 } from '../Constant/ApiLink';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import BottomNewScreen from './BottomNew';
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { unique1, unique2, unique3, unique4 } from '../Components/icon';
  class AboutView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        mList:[{"val":1,"image":unique1,"price":120},{"val":0,"image":unique2,"price":90},{"val":1,"image":unique3,"price":80},{"val":0,"image":unique4,"price":60},{"val":1,"image":unique1,"price":55},{"val":0,"image":unique4,"price":50},{"val":1,"image":unique3,"price":42},{"val":0,"image":unique2,"price":20}],
      }
      
  
    }


  

    About=()=>{
        return(
          <>
          <View style={{width:'100%',height:'100%',backgroundColor:backColor}}>

         <ScrollView>
            
            <View>
                <Text>About Us</Text>
            </View>

        

         </ScrollView>
         </View>
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
       <this.About/>
       </>
      
    
        );
    
      }
    }
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          
        
        };
      };
      export default connect(mapStateToProps)(AboutView)
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