import * as t from './ActionType';

// this is what our action should look like which dispatches the "payload" to reducer
export const setLoginState = (loginData) => {
 // console.log(JSON.stringify(loginData))
  if(loginData.Logout)
  return{type:t.LOG_OUT,
  }
  else
  return {
    type: t.SET_LOGIN_STATE,
    payload: loginData,
  };
};
  export const setFCMToken=(token)=>{
    return{
      type:t.SET_FCM_TOKEN,
      payload:token
    }
  }