import CodePush from 'react-native-code-push';
import {CommonActions} from '@react-navigation/native';
import {Dimensions, Platform, NativeModules, Linking} from 'react-native';
import {getBundleId} from 'react-native-device-info';

export const getKeyByValue = (object: any, property: any) => {
  return Object.values(object[property]);
};

export const clipText = (text: string, limit: number) => {
  if (text && text.length >= limit) {
    text = text.substring(0, limit - 2).concat('...');
  }
  return text;
};

export const handleOnBackPress = () => {
  return true;
};

export const getFormBody = (data: object) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue =
      typeof data[property] === 'object'
        ? encodeURIComponent(JSON.stringify(data[property]))
        : encodeURIComponent(data[property]);

    if (data[property] !== null) {
      formBody.push(encodedKey + '=' + encodedValue);
    }
  }
  formBody = formBody.join('&');
  console.log('FormBody', formBody);
  return formBody;
};

export const getFormURLEncoded = (object: any) => {
  const qs = require('qs');
  const data = qs.stringify(object);
};

export const deepClone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

export const getFormData = (
  uri: string,
  name: string,
  imageType: string,
  type: string,
  module: string,
  subModule: string,
) => {
  let formdata = new FormData();
  formdata.append('file', {
    uri: uri,
    name: name,
    type: 'image/png',
  });
  formdata.append('type', type);
  formdata.append('module', module);
  formdata.append('sub_module', subModule);
  return formdata;
};

export const getCodePushStatusText = (status: any) => {
  switch (status) {
    case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
      return 'checkUpdate';
    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
      return 'downloadingUpdate';
    case CodePush.SyncStatus.INSTALLING_UPDATE:
      return 'installingUpdate';
    case CodePush.SyncStatus.UP_TO_DATE:
      return 'upToDate';
    case CodePush.SyncStatus.UPDATE_INSTALLED:
      return 'upDateInstalled';
    case CodePush.SyncStatus.SYNC_IN_PROGRESS:
      return 'syncInProgress';
  }
};

export const resetNavigationStack = (navigation: any, screen: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: screen}],
    }),
  );
};

export const booleanToInt = (key: Boolean) => {
  return key ? 1 : 0;
};

export const getScaledHeight = (pixel: Number) => {
  const windowHeight = Dimensions.get('window').height;
  return (windowHeight * pixel) / 640;
};

export const getScaledWidth = (pixel: Number) => {
  const windowWidth = Dimensions.get('window').width;
  return (windowWidth * pixel) / 360;
};

export const check = (pixel: Number) => {
  const windowWidth = Dimensions.get('window').width;
  return (windowWidth * pixel) / 360;
};

export const getDeviceLocale = () => {
  let locale = null;
  try {
    locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;
  } catch (e) {
    console.log('getDeviceLocale-Error', e);
  }
  return locale;
};

export const getTestIdProps = id => {
  const appIdentifier = getBundleId();
  if (!id) {
    return undefined;
  }

  const prefix = `${appIdentifier}:id/`;
  const hasPrefix = id.startsWith(prefix);
  let identifier = {
    testID: Platform.select({
      android: !hasPrefix ? `${prefix}${id}` : id,
      ios: hasPrefix ? id.slice(prefix.length) : id,
    }),
  };

  if (Platform.OS === 'android') {
    identifier.accessible = false;
    identifier.accessibilityLabel = id;
  }
  return identifier;
};

export const epochTimeStamp = (date: any) => {
  return Math.floor(date / 1000);
};

export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
