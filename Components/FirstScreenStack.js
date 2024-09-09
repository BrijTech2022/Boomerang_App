import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
//import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationDrawerStructure} from './NavigationDrawerStructure';
import {View,TextInput,Image, Text,StyleSheet, TouchableOpacity} from 'react-native';
import {themeColor} from '../Styles/Color';
import {connect} from 'react-redux';
import store from '../Redux/Store';
import { setCartCount } from '../Redux/Actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import Nav from '../Screens/TopBar'
import GRCPacketScreen from '../Screens/GRCPacket';
import ProfileScreen from '../Screens/Profile';
import BottomScreen from '../Screens/Bottom';
import HomeScreen from '../Screens/Home';
import ExistScreen from '../Screens/Exist';
import TicTacToeGameScreen from '../Screens/TicTacToeGame';
import LuckyNumberScreen from '../Screens/LuckyNumber';
import NewProfileScreen from '../Screens/NewProfile';
import WalletScreen from '../Screens/Wallet';
import ViewDetailScreen from '../Screens/ViewDetail';
import BuySellScreen from '../Screens/BuySell';
import AddMoneyScreen from '../Screens/AddMoney';
import MyTransactionScreen from '../Screens/MyTransaction';
import CustomContestScreen from '../Screens/CustomContest';
import RunningParticipationScreen from '../Screens/RunningParticipation';
import CategoryParticipation from '../Screens/CategoryParticipation';
import SellStock from '../Screens/SellStock';
import RefundPolicyScreen from '../Screens/RefundPolicy';


// import MDrawer from './MDrawer';
// import NotificationScreen from '../Screens/Notification'
// import BookSingleScreen from '../Screens/BookSingle';

const Stack = createStackNavigator();
const Tab=createMaterialBottomTabNavigator();
class FirstScreenStack extends React.PureComponent {

  constructor(props){
        super(props);
    }
    
      
    StackScreen=(props)=>{
  // console.log("first"+JSON.stringify(props))
      return(
     <Stack.Navigator initialRouteName={HomeScreen}
    >

        <Stack.Screen name={"HomeScreen"}  component={HomeScreen}
         
        options={{
          
          title:(
          <SafeAreaView>
            
             </SafeAreaView>
             ),//'Home Page', //Set Header Title
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
           
         
          //   <NavigationDrawerStructure 
          //      navigationProps={props.navigation}
          //    />
            
          //  </View>
          // ),
          
            
          }}
        />
        
        
        <Stack.Screen name={"TicTacToeGameScreen"}  component={TicTacToeGameScreen}
          
          options={{
            
            title:(
            <SafeAreaView>
                
              </SafeAreaView>),
            
            headerRight:()=>(          
            <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                        
            { <Nav {...this.props}/> }
            </View>            
            ),
            gestureEnabled:true,
            headerShown:true,
              headerStyle: {
                backgroundColor:themeColor,
                                        //'#f4511e', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:15,
                                            //Set Header text style
              },
            headerLeft:()=>(
              <View style={{}} >
            
          
              <NavigationDrawerStructure 
                navigationProps={props.navigation}
              />
              
            </View>
            ),
            
              
            }}
          />

        <Stack.Screen name={"LuckyNumberScreen"}  component={LuckyNumberScreen}
         
         options={{
           
           title:(
           <SafeAreaView>
               
              </SafeAreaView>),
           
           headerRight:()=>(          
           <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                       
           { <Nav {...this.props}/> }
           </View>            
           ),
           gestureEnabled:true,
           headerShown:true,
             headerStyle: {
               backgroundColor:themeColor,
                                       //'#f4511e', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold',
               fontSize:15,
                                           //Set Header text style
             },
           headerLeft:()=>(
             <View style={{}} >
            
          
             <NavigationDrawerStructure 
                navigationProps={props.navigation}
              />
             
            </View>
           ),
           
             
           }}
         />

        <Stack.Screen name={"NewProfileScreen"}  component={NewProfileScreen}
                
                options={{
                  
                  title:(
                  <SafeAreaView>
                      
                      </SafeAreaView>),
                  
                  headerRight:()=>(          
                  <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                              
                  { <Nav {...this.props}/> }
                  </View>            
                  ),
                  gestureEnabled:true,
                  headerShown:true,
                    headerStyle: {
                      backgroundColor:themeColor,
                                              //'#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize:15,
                                                  //Set Header text style
                    },
                  headerLeft:()=>(
                    <View style={{}} >
                    
                  
                    <NavigationDrawerStructure 
                        navigationProps={props.navigation}
                      />
                    
                    </View>
                  ),
                  
                    
                  }}
                />

        <Stack.Screen name={"WalletScreen"}  component={WalletScreen}
                
                options={{
                  
                  title:(
                  <SafeAreaView>
                      
                      </SafeAreaView>),
                  
                  // headerRight:()=>(          
                  // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                              
                  // { <Nav {...this.props}/> }
                  // </View>            
                  // ),
                  gestureEnabled:true,
                  headerShown:false,
                    headerStyle: {
                      backgroundColor:themeColor,
                                              //'#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize:15,
                                                  //Set Header text style
                    },
                  // headerLeft:()=>(
                  //   <View style={{}} >
                    
                  
                  //   <NavigationDrawerStructure 
                  //       navigationProps={props.navigation}
                  //     />
                    
                  //   </View>
                  // ),
                  
                    
          }}
        />

        <Stack.Screen name={"ProfileScreen"}  component={ProfileScreen}
         
         options={{
           
           title:(
           <SafeAreaView>

               
              </SafeAreaView>),//'Home Page', //Set Header Title
           
           headerRight:()=>(          
           <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                       
           { <Nav {...this.props}/> }
           </View>            
           ),
           gestureEnabled:true,
           headerShown:true,
             headerStyle: {
               backgroundColor:themeColor,
                                       //'#f4511e', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold',
               fontSize:15,
                                           //Set Header text style
             },
           headerLeft:()=>(
             <View style={{}} >
            
          
             <NavigationDrawerStructure 
                navigationProps={props.navigation}
              />
             
            </View>
           ),
           
             
           }}
         />    
      
        <Stack.Screen name={"GRCPacketScreen"}  component={GRCPacketScreen}
         
         options={{
           
           title:(
           <SafeAreaView>
           {/* <View  style = {{justifyContent:"center",alignItems:"center",paddingLeft:50,paddingTop:5}}>
             <Text adjustsFontSizeToFit style={{fontSize:14,fontWeight:"bold"}} >
               WelCome To SkyReadNovel </Text>
               </View> */}
               
              </SafeAreaView>
              
              ),//'Home Page', //Set Header Title
           
           headerRight:()=>(          
           <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                       
           { <Nav {...this.props}/> }
           </View>            
           ),
           gestureEnabled:true,
           headerShown:true,
             headerStyle: {
               backgroundColor:themeColor,
                                       //'#f4511e', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold',
               fontSize:15,
                                           //Set Header text style
             },
           headerLeft:()=>(
             <View style={{}} >
            
          
             <NavigationDrawerStructure 
                navigationProps={props.navigation}
              />
             
            </View>
           ),
           
             
           }}
        />

        <Stack.Screen name={"ExistScreen"}  component={ExistScreen}
         
         options={{
           
           title:(
           <SafeAreaView>
           {/* <View  style = {{justifyContent:"center",alignItems:"center",paddingLeft:50,paddingTop:5}}>
             <Text adjustsFontSizeToFit style={{fontSize:14,fontWeight:"bold"}} >
               WelCome To SkyReadNovel </Text>
               </View> */}
               
              </SafeAreaView>
              
              ),//'Home Page', //Set Header Title
           
           headerRight:()=>(          
           <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                       
           { <Nav {...this.props}/> }
           </View>            
           ),
           gestureEnabled:true,
           headerShown:true,
             headerStyle: {
               backgroundColor:themeColor,
                                       //'#f4511e', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold',
               fontSize:15,
                                           //Set Header text style
             },
           headerLeft:()=>(
             <View style={{}} >
            
          
             <NavigationDrawerStructure 
                navigationProps={props.navigation}
              />
             
            </View>
           ),
           
             
           }}
        />

        <Stack.Screen name={"ViewDetailScreen"}  component={ViewDetailScreen}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),

          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },          
            
          }}
        />

