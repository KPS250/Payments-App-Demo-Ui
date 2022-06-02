import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {PaymentMode} from '../../../utils/Constants';
import {getColorScheme} from '../../../values/Colors';
import {Strings} from '../../../values/Strings';
import MoneyInput from '../../commons/components/MoneyInput';
import SwipeModalView from '../../commons/components/SwipeModalView';
const Colors = getColorScheme();
type PropTypes = {
  style?: StyleMedia;
  visible: boolean;
  dismiss: Function;
  onSubmit: Function;
  mode: number;
};

const MoneyInputModal = (props: PropTypes) => {
  const {
    style = {},
    visible,
    dismiss,
    onSubmit,
    mode = PaymentMode.ADD_MONEY,
  } = props;
  return (
    <SwipeModalView visible={visible} dismiss={dismiss}>
      <View style={styles.container}>
        <Pressable style={styles.header} onPress={dismiss}>
          <View style={styles.closeContainer}>
            <Image
              style={styles.closeIcon}
              source={require('../../../assets/icons/ic_close.png')}
            />
          </View>
        </Pressable>
        <MoneyInput onSubmit={onSubmit} mode={mode} />
      </View>
    </SwipeModalView>
  );
};

export default MoneyInputModal;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    height: '120rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeContainer: {
    width: '40rem',
    height: '40rem',
    borderRadius: '20rem',
    backgroundColor: Colors.white,
    overFlow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: '20rem',
    height: '20rem',
  },
});
