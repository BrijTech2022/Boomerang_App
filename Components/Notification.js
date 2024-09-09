import React, {Component} from "react";
import PushNotification from "react-native-push-notification";
import Store from '../Redux/Store';
import {setFCMToken} from '../Redux/Actions';
export default class PushNotificationController extends Component{
    componentDidMount(){
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
              console.log("TOKEN:", token);
              Store.dispatch(setFCMToken({Token:token}))
            },
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
              console.log("NOTIFICATION:", notification);
            },
            // Android only
            senderID: "830218650507",
            // iOS only
            permissions: {
              alert: true,
              badge: true,
              sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
          });
    }

    render(){
        return null;
    }
}
