import {AlertIOS, Platform, ToastAndroid} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
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
    case 'getlist':
      return action.payload;
    case 'payment_received':
      return action.payload;
    case 'scan_qr':
      return state;
    case 'filterData':
      return state.filter(item => item.prn_no.includes(action.payload));
    default:
      return state;
  }
};

const getList = dispatch => {
  return async called => {
    try {
      const response = await getListApi.get();
      if (called) {
        called();
      }
      notifyMessage('Data fetched successfully ✅');
      // console.log('test', response.data.data);
      dispatch({type: 'getlist', payload: response.data.data});
    } catch (e) {
      if (called) {
        called();
      }
      notifyMessage('Failed to fetch Student data ❌');
    }
  };
};
const acceptPaymentReq = dispatch => {
  // console.log(dispatch);
  return async (prn_no, called) => {
    // console.log({prn_no});
    try {
      const mentor_prn = await AsyncStorage.getItem('prn');
      // console.log({mentor_prn});
      let body = {
        prn_no,
        mentor_prn,
        payment: 1,
      };
      // console.log(body);
      const postresponse = await Payment.post('/payments', body);
      const response = await getListApi.get();
      if (called) {
        called();
      }
      notifyMessage('Payment receipt to student ✅');

      dispatch({type: 'payment_received', payload: response.data.data});
    } catch (e) {
      // console.log(e);
      if (called) {
        called();
      }
      notifyMessage('Failed to send student ❌');
    }
  };
};
const checkQr = dispatch => {
  console.log(dispatch)
  return async (qr_code_id, called) => {
    await qrCode.patch('/qrCodes', {
      params: {qr_code_id},
    });
    if (called) {
      called();
    }
    dispatch({type: 'scan_qr'});
  };
};
const filterData = dispatch => {
  return async id => {
    console.log({id});
    // await jsonServer.delete(`/blogPost/${id}`);
    dispatch({type: 'filterData', payload: id});
  };
};

export const {Context, Provider} = createContext(
  listReducer,
  {filterData, getList, checkQr, acceptPaymentReq},
  [],
);
