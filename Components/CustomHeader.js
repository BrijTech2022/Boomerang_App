import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
    Dimensions,
     Image, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { dynamicSize,getFontSize } from './dynamicSize';
const { width, height } = Dimensions.get('window')

export default class Custom_Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleimage3: false,
        }
    }
    render() {
        // console.warn("props=>", this.props)
        let { openDrawer,textHeading,secImg} = this.props;
        return (
         
 <View style={[styles.main,this.props.styleHeader]}>
                <View style={{  left: dynamicSize(10), alignSelf: 'center',flexDirection:'row'
                }}>
                    {openDrawer ?
                        <TouchableOpacity onPress={this.props.Navigation} style={{zIndex:1}}  >
                            <Image
                                style={{tintColor:'white', height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }}
                                source={this.props.source}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>

                        : null}

                        {textHeading?
                        <View style={{justifyContent:'center',alignSelf:'center',width:width-dynamicSize(80),}} > 
                            <Text style={{ color: 'white',fontWeight: '400',fontFamily:'Montserrat-Medium',textAlign:'center', fontSize: getFontSize(18),
     
    }} >
                               {this.props.textHeading1}
                            </Text>
                        </View>
                :null
                        }

{secImg?null:
                          <TouchableOpacity onPress={this.props.Navigation1} style={{zIndex:1}}  >
                            <Image
                                style={{tintColor:'white', height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }}
                                source={this.props.source1}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>}

                </View>
                
            </View>
            
           
        )
    }
}
const styles = StyleSheet.create({
main:{
    width: '100%',
    height: dynamicSize(60),
    backgroundColor: '#353b47',
    alignItems: 'center',
    // justifyContent: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flexDirection: 'row',
    position:'relative',

zIndex:1
    // backgroundColor:'green'
},
    header: {
        width: width - dynamicSize(100),
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: dynamicSize(10),
        marginVertical: dynamicSize(8)
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    dropDownItem: {
        borderBottomColor: '#e4e6e5',
        borderBottomWidth: dynamicSize(2),
        alignSelf: 'center',
        justifyContent: "space-between",
        marginVertical: dynamicSize(10)

    }

});