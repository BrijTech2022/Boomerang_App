import * as React from 'react';
//import {Item} from './Models/ItemList';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Card,
  CardItem,
  Button,
  Image
} from 'react-native';
//import { Card, Button } from 'react-native-elements';
import filter from 'lodash.filter';
import {Loader} from './Loader';
//import { color } from 'react-native-reanimated';
export class SearchBar extends React.Component{
  
  
  constructor(props){
    super(props)
    this.state={isLoading:false,data:null,err:false,query:null};   
    this.setState({data:this.props.data});
    
    this.renderHeader.bind(this);   
    console.log(JSON.stringify(this.props.data));
    
}


  renderHeader() {
  //console.log("SSSSSS"+this.state.query);
  
  return (
    <View
      style={{
       flex:1,
        backgroundColor: '#bbb',
        padding: 0,
        borderWidth:1,
        width:"98%",
        left:"1%",
        marginVertical: 5,
        borderRadius: 1,
        alignItems:"stretch"
      }}
    >
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        
        value={this.state.query}
        id="txtInput"
        onChangeText={queryText =>this.handleSearch(queryText)  }
        placeholder="Search"
        style={{  backgroundColor: '#eee', paddingHorizontal: "5%", }}
      />
    </View>
  );

}
handleSearch = text => {
  const formattedQuery = text.toLowerCase();
  const filteredData = filter(Item, user => {
    return this.contains(user, formattedQuery);
  });
  
  this.setState((state,props)=>({data:filteredData,isLoading:false}));
  this.setState((state,props)=>({query:text}));
  //setQuery(text);
};

 contains = ({ name, email }, query) => {
  const { firstName, MiddleName } = name;

  if (firstName.includes(query) || MiddleName.includes(query) ) {
    return true;
  }

  return false;
};










 render(){
 
  //const {ob}=;
  if (this.state.isLoading) {
    return (
      <View style={{ flex: 2, justifyContent: 'center'}}>
      <Loader loading={this.state.isLoading} {...this.props} ></Loader>
      </View>
    );
  }
  else{
    
    return (
      
      <View style={styles.container}>
       
         
        <FlatList
          style={{width:"100%",flex:1}}
          removeClippedSubviews={true}
          ListHeaderComponent={this.renderHeader()}
          data={this.state.data}
          numColumns={1}
          keyExtractor={item => item.id.itemid}
          renderItem={({ item }) => (
            
            
            
            
            
            <View style={styles.listItem}>
               
                  
              <View>      
               <Image
                source={{ uri: item.picture.thumbnail }}
                style={styles.coverImage}
              /></View>
              <View style={styles.metaInfo}>
                
                 <Text style={styles.title}>{item.Item.Name} </Text>
                 <Text numberOfLines={2} ellipsizeMode='tail' style={styles.desc}>{item.Item.Description}</Text>
                 <Text ><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>{'\u20B9'}{item.Item.SPrice}</Text><Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> {item.Item.MRP}</Text> <Text style={{color:'darkgreen',fontWeight:'bold'}}>{item.Item.Offer}%Off</Text></Text>
                  
               </View> 
             </View>
          )}
         // numColumns={1}
        />
      </View>
    );
  }
 }

    
   
}
  /*useEffect(() => {
      fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(results => {
          setData(results);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    },[]);*/

 const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    
    backgroundColor:'#e5fbe5',
    width:"100%"
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    flex:2,
    marginTop: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection:'row',
    width:"95%",
    elevation:2,
    borderRadius:10,
    marginLeft:"2%"
    
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 16,
    width:"100%",
    padding: 0,
    color:'black',
    fontWeight:'bold',
  },
  desc: {
    fontSize: 18,
    color:'blue',
    padding: 2,
    flex:1,
    width:'70%'
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 10
},
description: {
    fontSize: 10,
    color: '#c1c4cd'
}

});