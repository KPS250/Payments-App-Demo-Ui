import React, {cloneElement} from 'react';
import {View, Text, Pressable} from 'react-native';
import {getColorScheme} from '../../../values/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Icons} from '../../../values/Icons';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../values/Fonts';

type PropTypes = {
  title?: string;
  back?: boolean;
  drawer?: boolean;
  rightComponent?: React.ReactNode;
  style?: StyleMedia;
};
const Colors = getColorScheme();
const ripple = {
  color: Colors.shimmer,
  radius: 10,
};

const AppBar = (props: PropTypes) => {
  const navigation = useNavigation();
  const {
    title = '',
    back = false,
    drawer = false,
    style = {},
    rightComponent,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        {drawer && (
          <Pressable
            style={styles.drawer}
            onPress={navigation.openDrawer}
            android_ripple={ripple}>
            {Icons.drawer}
          </Pressable>
        )}
        {back && (
          <Pressable
            style={styles.backContainer}
            onPress={() => navigation.goBack()}
            android_ripple={ripple}>
            {Icons.arrow_back}
          </Pressable>
        )}
        <View
          style={[
            styles.titleContainer,
            drawer || back ? {} : styles.titleLeftPadding,
          ]}>
          <Text style={back ? styles.backText : styles.title}>{title}</Text>
        </View>
      </View>
      {rightComponent && rightComponent()}
    </View>
  );
};

export default AppBar;

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '56rem',
    width: '100%',
    zIndex: 1,
    paddingTop: '24rem',
    paddingRight: '16rem',
    backgroundColor: Colors.bluish,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.inter,
    fontWeight: '700',
    color: Colors.white,
    fontSize: '20rem',
    lineHeight: '20rem',
  },
  backText: {
    fontFamily: Fonts.inter,
    fontWeight: '700',
    color: Colors.white,
    fontSize: '14rem',
    lineHeight: '26rem',
  },
  back: {
    width: '26rem',
    height: '26rem',
  },
  backContainer: {
    paddingHorizontal: '16rem',
    paddingVertical: '16rem',
  },
  titleLeftPadding: {
    marginLeft: '24rem',
  },
  drawer: {
    width: '48rem',
    height: '48rem',
    borderRadius: '24rem',
    backgroundColor: Colors.blueNavy,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '16rem',
  },
  center: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
