import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
// import {NavigationDrawerStructure} from './NavigationDrawerStructure';
// import { ICons } from '../Icons'
import { Globalstyles } from '../Styles/GlobalStyle'
import Icon from 'react-native-vector-icons/Entypo';
import RIcon from 'react-native-vector-icons/MaterialIcons';
import MCICON from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import { connect } from 'react-redux';
//import {login} from '../RestApi';
import { Checkbox,DataTable } from 'react-native-paper';
import { backColor, themeColor } from '../Styles/Color';
import { Loader } from '../Components/Loader';
import { notifyMessage } from '../Components/Toast';
//   import Nav from '../Screens/Nav'
import * as Screen from '../Screens';
import FirstScreenStack from '../Components/FirstScreenStack';
import { ActivityIndicator } from 'react-native';
import store from '../Redux/Store';
import ProfileView from './Profile';
import MDrawer from '../Components/MDrawer';

//import { FlatList } from '../data/FlatListData';

  const Stack = createStackNavigator();
  const Tab=createMaterialBottomTabNavigator();
  class BottomView extends React.PureComponent{
    constructor(props) {

        super(props);
    
        this.state = {
         
        }

      }

      TabScreen(props){
    
        
        return(
          <Tab.Navigator
        //   labeled:false
        
          initialRouteName={Screen.HomeScreen}
          
          screenOptions={({route})=>({ tabBarLabelStyle: { fontSize: 5,color:"white", fontWeight:"bold"},
              tabBarItemStyle: {  },
             
              
            //tabBarScrollEnabled:true,
          
            /*tabBarIcon: ({ focused }) => {
              let iconName;
           // console.log(route.params?.p)
           return focused?<Ionicons name={'ios-information-circle'} size={26} color={"white"} /> :route.params?.p;
                    
              //return iconName;
               
              // You can return any component that you like here!
             
              
            },*/
             lazy:true,
        
              
             })}   barStyle= {{ 
                // showLabel: false,
                 //position:'absolute',
              
                // left:'5%',
                // right:'5%',
                // elevation:0,

                // backgroundColor:themeColor,
                backgroundColor:'white',
                height:50,
                borderTopWidth:1,
                // borderColor:backColor
                borderColor:themeColor
                
                // shadowOpacity:0.2
                 
                // borderRadius:15,
                // height:'7.5%',
                
                // ...styles.shadow
             }}
            
              >
                
             {/* <Tab.Screen name="MyMenu"   component={Screen.Home} initialParams={{p:<Updicon name={"update"} size={30} color={"white"} />}} />
              <Tab.Screen name="Scan" component={Screen.Categories} initialParams={{p:<Aticon style={{top:-10}} name={"qrcode"} size={40} color={"white"} />}}/> 
              <Tab.Screen name="Coupan" component={Screen.CoupanScreen} initialParams={{p:<Updicon name={"home-work"} size={30} color={"white"} />}} /> 
          */}
           {/* options={{
                  tabBarIcon: () => (<Image source={require('../Icons/house-icon.png')}  style={{width: 20, height: 20,}} />) 
                }} */}
              <Tab.Screen name="Home"  component={Screen.HomeScreen}  
               
                options={{
                    tabBarLabel:'Home',
                    activeTintColor: 'black',
                    // activeTintColor:themeColor,
                    
                  tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:"center"}}>
                      <Image source={require('../Icons/home.png')}  
                        resizeMode='contain'
                        style={{
                          width:20,
                          height:20,
                        //  tintColor:focused ? '#181c1c' : '#748c94'
                        }}
                      />
                      
                    </View>
                    
                    // <Icon name="home" color={'white'} size={26} />
                  )
                  
                  
                }}
              />
              <Tab.Screen name="Profile" component={Screen.NewProfileScreen}  
                 options={{
                  tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:"center"}}>
                      <Image source={require('../Icons/bino.png')}  
                        resizeMode='contain'
                        style={{
                          width:20,
                          height:20,
                          // tintColor:focused ? '#181c1c' : '#748c94'
                        }}
                      />
                      
                    </View>
                  )
                }}
              /> 
              {/* <Tab.Screen name="Exist" component={(props)=><Screen.GameListScreens {...props}/>}  
                 options={{
                  tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:"center"}}>
                      <Image source={require('../Icons/lab.png')}  
                        resizeMode='contain'
                        style={{
                          width:40,
                          height:40,
                          
                        }}
                      />
                      
                    </View>
                  )
                }}
              />  */}
              </Tab.Navigator>);  
            }
             
    StackScreen=(props)=>{
      return(
          <Stack.Navigator initialRouteName={this.TabScreen}
          
          screenOptions={{
            headerShown: false
          }}
           >
            <Stack.Screen name="BootomNavi" key="Tab" component={this.TabScreen} />
          </Stack.Navigator>
              )
    }

      render() {

        // if (!this.props.network.isConnected) {
        // notifyMessage("Internet Connection Error....")
        //   // return null
        // }
    
        return (
    
          //  this.props.loginInfo.isLoggedIn?
          ////require('../Icons/logo1.png')
          <this.StackScreen />
      
    
        );
    
      }
    }
  
//   const mapStateToProps = (state) => {
//     return {
//       network: state.network,
      
    
//     };
//   };
  export default (BottomView)

  const styles= StyleSheet.create({
    shadow:{
      shadowColor: "#7F5DF0",
    
    shadowOffset:{
      width:0,  
      height:10
    },
    // shadowOpacity:0.25,
    shadowRadius:3.5,
    // elevation:5
  }
  })