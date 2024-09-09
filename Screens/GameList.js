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
    FlatList
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
  import { themeColor } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  //import { URL, Logo1, Logo2 } from '../Constant/ApiLink';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import MDrawer from '../Components/MDrawer';
  import BottomNewScreen from './BottomNew';
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
  class GameListView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        game:false,
        mList:[{"val":1,},{"val":0},{"val":1},{"val":0},{"val":1,},{"val":0},{"val":1},{"val":0}],
      }
      
  
    }
    componentDidMount(){
        // if(this.state.game)
        // {
            
        // }
    }

    ListView(item,index){
      return(
<View style={{marginTop:10}}>
          <TouchableOpacity
            // onPress={()=>{this.props.navigation.navigate('TicTacToeGameScreen')}}
            // onPress={()=>{this.props.navigation.navigate('ProfileScreen')}}
            onPress={()=>{
              this.setState({game:true})
            }}
          >
          <View style={{alignSelf:'center',height:80,width:'95%',
          borderWidth:1,
          borderColor:themeColor,
          borderRadius:10,
          justifyContent:"center"}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:'25%'}}>
              <Image source={require('../Icons/fb.jpg')} style={{width:70,height:70,left:5,borderRadius:10}} resizeMode='stretch' />

              
            </View>
            
            <View style={{width:'50%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Doge</Text>
              <Text style={{fontSize:13,}}>DogeCoin</Text>
            </View>
            <View style={{width:'25%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',textAlign:'right'}}>₹ 250 </Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:item.val==1?'green':'red',textAlign:'right',}}>{item.val==1?'+':'-'} 0.25% </Text>
            </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      )
    }
  

    GameList=()=>{
        return(
          <>
         <ScrollView style={{backgroundColor:'white'}}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:'white' }}>
            <View style={{marginTop:50,marginBottom:20}}>
              <Text style={{fontSize:30}}>Game List</Text>
          </View>
          
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity
                onPress={()=>{
                this.setState({game:true})
            }}
            >
            <View style={{height:200,width:150,backgroundColor:themeColor,right:10,justifyContent:'center',}}>
                <Text style={{fontSize:30,textAlign:'center',color:'white'}}>Tic {'\n'}Tac {'\n'}Toi</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{height:200,width:150,backgroundColor:themeColor,left:10}}>
            <Text style={{fontSize:30,textAlign:'center',color:'white',justifyContent:'center',flex:1,alignItems:'center'}}>Coming Soon</Text>
            </View>
            </TouchableOpacity>
          </View>


          <FlatList
            data={this.state.mList}
            key={"data_dashboard"}
            keyExtractor={({ index }) => index}
            extraData={this.state.mList}
            renderItem={({ item, index }) => this.ListView(item, index)}
          />

        </View>
         </ScrollView>
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
    
          this.state.game?
          <MDrawer/>:<this.GameList/>
      
    
        );
    
      }
    }
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          
        
        };
      };
      export default connect(mapStateToProps)(GameListView)
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