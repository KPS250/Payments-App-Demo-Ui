import React, {useEffect} from 'react';
import {View, Text, useColorScheme, Image} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import CodePush from 'react-native-code-push';
import {
  getCodePushStatusText,
  resetNavigationStack,
} from '../../../utils/Utils';
import {useCodePush} from '../../commons/components/CodePushProvider';
import {splashStyles as styles} from '../styles/splashStyles';
import {connect} from 'react-redux';
import {setColorScheme, setErrorConfig} from '../../commons/Actions';
import {useNetInfo} from '@react-native-community/netinfo';
import {getColorScheme} from '../../../values/Colors';
import {getUserSession} from '../../../utils/LocalStorage';
import {Screens} from '../../../utils/Constants';
import {changeLaguage, Strings} from '../../../values/Strings';
import Store from '../../../utils/Store';
import {setSession} from '../../login/Actions';
type PropsType = {
  updateStatus: number;
  progress: number;
  navigation: any;
  commonState: any;
  loginState: any;
  setErrorConfig: Function;
  setColorScheme: Function;
  setSession: Function;
};
const Colors = getColorScheme();

const Splash = (props: PropsType) => {
  const {progress, updateStatus} = useCodePush();
  const systemColorScheme = useColorScheme();
  const {navigation, commonState, loginState} = props;
  const netInfo = useNetInfo();

  useEffect(() => {
    if (
      updateStatus === CodePush.SyncStatus.UP_TO_DATE ||
      updateStatus === CodePush.SyncStatus.UPDATE_INSTALLED
    ) {
      setTimeout(() => checkForUserLogin(navigation, props), 400);
    } else if (updateStatus === CodePush.SyncStatus.UNKNOWN_ERROR) {
      checkForUserLogin(navigation, props);
    }

    if (
      commonState.colorScheme === null &&
      commonState.colorScheme !== systemColorScheme
    ) {
      props.setColorScheme(systemColorScheme);
    }
  }, [updateStatus]);

  const checkForUserLogin = async (navigation: any, props: PropsType) => {
    const session = await getUserSession(); //Store.getState().loginReducer;
    console.log('CheckForUserLogin', session);
    if (false) {
      //session
      setSession(session);
      try {
        // changeLaguage(session.language);
      } catch (e) {
        console.log('Localization Error', e);
      }
      resetNavigationStack(navigation, Screens.HOME);
    } else {
      resetNavigationStack(navigation, Screens.INTROSLIDER);
    }
  };

  return (
    <SafeArea
      statusBarColor={Colors.bluish}
      onError={() => checkForUserLogin(navigation, props)}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/splash.png')}
          style={styles.image}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.status}>
            {Strings[getMessage(updateStatus, progress, netInfo)]}
          </Text>
        </View>
      </View>
    </SafeArea>
  );
};

const restartApp = () => {
  CodePush.restartApp();
};

const getMessage = (updateStatus: number, progress: number, netInfo: any) => {
  if (netInfo.isConnected && netInfo.isConnected === true) {
    if (updateStatus === CodePush.SyncStatus.DOWNLOADING_PACKAGE) {
      getCodePushStatusText(updateStatus) + '-' + progress;
    } else {
      return getCodePushStatusText(updateStatus);
    }
  } else {
    return 'noInternet';
  }
};

const mapStateToProps = (state: any) => {
  return {
    commonState: state.commonReducer,
    loginState: state.loginReducer,
  };
};

const mapDispatchToProps = {
  setErrorConfig,
  setColorScheme,
  setSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
