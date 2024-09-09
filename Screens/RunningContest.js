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
  import { connect } from 'react-redux';
  import { backColor, themeColor } from '../Styles/Color';
  import { Loader } from '../Components/Loader';
  import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import { ActivityIndicator } from 'react-native';
  import store from '../Redux/Store';
  import { setCartCount, setLoginState } from '../Redux/Actions';
  import BottomNewScreen from './BottomNew';
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { notFound, unique1, unique2, unique3, unique4 } from '../Components/icon';
import { ContestApi } from '../Api/ContestAPI';
import { getFontSize } from '../Components/dynamicSize';
import { imageUrl } from '../Api/ApibaseUrl';
  class RunningView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:true,
        upcoming:true,
        mList:[{"val":1,"image":unique1,"price":120},{"val":0,"image":unique2,"price":90},{"val":1,"image":unique3,"price":80},{"val":0,"image":unique4,"price":60},{"val":1,"image":unique1,"price":55},{"val":0,"image":unique4,"price":50},{"val":1,"image":unique3,"price":42},{"val":0,"image":unique2,"price":20}],
        RunningList:[],
        refreshing:false
      }
      
  
    }

    componentDidMount(){
        this.setState({isLoading:true})
      ContestApi.GetAllRunningContest().then((data)=>{
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

    willFocus = this.props.navigation.addListener(
      'focus',
      (payload) => {
        this.componentDidMount()
      }
    );

    Refresh=()=>{
      this.componentDidMount()
      
    }

    ListView1(item,index){
      return(
        <View style={{marginTop:10}}>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('RunningParticipationScreen',{data:item})}}
          >
          <View style={{alignSelf:'center',height:80,width:'95%',
          borderWidth:1,
          borderColor:themeColor,
          borderRadius:10,
          justifyContent:"center"}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:'25%'}}>
              <Image 
              source={item.contestImage?{uri:imageUrl+item.contestImage}:notFound} 
              style={{width:70,height:70,left:5,borderRadius:10}} resizeMode='stretch' />

              
            </View>
            
            <View style={{width:'50%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>{item.contestTitle}</Text>
              <Text style={{fontSize:13,}}>{item.contestSubTitle}</Text>
            </View>
            <View style={{width:'25%',height:70,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',textAlign:'right'}}>₹ {item.joiningAmount} </Text>
              {/* <Text style={{fontSize:12,fontWeight:'bold',color:item.val==1?'green':'red',textAlign:'right',}}>{item.val==1?'+':'-'} 0.25% </Text> */}
              <Text style={{fontSize:12,fontWeight:'bold',color:'green',textAlign:'right',}}>0.25% </Text>
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
  
  
    Running=()=>{
        return(
          <>
          <View style={{width:'100%',height:'100%',backgroundColor:backColor}}>

            {/* <View style={{height:45,backgroundColor:themeColor,borderTopColor:'white',borderTopWidth:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',}}>
                  <TouchableOpacity
                    onPress={()=>{this.setState({upcoming:true})}}
                  >
                  <View style={{}}>
                    <Text style={{
                      backgroundColor:this.state.upcoming==true?backColor:null,
                      textDecorationLine:this.state.upcoming==true?'underline':'none',
                      fontWeight:this.state.upcoming==true?'bold':'400',
                      color:this.state.upcoming==true?'black':'white',
                      fontSize:17,marginTop:5,padding:5,paddingLeft:25,paddingRight:30,borderRadius:5}}>Upcoming List</Text>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={()=>this.setState({upcoming:false})}
                  >
                  <View style={{}}>
                  <Text style={{
                    backgroundColor:this.state.upcoming!=true?backColor:null,
                    textDecorationLine:this.state.upcoming!=true?'underline':'none',
                    fontWeight:this.state.upcoming!=true?'bold':'400',
                    color:this.state.upcoming!=true?'black':'white',
                    fontSize:17, marginTop:5,padding:5,paddingLeft:30,paddingRight:25,borderRadius:5}}>Running List</Text>
                  </View>
                  </TouchableOpacity>

                </View>
            </View> */}

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
          this.state.RunningList.length!=0?
          < FlatList
            data={this.state.RunningList}
            key={"data_dashboard"}
            keyExtractor={({ index }) => index}
            extraData={this.state.RunningList}
            // numColumns={2}
            renderItem={({ item, index }) => this.ListView1(item, index)}
          />
          :
          <View style={{marginTop:50}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>! List not available !</Text>
              </View>
          </View>
        }
        

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
       <this.Running/>
       </>
      
    
        );
    
      }
    }
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          
        
        };
      };
      export default connect(mapStateToProps)(RunningView)
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