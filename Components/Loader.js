import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  ImageBackground,
  Image
} from 'react-native';
import { dynamicSize } from './dynamicSize';

export class Loader extends React.Component{
    Loader = props => {
        const {
          loading=false,
          ...attributes
        } = props;
        return (
            <Modal
              transparent={true}
              animationType={'none'}
              visible={loading}
              onRequestClose={() => {console.log('close modal')}}
              style={{width:dynamicSize(150),height:dynamicSize(150),backgroundColor:'red'}}
              >
              {/* <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                  <ActivityIndicator
                    color="#85cc62" size="large" />
                </View>
              </View> */}
              {/* <View>
                <ImageBackground source={require('../Icons/loading.gif')} style={{width:100,height:100}} />
              </View> */}
                            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                  {/* <ActivityIndicator
                    color="#85cc62" size="large" /> */}
                   <Image source={require('../Icons/loadingNew.gif')}
                   style={{
                    width:100,
                    height:100
                   }}
                   /> 
                </View>
              </View>
            </Modal>
          )
        }
        constructor(props){
            super(props)
            //console.log("hdfhdhfhdhfh"+props.loading);
           //this.setState({loading:props.loading});
          // console.log("loading"+this.Loader.loading);
        } 
        
        render(){
            return(<this.Loader loading={this.props.loading}></this.Loader>);
        } 
    }
    const styles = StyleSheet.create({
        modalBackground: {
          flex: 1,
          alignItems: 'center',
          
          flexDirection: 'column',
          justifyContent: 'space-around',
         
          // backgroundColor: '#00000030'
        },
        activityIndicatorWrapper: {
          // backgroundColor: "#FFFFFF",
          height: "15%",
          width: "25%",
          // width:dynamicSize(100),
          // height:dynamicSize(100),
          borderRadius: 10,
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'space-around'
        }
      });