<Stack.Screen name={"BuySellScreen"}  component={BuySellScreen}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />

<Stack.Screen name={"AddMoneyScreen"}  component={AddMoneyScreen}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />

<Stack.Screen name={"MyTransactionScreen"}  component={MyTransactionScreen}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />

<Stack.Screen name={"CustomContestScreen"}  component={CustomContestScreen}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />

<Stack.Screen name={"RunningParticipationScreen"}  component={RunningParticipationScreen}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />
    
    <Stack.Screen name={"CategoryParticipation"}  component={CategoryParticipation}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />    
<Stack.Screen name={"SellStock"}  component={SellStock}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />
      
<Stack.Screen name={"RefundPolicyScreen"}  component={RefundPolicyScreen}
        
        options={{
          
          title:(
          <SafeAreaView>
              
              </SafeAreaView>),
          
          // headerRight:()=>(          
          // <View style={{flexDirection:'row',flex:1,marginRight:0}}>
                      
          // { <Nav {...this.props}/> }
          // </View>            
          // ),
          gestureEnabled:true,
          headerShown:false,
            headerStyle: {
              backgroundColor:themeColor,
                                      //'#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:15,
                                          //Set Header text style
            },
          // headerLeft:()=>(
          //   <View style={{}} >
            
          
          //   <NavigationDrawerStructure 
          //       navigationProps={props.navigation}
          //     />
            
          //   </View>
          // ),
          
            
          }}
        />

     </Stack.Navigator>
     )
    }
 
     
 
    render(){
     //alert(JSON.stringify(this.props))
     //this.setState({show:this.props.scr})
    //console.log(JSON.stringify(this.props))
      return (
        
        <this.StackScreen  {...this.props}/>
        )
       
       
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    }
  }



    }      
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    zIndex:1,
    height:40,
    marginRight:15,
    width:"99%",
    marginTop:-8
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: '90%',
    height: 50,
    // backgroundColor: '',
  },
});
// const mapStateToProps = (state) => {
//   return {
//     network: state.network,
//     loginInfo:state.login,
  
//   };
// };connect(mapStateToProps)
export default (FirstScreenStack)
