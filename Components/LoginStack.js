import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen,RegisterScreen,GameListScreen,OtpScreen} from '../Screens'
import { themeColor} from '../Styles/Color';
import MDrawer from './MDrawer';
import { connect } from 'react-redux';

 
const Stack = createStackNavigator();
class LoginStack extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
    return(
    this.props.loginInfo.isLoggedIn?  
    <MDrawer/>
    :
    <Stack.Navigator initialRouteName={LoginScreen} screenOptions={{ headerShown: false}}> 

<Stack.Screen 
      name="LoginScreen"
      component={LoginScreen}
      options={{
        title:"",
        gestureEnabled:true,
        
        headerStyle: {
          backgroundColor:themeColor, //'#f4511e', //Set Header color
        },
        
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
      />

<Stack.Screen 
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        title:"",
        gestureEnabled:true,
        
        headerStyle: {
          backgroundColor:themeColor, //'#f4511e', //Set Header color
        },
        
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
      />

<Stack.Screen 
      name="OtpScreen"
      component={OtpScreen}
      options={{
        title:"",
        gestureEnabled:true,
        
        headerStyle: {
          backgroundColor:themeColor, //'#f4511e', //Set Header color
        },
        
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
      />
  </Stack.Navigator>
  )
    }
}
const mapStateToProps = (state) => {
  return {
    network: state.network,
    loginInfo:state.login
  };
};
export default connect(mapStateToProps)(LoginStack)