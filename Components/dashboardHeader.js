import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { dynamicSize, getFontSize } from './dynamicSize';
import RIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { themeColor, whiteText } from '../Styles/Color';
const { width, height } = Dimensions.get('window')

export default class Dash_Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleimage3: false,
        }
    }
    render() {
        // console.warn("props=>", this.props)
        let { openDrawer, textHeading, secImg } = this.props;
        return (

            <View style={[styles.main, this.props.styleHeader]}>
                <View style={{
                    width: width - dynamicSize(10), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    {openDrawer ?
                        <TouchableOpacity onPress={this.props.Navigation} style={{ zIndex: 1, width: dynamicSize(40) }}  >
                            {/* <Image
                                style={{tintColor:'white', height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }}
                                source={this.props.source}
                                resizeMode='stretch'
                            /> */}
                            <RIcon style={{ height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }} color={'white'} name={"menu"} size={40} />
                        </TouchableOpacity>

                        : null}

                    {textHeading ?
                        <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: dynamicSize(200) }} >
                            <Text style={[styles.textHeading, this.props.textdesign]} >
                                {this.props.textHeading1}
                            </Text>
                        </View>
                        : null
                    }

                    {secImg ? null :
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            {this.props.img1 ? <TouchableOpacity onPress={this.props.NavigationImg} style={{ zIndex: 1, right: dynamicSize(5) }}  >
                                {/* <Image
                                style={{tintColor:'white', height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }}
                                source={this.props.sourceImg}
                                resizeMode='stretch'
                            /> */}

                                <Ionicons name={'wallet-outline'} color={'white'} size={30} style={{ height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }} />

                            </TouchableOpacity> : null}
                            {this.props.img2 ? <TouchableOpacity onPress={this.props.Navigation1} style={{ zIndex: 1, width: dynamicSize(40), }}  >
                                {/* <Image
                                style={{tintColor:'white', height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }}
                                source={this.props.source1}
                                resizeMode='stretch'
                            /> */}

                                <Ionicons name={'wallet-outline'} color={'white'} size={30} style={{ height: dynamicSize(30), width: dynamicSize(30), alignSelf: "center" }} />

                            </TouchableOpacity> : null}
                        </View>
                    }

                </View>

            </View>


        )
    }
}
const styles = StyleSheet.create({
    main: {
        width: width,
        height: dynamicSize(60),
        backgroundColor: themeColor,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // flexDirection: 'row',
        position: 'relative',
        zIndex: 1
    },
    textHeading: {
        color: whiteText,
        fontWeight: '400',
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: getFontSize(18),
    }

});