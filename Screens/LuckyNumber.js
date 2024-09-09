// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Button,
//    TouchableOpacity,
//     Image,
//     Alert,
//     Modal,
//     ImageBackground,
//     Picker,
//     FlatList,
//   } from 'react-native';
//   import * as React from 'react';
//   import { connect } from 'react-redux';
//   import { themeColor } from '../Styles/Color';
//   import { ScrollView } from 'react-native-gesture-handler';
//   import { notifyMessage } from '../Components/Toast';
//   import ScratchCard from '../Components/Scratch';


//   class LuckyNumberView extends React.PureComponent {
    
  
//     constructor(props) {
//       super(props);
  
//       this.state = {
        
//       }

      
//     }
  

//     LuckyNumber=()=>{
//         return(
//           <>
//                     <View style={styles.container}>
//               <Text style={styles.welcome}>
//                 Welcome to the game!
//               </Text>
//               <ScratchCard/>

//             </View>
//          </>
//         )
//     }


  
//     render() {
  
//         if (!this.props.network.isConnected) {
//         notifyMessage("Internet Connection Error....")
 
//         }
    
//         return (
//                 <this.LuckyNumber/>
//         );
    
//       }
//     }
//     const mapStateToProps = (state) => {
//         return {
//           network: state.network,
          
        
//         };
//       };
//       export default connect(mapStateToProps)(LuckyNumberView)
//       const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             alignItems: 'center',
//             justifyContent:'center',
//             backgroundColor: '#F5FCFF',
//           },
//           welcome: {
//             fontSize: 20,
//             marginTop: 50,
//           },
//           instructions: {
//             textAlign: 'center',
//             marginTop: 20,
//             color: 'grey',
//             marginBottom: 5,
//           },
//       })LuckyNumberView



import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, ImageBackground } from 'react-native';
// import { SkiaView } from '@shopify/react-native-skia';

class LuckyNumberView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScratched: false,
      dynamicNumber: Math.floor(Math.random() * 100), // Generate a random number
      popupAnimation: new Animated.Value(0), // Initialize the animation value
    };
  }

  handleTouch = () => {
    this.setState({ isScratched: true });

    // Trigger the popup animation
    Animated.timing(this.state.popupAnimation, {
      toValue: 1,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
  };

  render() {
    const { isScratched, dynamicNumber, popupAnimation } = this.state;

    // Interpolate the animation value for scaling the number
    const scale = popupAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <View style={styles.container}>
        {/* Scratch card */}
        <TouchableWithoutFeedback onPress={this.handleTouch}>
          {/* <SkiaView style={styles.scratchCard}>
            {isScratched ? null : (
              <ImageBackground source={require('../Icons/scratch.jpg')} style={{width:'100%',height:'100%'}}></ImageBackground>
            )}

            {isScratched && (
              <Animated.View style={[styles.popupNumber, { transform: [{ scale }] }]}>
                <Text>Lucky Number</Text>
                <Text style={styles.number}>{"\n"}{dynamicNumber}</Text>
              </Animated.View>
            )}
          </SkiaView>
           */}
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scratchCard: {
    width: 300,
    height: 200,
  },
  scratchLayer: {
    flex: 1,
    backgroundColor: 'gray', // Replace with your scratch-off texture
  },
  popupNumber: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LuckyNumberView;