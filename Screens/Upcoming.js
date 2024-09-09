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
  import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  //import { URL, Logo1, Logo2 } from '../Constant/ApiLink';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import BottomNewScreen from './BottomNew';
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { notFound, unique1, unique2, unique3, unique4 } from '../Components/icon';
import { ContestApi } from '../Api/ContestAPI';
import { dynamicSize, getFontSize } from '../Components/dynamicSize';
import { imageUrl } from '../Api/ApibaseUrl';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  class UpcomingView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        upcoming:true,
        mList:[{"val":1,"image":unique1,"price":120},{"val":0,"image":unique2,"price":90},{"val":1,"image":unique3,"price":80},{"val":0,"image":unique4,"price":60},{"val":1,"image":unique1,"price":55},{"val":0,"image":unique4,"price":50},{"val":1,"image":unique3,"price":42},{"val":0,"image":unique2,"price":20}],
        UpcomingList:[],
        refreshing:false,
        RunningList:[]
      }
      
  
    }

    componentDidMount(){
      this.setState({isLoading:true})
      ContestApi.GetAllUpComingContest().then((data)=>{
        if(data.data.length!=0)
        {
          this.setState({UpcomingList:data.data,isLoading:false})
        }
        else
        {
          this.setState({UpcomingList:[],isLoading:false})
        }
      })

    }

    willFocus = this.props.navigation.addListener(
      'focus',
      (payload) => {
        if(this.state.upcoming==true)
        this.componentDidMount();
        else
        this.GetRunning();
      }
    );

    GetRunning=()=>{
      this.setState({isLoading:true})
      ContestApi.GetAllRunningContest().then((data)=>{
        console.log("Running",JSON.stringify(data))
        if(data.data.length!=0)
        {
          this.setState({RunningList:data.data,isLoading:false})
        }
        else
        {
          this.setState({RunningList:[],isLoading:false})
        }
      })
    }

    Refresh=()=>{
      // this.setState({refreshing:true})
      // console.log("fghjfnjnf")
      if(this.state.upcoming==true)
      this.componentDidMount();
      else
      this.GetRunning();
      // setTimeout(() => {
        // this.setState({refreshing:false})
      // }, 2000);
      
    }

    DayCalculation=(d1)=>{
    var date1=new Date();
    var  date2 = new Date(d1);

    console.log(date1)
    console.log(date2)
  
    //calculate time difference  
    var time_difference = date2.getTime() - date1.getTime();  

    //calculate days difference by dividing total milliseconds in a day  
    var days_difference = time_difference / (1000 * 60 * 60 * 24); 

    if(Math.trunc(days_difference)>0){
    return Math.trunc(days_difference) +" days to running";
    }
    else{
      var minutes_difference = time_difference / (1000 * 60 ); 
      var hourAfterMinute=minutes_difference%60;

      var hours_difference=minutes_difference/60;
      
      return Math.trunc(hours_difference)+" hours "+ Math.trunc(hourAfterMinute) +" minutes to running";
    }
    

    }

    DayCalculationLive=(d1)=>{
      var date1=new Date();
      var  date2 = new Date(d1);
    
      //calculate time difference  
      var time_difference = date2.getTime() - date1.getTime();  
  
      //calculate days difference by dividing total milliseconds in a day  
      var days_difference = time_difference / (1000 * 60 * 60 * 24); 
  
      if(Math.trunc(days_difference)>0){
      return Math.trunc(days_difference) +" days to expire";
      }
      else{
        var minutes_difference = time_difference / (1000 * 60 ); 
        var hourAfterMinute=minutes_difference%60;
  
        var hours_difference=minutes_difference/60;
        
        return Math.trunc(hours_difference)+" hours "+ Math.trunc(hourAfterMinute) +" minutes to expire";
      }
      
  
      }

    UpcomingList(item,index){
      return(
        <View style={{marginTop:10}}>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('CustomContestScreen',{data:item})}}
          >
          <View style={{alignSelf:'center',width:'95%',
          borderWidth:1,
          borderColor:themeColor,
          borderRadius:10,
          justifyContent:"center"}}>

            {/* <Text style={{textAlign:'center',fontSize:dynamicSize(15)}}>{item.participationStartDate.split('T')[0]?item.participationStartDate.split('T')[0]:item.participationStartDate} - {item.participationEndDate.split('T')[0]?item.participationEndDate.split('T')[0]:item.participationEndDate}</Text> */}

            <Text style={{textAlign:'center',fontSize:dynamicSize(15),color:themeText}}>{(item.participationStartDate.split('T')[0] && item.participationEndDate.split('T')[0] )?this.DayCalculation(item.participationEndDate.split('T')[0]):item.participationStartDate+"-"+item.participationEndDate}</Text>

            <View style={{width:'100%',height:1,backgroundColor:themeColor}}></View>

            <View style={{flexDirection:'row',paddingTop:dynamicSize(5),paddingBottom:dynamicSize(5)}}>
            <View style={{width:'25%'}}>
              <Image 
              source={item.contestImage?{uri:imageUrl+item.contestImage}:notFound} 
              style={{width:70,height:70,left:5,borderRadius:10}} resizeMode='stretch' />

              
            </View>
            
            <View style={{width:'50%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:themeText}}>{item.contestTitle}</Text>
              <Text style={{fontSize:13,color:themeText}}>{item.contestSubTitle}</Text>
            </View>
            <View style={{width:'25%',height:70,top:10,right:5}}>
              <Text style={{fontSize:16,fontWeight:'bold',textAlign:'right',color:themeText}}>₹ {item.joiningAmount} </Text>

              {/* <Text style={{fontSize:12,fontWeight:'bold',color:'green',textAlign:'right',}}>0.25% </Text> */}
            </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      )
    }

    RunningList(item,index){
      return(
<View style={{marginTop:10}}>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('RunningParticipationScreen',{data:item})}}
          >
          <View style={{alignSelf:'center',width:'95%',
          borderWidth:1,
          borderColor:themeColor,
          borderRadius:10,
          justifyContent:"center"}}>

