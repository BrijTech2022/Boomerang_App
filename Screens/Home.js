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
  import { backColor, themeColor, themeText } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  //import { URL, Logo1, Logo2 } from '../Constant/ApiLink';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import BottomNewScreen from './BottomNew';
  import * as Screen from '.';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ContestApi } from '../Api/ContestAPI';
import Dash_Header from '../Components/dashboardHeader';
import { dynamicSize } from '../Components/dynamicSize';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
  const Tab =createMaterialTopTabNavigator();
  const Stack = createStackNavigator();
  class AdminView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        upcoming:true,
        mList:[{"val":1,},{"val":0},{"val":1},{"val":0},{"val":1,},{"val":0},{"val":1},{"val":0}],
      }
      
  
    }

    componentDidMount(){
      // ContestApi.GetAllContest().then((data)=>{
      //   // console.log("AllContest===="+JSON.stringify(data))
      // })

      // console.log("LoginData===>>>",this.props.loginInfo.UserInfo.token)
    }

    ListView1(item,index){
      return(
<View style={{marginTop:10}}>
          <TouchableOpacity
            // onPress={()=>{this.props.navigation.navigate('TicTacToeGameScreen')}}
            // onPress={()=>{this.props.navigation.navigate('ProfileScreen')}}
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

    ListView(item,index){
      return(
<View style={{marginTop:10}}>
          <TouchableOpacity
            // onPress={()=>{this.props.navigation.navigate('TicTacToeGameScreen')}}
            // onPress={()=>{this.props.navigation.navigate('ProfileScreen')}}
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
  
    TabScreen(props){
    
        
      return(
        <>
        
        <Tab.Navigator initialRouteName={props.route.name}
        screenOptions={({route})=>({ tabBarLabelStyle: { fontSize: 12, fontWeight:"bold",marginTop:0},
            tabBarItemStyle: { width: width/3,height:40,marginTop:0},
            
            
          tabBarScrollEnabled:true,

          // tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12,fontWeight:'bold',color:themeText },
          // tabBarStyle: { backgroundColor: 'powderblue' },
          tabBarIndicatorStyle:{backgroundColor:themeColor},

          /*tabBarIcon: ({ focused }) => {
            let iconName;
         // console.log(route.params?.p)
         return focused?<Ionicons name={'ios-information-circle'} size={26} color={"white"} /> :route.params?.p;
                  
            //return iconName;
             
            // You can return any component that you like here!
           
            
          },*/
          lazy:true,
      
            
          })}   barStyle= {{
            
            
            
          } }
          
          
            >
              
           {/* <Tab.Screen name="MyMenu"   component={Screen.Home} initialParams={{p:<Updicon name={"update"} size={30} color={"white"} />}} />
            <Tab.Screen name="Scan" component={Screen.Categories} initialParams={{p:<Aticon style={{top:-10}} name={"qrcode"} size={40} color={"white"} />}}/> 
            <Tab.Screen name="Coupan" component={Screen.CoupanScreen} initialParams={{p:<Updicon name={"home-work"} size={30} color={"white"} />}} /> 
        */}
          
            <Tab.Screen name="Explore"   component={Screen.ExploreScreen} />
            <Tab.Screen name="Contest" component={Screen.UpcomingScreen}/> 
            {/* <Tab.Screen name="Running" component={Screen.RunningScreen}/>  */}
            <Tab.Screen name="Holding" component={Screen.HoldingParticipationScreen}/> 
            
            {/* Tab.Screen name="Coupan" component={Screen.CoupanScreen}  />  */}
            </Tab.Navigator>
            </>  
            );  
          }

    Admin=()=>{
        return(
          <>
          <SafeAreaView style={{flex:1}}>
          {/* <View style={{width:'100%',height:'100%',backgroundColor:backColor}}>
            <View style={{height:45,backgroundColor:themeColor,borderTopColor:'white',borderTopWidth:1}}> */}

        <Dash_Header
          img2={true}
          textdesign={{ fontSize: dynamicSize(20) }}
          // img1={true}
          // sourceImg={search}
          openDrawer={true}
          // source={openmenu}
          textHeading={true}
          textHeading1={"Boomerang"}
          // source1={search}
          Navigation1={() => this.props.navigation.navigate("WalletScreen")}
          Navigation={() => this.props.navigation.openDrawer()}
        />

            <Stack.Navigator initialRouteName={this.TabScreen}
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="BootomNavi" key="Tab" component={this.TabScreen} />
            </Stack.Navigator>

               
        </SafeAreaView>
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
        <this.Admin/>
      </>
      
    
        );
    
      }
    }

    const mapStateToProps = (state) => {
        return {
          network: state.network,
          loginInfo:state.login
        };
      };
      export default connect(mapStateToProps)(AdminView)
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