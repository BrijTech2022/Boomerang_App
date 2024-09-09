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
import { connect } from 'react-redux';
import { backColor, themeColor, themeText } from '../Styles/Color';
import { Loader } from '../Components/Loader';
import { ScrollView } from 'react-native-gesture-handler';
import { notifyMessage } from '../Components/Toast';
import { ActivityIndicator } from 'react-native';
import store from '../Redux/Store';
import { setCartCount, setLoginState } from '../Redux/Actions';
import BottomNewScreen from './BottomNew';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { back, unique1, unique2, unique3, unique4 } from '../Components/icon';
import { ContestApi } from '../Api/ContestAPI';
import Custom_Header from '../Components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { imageUrl } from '../Api/ApibaseUrl';
import { getFontSize } from '../Components/dynamicSize';
class RunningParticipationView extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      upcoming: true,
      mList: [{ "val": 1, "image": unique1, "price": 120 }, { "val": 0, "image": unique2, "price": 90 }, { "val": 1, "image": unique3, "price": 80 }, { "val": 0, "image": unique4, "price": 60 }, { "val": 1, "image": unique1, "price": 55 }, { "val": 0, "image": unique4, "price": 50 }, { "val": 1, "image": unique3, "price": 42 }, { "val": 0, "image": unique2, "price": 20 }],
      RunningList: [],
      refreshing:false
    }


  }

  componentDidMount() {
    // console.log("Contest"+JSON.stringify(this.props.route.params.data))
    this.setState({isLoading:true})
    ContestApi.GetAllParticipationByContestId(this.props.route.params.data.contestId).then((data) => {
      // console.log("participation"+JSON.stringify(data))
      if (data.data.length != 0) {
        this.setState({ RunningList: data.data, isLoading: false })
      }
      else {
        this.setState({ RunningList: [], isLoading: false })
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

  FindPercentage=(base,live)=>{
    base=(base!=0 && base !=null)?base:1;
    live=(live!=0 && live !=null)?live:1;
    // console.log(base)
    return ((live-base)/base*100).toFixed(2)
  }

  ListView1(item, index) {
    return (
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          
          onPress={() => { this.props.navigation.navigate('CustomContestScreen') }}
        >
          <View style={{
            alignSelf: 'center', height: 80, width: '95%',
            borderWidth: 1,
            borderColor: themeColor,
            borderRadius: 10,
            justifyContent: "center"
          }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '25%' }}>
                <Image
                  source={item.contestImage != null ? { uri: imageUrl+item.contestImage } : unique1}
                  style={{ width: 70, height: 70, left: 5, borderRadius: 10 }} resizeMode='stretch' />


              </View>

              <View style={{ width: '50%', height: 70, top: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.contestTitle}</Text>
                <Text style={{ fontSize: 13, }}>{item.contestSubTitle}</Text>
              </View>
              <View style={{ width: '25%', height: 70, top: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'right' }}>₹ {item.joiningAmount} </Text>
                {/* <Text style={{fontSize:12,fontWeight:'bold',color:item.val==1?'green':'red',textAlign:'right',}}>{item.val==1?'+':'-'} 0.25% </Text> */}
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'green', textAlign: 'right', }}>0.25% </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  ListView(item, index) {
    return (
      <View style={{ marginTop: 10,marginBottom:10,width: '48%',}}>
        <View
          style={{borderWidth:0.5,borderColor:themeColor,borderRadius:10}}
        >
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('ViewDetailScreen',{data:item}) }}
        >
          <View style={{
            justifyContent:'center',
            marginTop:5
          }}>
            <View style={{}}>
              <View style={{}}>
                <Image source={item.imageURL?{uri:imageUrl+item.imageURL}:require('../Icons/notfound.jpg')} style={{ width: Dimensions.get('window').width/2-50, height: 120, borderRadius: 10,alignSelf:'center',}} resizeMode='stretch' />
              </View>
            </View>


          </View>

          {/* <View style={{height:30,top:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',}}>₹ 250 </Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:item.val==1?'green':'red',}}>{item.val==1?'+':'-'} 0.25% </Text>
            </View> */}

          <View style={{marginBottom:5,top:2}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View>
              <Text style={{ fontSize: 14, fontWeight: 'bold',color:themeText,left:15}}>₹{item.liverate?Math.abs(item.liverate.toFixed(4)):0}</Text>
              </View>

              {/* <Text style={{fontSize:12,fontWeight:'bold',color:'green',right:5}}>+0.25% </Text> */}
              
              <Text style={{fontSize:getFontSize(12),right:10,color:this.FindPercentage(item.baseAmount,item.liverate)>=0?'green':'red'}}>{(this.FindPercentage(item.baseAmount,item.liverate)>=0?"+"+this.FindPercentage(item.baseAmount,item.liverate):this.FindPercentage(item.baseAmount,item.liverate))}%</Text>

            </View>
            <Text style={{fontSize:getFontSize(11),color:'red',textAlign:'center'}}>only {item.totalUnit-item.totalQuantity} Qty left</Text>

            
          </View> 

        </TouchableOpacity>
        </View>
      </View>
    )
  }


  RunningParticipation = () => {
    return (
      <>
        <SafeAreaView style={styles.Container}>
          <Custom_Header
            openDrawer={true}
            textHeading={true}
            // textHeading={true}
            source={back}
            textHeading1={'Running Participation'}
            styleHeader={{ backgroundColor: themeColor }}
            Navigation={() => this.props.navigation.goBack()}
          />
          <View style={{ width: '100%', height: '100%', backgroundColor: backColor }}>
          
            <ScrollView
                     refreshControl={
                      <RefreshControl
                      //refresh control used for the Pull to Refresh
                      refreshing={this.state.refreshing}
                      onRefresh={this.Refresh}
                    />
                   }
            >

            


  {
    this.state.RunningList.length!=0?
      <View style={{width:'90%',alignSelf:'center'}}>
              < FlatList
                data={this.state.RunningList}
                key={"data_dashboard"}
                keyExtractor={({ index }) => index}
                extraData={this.state.RunningList}
                numColumns={2}
                renderItem={({ item, index }) => this.ListView(item, index)}
                columnWrapperStyle={{justifyContent: 'space-between'}}
              />
      </View>
      :
      <View style={{marginTop:50}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{textAlign:'center',fontSize:getFontSize(20)}}>! List not available !</Text>
          </View>
      </View>
  }


            </ScrollView>
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
        <Loader loading={this.state.isLoading} />
        <this.RunningParticipation />
      </>


    );

  }
}
const mapStateToProps = (state) => {
  return {
    network: state.network,


  };
};
export default connect(mapStateToProps)(RunningParticipationView)
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: "100%",
    height: "100%",

  },
  SubCon: {
    marginTop: "10%",
    //backgroundColor:'white'
  }
})