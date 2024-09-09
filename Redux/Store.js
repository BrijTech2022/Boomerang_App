import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware, compose,combineReducers} from 'redux';
//import { composeWithDevTools } from ''; // this is for debugging with React-Native-Debugger, you may leave it out
import {  loginReducer, FCMReducer} from './Reducer';
import {
  createNetworkMiddleware,
  offlineActionCreators,
  checkInternetConnection,
} from 'react-native-offline';
import {reducer as network} from 'react-native-offline';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore,persistCombineReducers } from 'redux-persist';
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['network'],
};

const rootReducer= persistCombineReducers(persistConfig, {
 
  login: loginReducer,
  network: network,
  FToken:FCMReducer
  });
const middleware = [
  thunkMiddleware,
  networkMiddleware
  // more middleware
];

 const configureStore = () => {
  let store = null
  store = compose(
    applyMiddleware(...middleware))(createStore)(rootReducer);
 
   persistStore(store, null, async() => {
    // After rehydration completes, we detect initial connection
   const isConnected=await checkInternetConnection();
   const { connectionChange } = offlineActionCreators; 
      store.dispatch(connectionChange(isConnected));
      //callback(); // Notify our root component we are good to go, so that we can render our app
    
  });
  return store;
};
export default configureStore();