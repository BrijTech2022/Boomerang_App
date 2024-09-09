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
class GRCPacketView extends React.PureComponent {

    constructor(props) {
      super(props);
  
      this.state = {
      }
      
  
    }

    GRCPacket=()=>{
        return(
          <>
          <ScrollView>
          <View style={{ flex: 1,width:'90%',alignSelf:'center'}}>
            <View>
            <View style={styles.input}>
                <Text style={{fontSize:18,bottom:3,color:'#484848'}}>STO Invoice</Text>
                <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1,flexDirection:'row',justifyContent:'space-between'}}>
                
                <TextInput
                  style={[styles.TextInput,{left:10,width:250}]}
                  placeholderTextColor="gray"
                  placeholder='Scan Invoice'
                  
                />
                <TouchableOpacity>
                <Image source={require('../Icons/scan.png')} style={{width:30,height:30,right:10,top:5}} />
                </TouchableOpacity>
                </View>
              </View>

              <View style={styles.input}>
                <Text style={{fontSize:18,bottom:3,color:'#484848'}}>HU / Box Condition</Text>
                <View style={{}}>
                


                </View>
              </View>

              <View style={styles.input}>
                <Text style={{fontSize:18,bottom:3,color:'#484848'}}>HU / Box Scan</Text>
                <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1,flexDirection:'row',justifyContent:'space-between'}}>
                
                <TextInput
                  style={[styles.TextInput,{left:10,width:250}]}
                  placeholderTextColor="gray"
                  placeholder='Scan Packet'
                  
                />
                <TouchableOpacity>
                <Image source={require('../Icons/scan.png')} style={{width:30,height:30,right:10,top:5}} />
                </TouchableOpacity>
                </View>
              </View>

              <View style={styles.input}>
                <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Last Scan</Text>
                <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1}}>
                
                <TextInput
                  style={[styles.TextInput,{left:10,width:250}]}
                  // placeholderTextColor="gray"
                  // placeholder='Scan Invoice'
                  
                />

                </View>
              </View>

              <View style={styles.input}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View>
                    <Text style={{fontSize:15,bottom:3,color:'#484848'}}>Total HU / Box</Text>
                    <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1}}>
                  <TextInput
                  style={[styles.TextInput,{left:10,width:150}]}
                  placeholder="100"
                  
                />
                </View>
                  </View>
                  <View>
                    <Text style={{fontSize:15,bottom:3,color:'#484848'}}>OK Rec. HU / Box</Text>
                    <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1}}>
                  <TextInput
                  style={[styles.TextInput,{left:10,width:150}]}
                  placeholder="80"
                  
                />
                </View>
                  </View>
                </View>  
              </View>


                <View style={styles.input}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View>
                    <Text style={{fontSize:15,bottom:3,color:'#484848'}}>Damaged Rec.HU / Box</Text>
                    <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1}}>
                  <TextInput
                  style={[styles.TextInput,{left:10,width:150}]}
                  placeholder="10"
                  
                />
                </View>
                  </View>
                  <View>
                    <Text style={{fontSize:15,bottom:3,color:'#484848'}}>Balance  HU / Box</Text>
                    <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1}}>
                  <TextInput
                  style={[styles.TextInput,{left:10,width:150}]}
                  // defaultValue="80"
                  placeholder="10"
                  
                />
                </View>
                  </View>
                </View>  
              </View>

              <View style={styles.input}>
                <Text style={{fontSize:18,bottom:3,color:'#484848'}}>Mismatch HU / Box</Text>
                <View style={{borderRadius: 30,borderColor:'gray',borderWidth:1,flexDirection:'row',justifyContent:'space-between'}}>
                
                <TextInput
                  style={[styles.TextInput,{left:10,width:250}]}
                  // placeholderTextColor="gray"
                  // placeholder='Scan Invoice'
                  
                />
                {/* <TouchableOpacity>
                <Image source={require('../Icons/scan.png')} style={{width:30,height:30,right:10,top:5}} />
                </TouchableOpacity> */}
                </View>
              </View>
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
       <this.GRCPacket/>
      
    
        );
    
      }
    }
    // const mapStateToProps = (state) => {
    //     return {
    //       network: state.network,
          
        
    //     };
    //   };connect(mapStateToProps)
      export default (GRCPacketView)
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
Main: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: '10%',

},
loginTxt: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 0.6,
    fontWeight:'bold'

},
txt: {
    fontSize: 18,
    color: 'black'
},
loginForm: {
    marginTop: "20%",
    width:300
},
TextInput: {
    padding: 5,
    // backgroundColor: '#CCCCCC',
    // borderRadius: 10,
    // borderColor:'gray',
    // borderWidth:1,
    //marginVertical: 10
},
input:{
    marginVertical:10,
    
    
},
loginBtn: {
    // width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:'40%',
    backgroundColor: "#0068e5",
}
})