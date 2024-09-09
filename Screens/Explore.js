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
    RefreshControl
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
  import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { imgCat, notFound, unique1, unique2, unique3, unique4 } from '../Components/icon';
import { ContestApi } from '../Api/ContestAPI';
import { dynamicSize, getFontSize } from '../Components/dynamicSize';
import { imageUrl } from '../Api/ApibaseUrl';
  class ExploreView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        upcoming:true,
        mList:[{"val":1,"image":unique1,"category":"Best Image","price":30},{"val":0,"image":unique2,"category":"Best Art","price":50},{"val":1,"image":unique3,"category":"Best Color","price":120},{"val":0,"image":unique4,"category":"Best Mixture","price":150}],
        catList:[],
        mostBought:[],
        refreshing:false,
        mostParticipate:[]
      }
      
  
    }

    componentDidMount(){
      this.bindData();
    }

    bindData=()=>{

      this.setState({isLoading:true})

      ContestApi.GetParticipateMostBought().then((data)=>{
        console.log(data)
        if(data.status==true)
        {
          if(data.data.length!=0)
          {
            this.setState({mostParticipate:data.data})
          }
        }
      })

      ContestApi.GetContestMostBought().then((data)=>{
        if(data.status==true)
        {
          if(data.data.length!=0)
          {
            this.setState({mostBought:data.data})
          }
        }
      })

      ContestApi.GetAllCategory().then((data)=>{
        
        // console.log("GetCategory===="+JSON.stringify(data))
        if(data.status==true)
        {
          if(data.data.length!=0)
          {
            this.setState({catList:data.data,isLoading:false})
          }
          else
          {
            this.setState({isLoading:false})
          }
        }
        else
        {
          this.setState({isLoading:false})
        }

      })

    }

    willFocus = this.props.navigation.addListener(
      'focus',
      (payload) => {
        this.setState({mostParticipate:[],mostBought:[],catList:[]},()=>{
          this.bindData()
        })
      }
    );

    Refresh=()=>{
      this.setState({mostParticipate:[],mostBought:[],catList:[]},()=>{
        this.bindData()
      })
      
    }

    ListView1(item,index){
      return(
<View style={{marginTop:10}}>
          <TouchableOpacity
          activeOpacity={1}
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
              {/* <Text style={{fontSize:13,}}>DogeCoin</Text> */}
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
<View style={{marginTop:10,marginLeft:10}}>
          <TouchableOpacity
          // activeOpacity={1}
          onPress={()=>{this.props.navigation.navigate('RunningParticipationScreen',{data:item})}}
          >
          <View           
          style={{          
            borderWidth:1,
            borderColor:themeColor,
            borderRadius:10,
            padding:5
          }}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:110,}}>
              <Image source={item.contestImage?{uri:imageUrl+item.contestImage}:notFound} style={{width:100,height:100,borderRadius:10,alignSelf:'center'}} resizeMode='stretch' />

              
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

            {/* <View style={{height:30,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',}}>₹ 250 </Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:item.val==1?'green':'red',}}>{item.val==1?'+':'-'} 0.25% </Text>
            </View> */}

          <View style={{marginTop:5,width:100}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:getFontSize(13),fontWeight:'bold',left:5,color:themeText}}>{item.contestTitle?item.contestTitle:"Title"}</Text>
              <Text style={{fontSize:getFontSize(13),color:'green',}}>₹{item.joiningAmount?item.joiningAmount:0.00}</Text>
              </View>
            </View>
          </View>

          </TouchableOpacity>
        </View>
      )
    }

    FindPercentage=(base,live)=>{
      base=(base!=0 && base !=null)?base:1;
      live=(live!=0 && live !=null)?live:1;
      // console.log(base)
      return ((live-base)/base*100).toFixed(2)
    }

    MostBuy(item,index){
      return(
        <View style={{marginTop:10,marginLeft:10}}>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('ViewDetailScreen',{data:item})}}
          >
          <View           
          style={{          
            borderWidth:1,
            borderColor:themeColor,
            borderRadius:10,
            padding:5
          }}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:110,}}>
              <Image source={item.imageURL?{uri:imageUrl+item.imageURL}:notFound} style={{width:100,height:100,borderRadius:10,alignSelf:'center'}} resizeMode='stretch' />

            </View>
            
  
            </View>

          <View style={{marginTop:5,width:110}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View>
              <Text style={{fontSize:getFontSize(13),fontWeight:'bold',color:themeText}}>₹{item.liverate.toFixed(4)}</Text>
              </View>
              <View>
       
              <Text style={{fontSize:getFontSize(12),color:this.FindPercentage(item.baseAmount,item.liverate)>=0?'green':'red'}}>{(this.FindPercentage(item.baseAmount,item.liverate)>=0?"+"+this.FindPercentage(item.baseAmount,item.liverate):this.FindPercentage(item.baseAmount,item.liverate))}%</Text>
              </View>
              </View>
              <Text style={{fontSize:getFontSize(11),color:'red',textAlign:'center'}}>only {item.totalUnit-item.quantity} Qty left</Text>
            </View>
          </View>

          </TouchableOpacity>
        </View>
      )
    }

    CategoryList(item,index){
        return(
  <View style={{marginTop:10}}>
            <TouchableOpacity
              onPress={()=>{this.props.navigation.navigate('CategoryParticipation',{data:item})}}
            >
            <View style={{height:150,width:'50%',marginLeft:25,marginRight:25,
            // borderWidth:1,
            // borderColor:themeColor,
            borderRadius:10,
            justifyContent:"center"}}>
              <View style={{flexDirection:'row'}}>
              <View style={{width:120}}>
                <Image source={imgCat} style={{width:130,height:130,left:5,borderRadius:10,borderColor:'black',borderWidth:1}} resizeMode='stretch' />
  
                
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
  
            <View>
            <View style={{marginLeft:40}}>
                  <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:getFontSize(14),fontWeight:'bold',width:80,color:themeText}}>{item.categoryName}</Text>
                {/* <Text style={{fontSize:14,color:'green'}}>₹250</Text> */}
                </View>
              </View>
            </View>
  
            </TouchableOpacity>
          </View>
        )
      }
  

    Explore=()=>{
        return(
          <>
            
            <View style={{width:'100%',height:'100%',backgroundColor:backColor}}>
          <View>

          <Loader loading={this.state.isLoading}/>

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

<Text style={[styles.titleTxt,{display:this.state.mostParticipate.length!=0?'flex':'none'}]}>Most Buy on Boomerang</Text>

{
  this.state.mostParticipate.length!=0?
          <View style={{width:'90%',alignSelf:'center',}}>
            <FlatList
              data={this.state.mostParticipate}
              key={"data_dashboard"}
              keyExtractor={({ index }) => index}
              horizontal
              renderItem={({ item, index }) => this.MostBuy(item, index)}
              
              // numColumns={2}
              // columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </View>
           :
        // <View style={{marginTop:50,marginBottom:30}}>
        //     <View style={{justifyContent:'center',alignItems:'center'}}>
        //     <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>Not Found</Text>
        //     </View>
        // </View>
        <></>
} 

<Text style={[styles.titleTxt,{display:this.state.mostBought.length!=0?'flex':'none'}]}>Most bought contest on Boomerang</Text>
{
  this.state.mostBought.length!=0?
          <View style={{width:'90%',alignSelf:'center'}}>
            <FlatList
              data={this.state.mostBought}
              key={"data_dashboard"}
              keyExtractor={({ index }) => index}
              horizontal
              renderItem={({ item, index }) => this.ListView(item, index)}
              
              // numColumns={2}
              // columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          </View>
           :
        // <View style={{marginTop:50,marginBottom:30}}>
        //     <View style={{justifyContent:'center',alignItems:'center'}}>
        //     <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>Not Found</Text>
        //     </View>
        // </View>
        <></>
} 

<Text style={styles.titleTxt}>Trade Category Wise</Text>

<FlatList
  data={this.state.catList}
  key={"data_dashboard"}
  keyExtractor={({ index }) => index}
  extraData={this.state.catList}
  numColumns={2}
  renderItem={({ item, index }) => this.CategoryList(item, index)}
/>

        

         </ScrollView>
         </View>
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
        
       <this.Explore/>
       </>
      
    
        );
    
      }
    }
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          
        
        };
      };
      export default connect(mapStateToProps)(ExploreView)
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
    },
    titleTxt:{
      fontSize:getFontSize(15),
      fontWeight:'bold',
      marginLeft:20,
      marginTop:20,
      color:themeText
    }
      })