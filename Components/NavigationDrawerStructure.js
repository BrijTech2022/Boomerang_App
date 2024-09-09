import * as React from 'react';
import { View,StyleSheet,TouchableOpacity,Image } from 'react-native';
import RIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {ICons} from "../Icons/index";
export class NavigationDrawerStructure extends React.PureComponent {
    constructor(props){
      super(props)
   
    }
       //Structure for the navigatin Drawer
     
        toggleDrawer = () => {
        //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
      };
     
       render(){
       return (
         <View style={{flexDirection: 'row',width: 62,height:56,}}>
           <TouchableOpacity onPress={this.toggleDrawer}>
           <RIcon style={{marginTop:5,paddingVertical:"2.5%",paddingHorizontal:"1.5%"}} color={'white'} name={"menu"} size={40}/>

           {/* <FontAwesome5 style={{
            marginTop:8,paddingVertical:"2.5%",paddingHorizontal:"20%",
            }} color={'white'} name={"user-circle"} size={35}/> */}


             {/*Donute Button Image */}
             {/* <Image
               source={
                 //uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                   ICons.DrawerBt
                }
               style={{width: 30, height: 30, marginTop:1, marginLeft: 1,backgroundColor:"white",borderRadius:35}}
             /> */}
           </TouchableOpacity>
         </View>
       );
     };
   }
  
   