import React, {ReactNode, useEffect} from 'react';
import {NativeModules, Platform} from 'react-native';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Strings} from '../../../values/Strings';
import SceneView from './SceneView';
import {setErrorConfig} from '../Actions';
import NetInfo from '@react-native-community/netinfo';
import {useNetInfo} from '@react-native-community/netinfo';
import {ErrorConfig} from '../../../data/ErrorConfig';

const Colors = getColorScheme();
//const Utils = NativeModules.Utils;

type PropTypes = {
  style?: StyleMedia;
  commonState: any;
  onError: Function;
  setErrorConfig: Function;
};

const Error = (props: PropTypes) => {
  const netInfo = useNetInfo();
  const {style = {}, commonState, onError, children} = props;
  const {errorConfig} = commonState;

  return (
    <SceneView
      style={styles.container}
      title={Strings[errorConfig.title]}
      desc={Strings[errorConfig.message]}
      svgImage={errorConfig.icon}
      buttonLabel={Strings[errorConfig.buttonLabel]}
      //onPress={onError}
      onPress={() =>
        showInternetOptions(netInfo, onError, props.setErrorConfig)
      }
    />
  );
};

const showInternetOptions = (
  netInfo: any,
  callback: Function,
  setErrorConfig: Function,
) => {
  if (Platform.OS === 'android') {
    if (netInfo.isConnected) {
      setErrorConfig(ErrorConfig.dismiss);
      callback();
    } else {
      //Utils.showInternetSettings();
    }
  } else {
    callback();
  }

  //Utils.showInternetSettings();
};

const mapStateToProps = (state: any) => {
  return {
    commonState: state.commonReducer,
  };
};

const mapDispatchToProps = {
  setErrorConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
});
