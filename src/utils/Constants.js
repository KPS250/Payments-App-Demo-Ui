import { Icons } from '../values/Icons';
import { Strings } from '../values/Strings';

export const LocalStorageConstants = {
  USER_SESSION: 'USER_SESSION',
};

export const AppType = {
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  WEB: 'WEB',
};

export const ErrorScreen = {
  INTERNET: 0,
  API: 1,
};

/*
export const ImageOptions = [
  {
    icon: require('../assets/icons/ic_camera.png'),
    label: 'Camera',
    selection: 'CAMERA',
  },
  {
    icon: require('../assets/icons/ic_gallery.png'),
    label: 'Gallery',
    selection: 'GALLERY',
  },
];
*/


export const Screens = {
  SPLASH: 'splash',
  INTROSLIDER: 'introSlider',
  HOME: 'home',
  USER_TRANSACTION: 'userTransaction',
  SEARCH_USER: 'searchUser',
};

export const PaymentMode = {
  SENDING: 10,
  REQUESTING: 20,
  ADD: 30,
  presentation: {
    10: Strings.sendMoney,
    20: Strings.receiveMoney,
    30: Strings.addMoney,
  }
};

export const PaymentStatus ={
  SENT: 10,
  RECEIVED: 20,
  FAILED: 30,
  presentation: {
    10: {
      icon: require('../assets/icons/ic_sent.png'),
      label: Strings.sent, 
      color: 'chrome'
    },
    20: {
      icon: require('../assets/icons/ic_received.png'),
      label: Strings.received, 
      color: 'green',
    },
    30: {
      icon: require('../assets/icons/ic_fail.png'),
      label: Strings.failed,
      color: 'red'
    }
  }
}

export const InputType = {
  NUMBER: 10,
  DECIMAL_POINT: 20,
  BACKSPACE: 30,
}

export const randomPositions = [
  'center',
  'flex-start',
  'flex-end',
]