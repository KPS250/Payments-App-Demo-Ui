import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {menuStyles as styles} from '../styles/menuStyles';
import DeviceInfo from 'react-native-device-info';
import {connect} from 'react-redux';
import {setLogout} from '../../login/Actions';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {getColorScheme} from '../../../values/Colors';
import {Icons} from '../../../values/Icons';
import {Strings} from '../../../values/Strings';
import {Screens} from '../../../utils/Constants';
import {Urls} from '../../../values/Urls';

const Colors = getColorScheme();

type PropTypes = {};

const Menu = (props: any) => {
  const navigation = useNavigation();
  const menuItems = [
    {
      label: Strings.home,
      icon: '',
      onPress: () => {},
    },
    {
      label: Strings.aboutUs,
      icon: '',
      onPress: () => {},
    },
    {
      label: Strings.helpSupport,
      icon: '',
      onPress: () => {},
    },
    {
      label: Strings.logout,
      icon: '',
      onPress: () => {},
    },
  ];

  return (
    <SafeArea
      noStatusBar
      bottomBarColor={Colors.blue}
      backgroundColor={Colors.blue}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={styles.close}
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
            {Icons.close}
          </Pressable>
        </View>
        <View style={styles.hr} />
        <View style={styles.body}>
          {menuItems.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => onPress(item.onPress, navigation)}>
                <Text style={styles.label}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View style={styles.hr} />
      <Text style={styles.version}>{`Version ${DeviceInfo.getVersion()}`}</Text>
    </SafeArea>
  );
};

const onPress = (callback: Function, navigation: any) => {
  navigation.dispatch(DrawerActions.closeDrawer());
  callback();
};

const mapStateToProps = (state: any) => {
  return {
    //errorState: state.commonReducer,
  };
};

const mapDispatchToProps = {
  //noInternet,
  setLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
