// import {AlertIOS, Platform, ToastAndroid} from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Payment from '../api/Payment';
// import QrApi from '../api/qrCode';
import createContext from "../idendicalCode/createContextData";
// import getListApi from '../api/getListApi';
// import qrCode from '../api/qrCode';

const listReducer = (state, action) => {
  switch (action.type) {
    case "isLoading":
      return !action.payload;
    default:
      return state;
  }
};

const isLoading = (dispatch) => {
  return async (pstate, called) => {
    try {
      if (called) {
        called();
      }
      
      // console.log({pstate});
      dispatch({ type: "isLoading", payload: pstate });
    } catch (e) {
      if (called) {
        called();
      }
      dispatch({ type: "isLoading", payload: true });
    }
  };
};

export const { Context, Provider } = createContext(
  listReducer,
  { isLoading },
  false
);