<Text style={{textAlign:'center',fontSize:dynamicSize(15),color:themeText}}>{(item.contestStartDate.split('T')[0] && item.contestEndDate.split('T')[0] )?this.DayCalculationLive(item.contestEndDate.split('T')[0]):item.contestStartDate+"-"+item.contestEndDate}</Text>

<View style={{width:'100%',height:1,backgroundColor:themeColor}}></View>

            <View style={{flexDirection:'row',paddingTop:dynamicSize(5),paddingBottom:dynamicSize(5)}}>
            <View style={{width:'25%'}}>
              <Image 
              source={item.contestImage?{uri:imageUrl+item.contestImage}:notFound} 
              style={{width:70,height:70,left:5,borderRadius:10}} resizeMode='stretch' />

              
            </View>
            
            <View style={{width:'50%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:themeText}}>{item.contestTitle}</Text>
              <Text style={{fontSize:13,color:themeText}}>{item.contestSubTitle}</Text>
            </View>
            <View style={{width:'25%',height:70,top:10,right:5}}>
              <Text style={{fontSize:16,fontWeight:'bold',textAlign:'right',color:themeText}}>₹ {item.joiningAmount} </Text>

              {/* <Text style={{fontSize:12,fontWeight:'bold',color:'green',textAlign:'right',}}>0.25% </Text> */}
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
            onPress={()=>{this.props.navigation.navigate('CustomContestScreen')}}
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
  

    Upcoming=()=>{
        return(
          <>
      
          <View style={{width:'100%',height:'100%',backgroundColor:backColor}}>

            <View style={{height:50,backgroundColor:themeColor,borderTopColor:'white',borderTopWidth:1,justifyContent:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',}}>
                  <TouchableOpacity
                    onPress={()=>{this.setState({upcoming:true})}}
                  >
                  <View style={{}}>
                    <Text style={{
                      backgroundColor:this.state.upcoming==true?backColor:null,
                      // textDecorationLine:this.state.upcoming==true?'underline':'none',
                      fontWeight:this.state.upcoming==true?'bold':'400',
                      color:this.state.upcoming==true?themeText:'white',
                      fontSize:14,marginTop:5,padding:5,paddingLeft:25,paddingRight:30,borderRadius:5}}>Upcoming</Text>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={()=>{  this.setState({upcoming:false}); this.GetRunning() }}
                  >
                  <View style={{}}>
                  <Text style={{
                    backgroundColor:this.state.upcoming!=true?backColor:null,
                    // textDecorationLine:this.state.upcoming!=true?'underline':'none',
                    fontWeight:this.state.upcoming!=true?'bold':'400',
                    color:this.state.upcoming!=true?themeText:'white',
                    fontSize:14, marginTop:5,padding:5,paddingLeft:30,paddingRight:25,borderRadius:5}}>Running</Text>
                  </View>
                  </TouchableOpacity>

                </View>
            </View>
         <ScrollView 
         refreshControl={
            <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={this.state.refreshing}
            onRefresh={this.Refresh}
          />
         }
         >

         {/* <View style={{marginTop:10}}>
          <TouchableOpacity
            // onPress={()=>{this.props.navigation.navigate('TicTacToeGameScreen')}}
            // onPress={()=>{this.props.navigation.navigate('ProfileScreen')}}
          >
          <View style={{alignSelf:'center',height:100,width:'95%',
          borderWidth:1,
          borderColor:themeColor,
          borderRadius:20,
          justifyContent:"center"}}>
            <Text style={{textAlign:'center',fontSize:20}}>28 June 2023</Text>
            <View style={{width:'100%',height:1,backgroundColor:themeColor}}></View>
            <View style={{flexDirection:'row'}}>
            <View style={{width:'40%',height:70,top:10,}}>
              <Text style={{fontSize:10,textAlign:'center',fontWeight:'bold'}}>Prize Amount:</Text>
              <Text style={{fontSize:28,textAlign:'center',}}>Rs. 200</Text>
            </View>
            
            <View style={{width:'20%',height:70,top:10}}>
              <Text style={{fontSize:10,textAlign:'center'}}>Available Seat:</Text>
              <Text style={{fontSize:24,textAlign:'center',}}>3</Text>
            </View>
            <View style={{width:'40%',height:70,top:10}}>
              <Text style={{fontSize:10,textAlign:'center'}}>Joining Fees:</Text>
              <Text style={{fontSize:28,textAlign:'center',color:themeColor}}>Rs. 20</Text>
            </View>
            </View>
          </View>
          </TouchableOpacity>
        </View> */}

    {
      this.state.UpcomingList.length!=0 && this.state.upcoming==true?    
          < FlatList
            data={this.state.UpcomingList}
            key={"data_dashboard"}
            keyExtractor={({ index }) => index}
            extraData={this.state.UpcomingList}
            // numColumns={2}
            renderItem={({ item, index }) => this.UpcomingList(item, index)}
          />
          :
          this.state.RunningList.length!=0  && this.state.upcoming!=true?
          < FlatList
            data={this.state.RunningList}
            key={"data_dashboard"}
            keyExtractor={({ index }) => index}
            extraData={this.state.RunningList}
            // numColumns={2}
            renderItem={({ item, index }) => this.RunningList(item, index)}
          />
          :
          <View style={{marginTop:50}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>! List not available !</Text>
              </View>
          </View>
     
    }

{/* {
          this.state.RunningList.length!=0 ?
          < FlatList
            data={this.state.RunningList}
            key={"data_dashboard"}
            keyExtractor={({ index }) => index}
            extraData={this.state.RunningList}
            renderItem={({ item, index }) => this.RunningList(item, index)}
          />
          :
          <View style={{marginTop:50}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>! List not available !</Text>
              </View>
          </View>
        
        } */}
        

         </ScrollView>
         </View>
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
    
          //  this.props.loginInfo.isLoggedIn?
          ////require('../Icons/logo1.png')
          <>
          <Loader loading={this.state.isLoading}/>
       <this.Upcoming/>
       </>
      
    
        );
    
      }
    }
  const mapStateToProps = (state) => {
      return {
        network: state.network,
      };
    };

    export default connect(mapStateToProps)(UpcomingView)
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