import { loginState,FCMToken } from './DataState';
import * as t from "./ActionType";

export const loginReducer = (state = loginState, action) => {
  //alert(action)
  switch (action.type) {
    case t.SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
      case t.LOG_OUT:
        return{
          isLoggedIn:false
        }
    default:
      return state;
  }
};


export const FCMReducer=(state=FCMToken,action)=>{
  //alert(JSON.stringify(action.payload))
 switch(action.type){
   case t.SET_FCM_TOKEN:
     return{
       ...state.Token=action.payload.Token,
       
     }
     default:
     return state;
 }
}
