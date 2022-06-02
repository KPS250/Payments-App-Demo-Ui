import React, {useState, useRef, useMemo, useEffect} from 'react';
import {View, Keyboard} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../values/Fonts';
import {Icons} from '../../../values/Icons';
import BottomSheet from '@gorhom/bottom-sheet';
import {getColorScheme} from '../../../values/Colors';
import UserDetails from './UserDetais';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  user: object;
  onSubmit: Function;
  dismiss: Function;
};

const UserDetailsModal = (props: PropTypes) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['1%', '50%'], []);
  const {style = {}, user, onSubmit, dismiss} = props;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => dismiss(),
    );
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const renderHandle = () => {
    return (
      <View style={styles.handleStyle}>
        <View style={styles.handleIndicatorStyle} />
      </View>
    );
  };

  const onBottomSheetChange = (index: number) => {
    if (index === 0) {
      dismiss();
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={styles.bottomsheet}
      handleStyle={styles.handleStyleBg}
      handleComponent={renderHandle}
      onChange={onBottomSheetChange}>
      <View style={styles.bottomsheet}>
        <UserDetails user={user} onPress={onSubmit} />
      </View>
    </BottomSheet>
  );
};

export default UserDetailsModal;

const styles = EStyleSheet.create({
  container: {},
  bottomsheet: {
    backgroundColor: Colors.bluishOne,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  handleStyle: {
    height: '47rem',
    justifyContent: 'center',
    backgroundColor: Colors.bluishOne,
    //borderWidth: 0,
    borderTopLeftRadius: '40rem',
    borderTopRightRadius: '40rem',
  },
  handleIndicatorStyle: {
    width: '64rem',
    height: '7rem',
    borderRadius: '10rem',
    alignSelf: 'center',
    backgroundColor: Colors.indicator,
  },
  handleStyleBg: {
    backgroundColor: Colors.transparent,
  },
});
