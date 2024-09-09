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
    RefreshControl,
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
import { back, notFound, unique1, unique2, unique3, unique4 } from '../Components/icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import Custom_Header from '../Components/CustomHeader';
import { imageUrl } from '../Api/ApibaseUrl';
import { ContestApi } from '../Api/ContestAPI';
import { dynamicSize, getFontSize } from '../Components/dynamicSize';

const { width, height } = Dimensions.get('window');

  class ViewDetailView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading:false,
        upcoming:true,
        mList:[{"val":1,"image":unique1,"category":"Best Image","price":30},{"val":0,"image":unique2,"category":"Best Art","price":50},{"val":1,"image":unique3,"category":"Best Color","price":120},{"val":0,"image":unique4,"category":"Best Mixture","price":150}],
        image:'',
        liverate:0,
        desc:'',
        similarList:[],
        peoples:0,
        refreshing:false,
        totalUnit:0,
        quantity:0,
        baseAmount:0,
      }
      
  
    }

    componentDidMount(){
      // console.log("viewDetails:=="+JSON.stringify(this.props.route.params.data))
      if(this.props.route.params)
      {
        this.setState({
          // image:this.props.route.params.data.imageURL,
          // liverate:this.props.route.params.data.liverate,
          // desc:this.props.route.params.data.uDescription,
          // peoples:this.props.route.params.data.peoples,
          isLoading:true})

        ContestApi.GetDetailsByParticipationId(this.props.route.params.data.id).then((data)=>{
          console.log("ParticipationDetails==",JSON.stringify(data))
          if(data.status)
          {
            if(data.data.length!=0)
            {
              this.setState({
                liverate:Math.abs(data.data[0].liverate.toFixed(4)),
                peoples:data.data[0].peoples,desc:data.data[0].uDescription,
                image:data.data[0].imageURL,
                baseAmount:data.data[0].baseAmount,
                totalUnit:data.data[0].totalUnit,
                quantity:data.data[0].quantity,
              })
            }
          }
        })

        ContestApi.GetAllParticipationByContestId(this.props.route.params.data.fkContestId).then((data) => {
          // console.log("participation"+JSON.stringify(data))
          if (data.data.length != 0) {
            this.setState({ similarList: data.data, isLoading: false })
          }
          else {
            this.setState({ similarList: [], isLoading: false })
          }
        })
      }
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

    FindPercentage=(base,live)=>{
      base=(base!=0 && base !=null)?base:1;
      live=(live!=0 && live !=null)?live:1;
      // console.log(base)
      return ((live-base)/base*100).toFixed(2)
    }

  ListView(item,index){
    return(
    <View style={{marginTop:10,marginLeft:10}}>
          <TouchableOpacity
          onPress={()=>{
            this.props.navigation.replace('ViewDetailScreen',{data:item})
          }}
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
              <Text style={{fontSize:getFontSize(11),color:'red',textAlign:'center'}}>only {item.totalUnit-item.totalQuantity} Qty left</Text>
            </View>
          </View>

          </TouchableOpacity>
        </View>
    )
  }

  

  ViewDetail=()=>{
      return(
        <>
        <SafeAreaView style={{flex:1,width:'100%',height:'100%',backgroundColor:backColor}}>

        <Custom_Header
          openDrawer={true}
          textHeading={true}
          // textHeading={true}
          source={back} 
          textHeading1={'View Detail'}
          styleHeader={{backgroundColor: themeColor}}
          Navigation={() => this.props.navigation.goBack()}
        />

        <ScrollView
            refreshControl={
              <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.Refresh}
            />
            }
        >

          <Image source={(this.state.image!=null && this.state.image!='')?{uri:imageUrl+this.state.image}:notFound} style={{width:width,height:height-250}} resizeMode={'stretch'} />

          <View style={{width:'95%',alignSelf:'center'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            {/* <Text style={{fontSize:20,}}>Need Name</Text> */}
            <Text style={{fontSize:25,fontWeight:'bold',color:themeText}}>₹ {this.state.liverate==null?0:Math.abs(
              this.state.liverate.toFixed(4)
              )} <Text style={{fontSize:13,fontWeight:'bold',color:this.FindPercentage(this.state.baseAmount,this.state.liverate)>=0?'green':'red'}}>( {(this.FindPercentage(this.state.baseAmount,this.state.liverate)>=0?"+"+this.FindPercentage(this.state.baseAmount,this.state.liverate):this.FindPercentage(this.state.baseAmount,this.state.liverate))}% )</Text></Text>

            <Text style={{fontSize:15,color:themeText}}>Holders ({this.state.peoples==null?0:this.state.peoples})</Text>
            </View>
            <Text style={{fontSize:getFontSize(13),color:'red',}}>Only {this.state.totalUnit-this.state.quantity} qty left</Text>


            <View style={{marginTop:20}}>
            {/* <Text style={{fontSize:30,fontWeight:'bold',}}>₹ {this.state.liverate} <Text style={{fontSize:15,fontWeight:'bold',color:'green'}}>( + 0.25% )</Text></Text> */}
            </View>

            <View style={{}}>
            
            <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{fontSize:17,color:themeText}}>Tag: </Text>
            <Text style={{fontSize:14, backgroundColor:'lightgreen',borderRadius:20,padding:5,paddingHorizontal:15,marginRight:5,color:themeText}}>Best Image</Text>
            <Text style={{fontSize:14, backgroundColor:'lightgreen',borderRadius:20,padding:5,paddingHorizontal:15,color:themeText}}>Best Art</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
            <Text style={{fontSize:16,color:themeText}}>Description:</Text>
            <Text style={{fontSize:14,color:themeText}}>{this.state.desc}</Text>
            </View>

            <View style={{marginTop:20}}>
            <Text style={{fontSize:16,color:themeText}}>Similar Item:</Text>
            
            
              <View style={{marginBottom:10}}>
              <FlatList
                data={this.state.similarList}
                key={"data_dashboard"}
                keyExtractor={({ index }) => index}
                extraData={this.state.similarList}
                horizontal
                scrollEnabled={true}
                renderItem={({ item, index }) => this.ListView(item, index)}
              />
            </View>
            
            </View>

            

          </View>
    

          

        </ScrollView>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:dynamicSize(17)}}>

        <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('SellStock',{data:this.props.route.params.data})}}
          >
          <View 
          style={{width:width/2-20,alignSelf:'center',borderRadius:20,backgroundColor:'#ED2939',}}
          >
              <Text style={{padding:10,color:'white',fontSize:15,textAlign:'center'}}>SELL</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('BuySellScreen',{data:this.props.route.params.data})}}
              >
          <View style={{width:width/2-20,alignSelf:'center',backgroundColor:'#2AAA8A',borderRadius:20}}>

                  <Text style={{padding:10,color:'white',fontSize:15,textAlign:'center'}}>BUY</Text>  
          </View>
          </TouchableOpacity>              

        </View>
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
       <this.ViewDetail/>
       </>
      
    
        );
    
      }
    }
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          uInfo:state.login.UserInfo

        };
      };
      export default connect(mapStateToProps)(ViewDetailView)
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