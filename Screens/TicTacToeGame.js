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
    FlatList
    //CheckBox
  } from 'react-native';
  import * as React from 'react';
  import { connect } from 'react-redux';
  import { themeColor } from '../Styles/Color';
  import { ScrollView } from 'react-native-gesture-handler';
  import { notifyMessage } from '../Components/Toast';
  import Header from './gamePart/Header';
  import GameBoard from './gamePart/GameBoard';
  class TicTacToeView extends React.PureComponent {
  
    constructor(props) {
      super(props);
  
      this.state = {
        gameStarted:false
      }
      
  
    }
  

    TicTacToe=()=>{
        return(
          <>
                    <View>
              <Text style={styles.welcome}>
                Welcome to the game!
              </Text>
              <TouchableOpacity onPress={() => this.setState({gameStarted:true})}>
                <Text style={styles.instructions}>
                  Touch here to start
                </Text>
              </TouchableOpacity>
            </View>
         </>
        )
    }
  
    render() {
  
        if (!this.props.network.isConnected) {
        notifyMessage("Internet Connection Error....")
 
        }
    
        return (
        <View style={styles.container}>
            <Header/>
            {
                this.state.gameStarted?
                <GameBoard/>:
                <this.TicTacToe/>
            }
        </View>
    
        );
    
      }
    }
    const mapStateToProps = (state) => {
        return {
          network: state.network,
          
        
        };
      };
      export default connect(mapStateToProps)(TicTacToeView)
      const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#F5FCFF',
          },
          welcome: {
            fontSize: 20,
            marginTop: 50,
          },
          instructions: {
            textAlign: 'center',
            marginTop: 20,
            color: 'grey',
            marginBottom: 5,
          },
      })