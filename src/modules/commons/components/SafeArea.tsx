import React, {Fragment, ReactNode} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {connect} from 'react-redux';
import Error from './Error';
const Colors = getColorScheme();

type PropsType = {
  statusBarColor?: string;
  statusBarStyle?: string;
  statusBarHidden?: boolean;
  bottomBarColor?: string;
  backgroundColor?: string;
  children?: ReactNode;
  noStatusBar?: boolean;
  commonState?: any;
  onError?: Function;
};

const SafeArea = (props: PropsType) => {
  const {
    statusBarColor = Colors.bluish,
    statusBarStyle = 'light-content',
    bottomBarColor,
    backgroundColor = Colors.bluish,
    statusBarHidden = false,
    children = null,
    noStatusBar = false,
    commonState,
    onError = null,
  } = props;

  const {errorConfig} = commonState;
  return errorConfig.visible && onError ? (
    <Error onError={onError} />
  ) : (
    <>
      {!noStatusBar && (
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle={statusBarStyle || ''}
          hidden={statusBarHidden}
          animated={true}
        />
      )}
      <SafeAreaView
        style={[
          styles.safeAreaTop,
          {
            backgroundColor: statusBarColor,
          },
        ]}
      />
      <SafeAreaView
        style={[
          styles.safeAreaBottom,
          {
            backgroundColor: bottomBarColor ? bottomBarColor : backgroundColor,
          },
        ]}>
        <View
          style={[
            styles.container,
            {backgroundColor: backgroundColor ? backgroundColor : 'white'},
          ]}>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    commonState: state.commonReducer,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SafeArea);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  safeAreaTop: {
    flex: 0,
  },
  safeAreaBottom: {
    flex: 1,
  },
});
