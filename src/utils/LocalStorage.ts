import EncryptedStorage from 'react-native-encrypted-storage';
import {LocalStorageConstants} from './Constants';

export const getUserSession = async () => {
  try {
    const session = await EncryptedStorage.getItem(
      LocalStorageConstants.USER_SESSION,
    );
    if (session !== undefined) {
      return JSON.parse(session);
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUserSession = async (user: object) => {
  try {
    await EncryptedStorage.setItem(
      LocalStorageConstants.USER_SESSION,
      JSON.stringify(user),
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeUserSession = async () => {
  try {
    await EncryptedStorage.removeItem(LocalStorageConstants.USER_SESSION);
  } catch (error) {
    console.log(error);
  }
};

export const clearEncryptedStorage = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
