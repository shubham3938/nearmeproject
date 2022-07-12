import {AlertIOS, Platform, ToastAndroid} from 'react-native';

import Payment from '../api/Payment';
import QrApi from '../api/qrCode';
import createContext from '../idendicalCode/createContextData';
import getListApi from '../api/getListApi';
import qrCode from '../api/qrCode';

// import jsonServer from "../src/api/jsonServer";
const notifyMessage = msg => {
  // console.log('Thank you');

  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
    // console.log({msg});
  } else {
    AlertIOS.alert(msg);
  }
  // uu
};
const listReducer = (state, action) => {
  switch (action.type) {
    case 'scan_qr':
      return action.payload;
    default:
      return state;
  }
};


const checkQRstudent = dispatch => {
  // console.log(dispatch)
  return async (qr_code_id, called) => {
    // console.log({qr_code_id})
    try {
        const response =    await qrCode.get('/qrCodes/UpdateQrCode', {
        params: {qr_code_id},
      });
      if (called) {
        called();
      }
      dispatch({type: 'scan_qr',payload: response.data.data});
    } catch (e) 
    {
    // console.log(e.response.data)
    }
  };
};

export const {Context, Provider} = createContext(listReducer, {checkQRstudent}, []);
