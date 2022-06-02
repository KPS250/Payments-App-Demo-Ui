import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {PaymentStatus} from '../../../utils/Constants';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
import {Icons} from '../../../values/Icons';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  status: number;
};

const TransactionChip = (props: PropTypes) => {
  const {style = {}, status} = props;
  let transactionObject = PaymentStatus.presentation[status];
  //console.log('transactionObject', transactionObject);
  return (
    <View
      style={[
        styles.container,
        style,
        {backgroundColor: Colors[transactionObject.color]},
      ]}>
      <Image style={styles.icon} source={transactionObject.icon} />
      <Text style={styles.label}>{transactionObject.label}</Text>
    </View>
  );
};

export default TransactionChip;

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingVertical: '6rem',
    paddingHorizontal: '8rem',
    borderRadius: '20rem',
    overflow: 'hidden',
    alignSelf: 'baseline',
    android: {},
  },
  label: {
    fontFamily: Fonts.inter,
    fontWeight: '400',
    fontSize: '12rem',
    lineHeight: '18rem',
    color: Colors.white,
    marginLeft: '3rem',
  },
  icon: {
    width: '16rem',
    height: '16rem',
    marginRight: '5rem',
  },
});
