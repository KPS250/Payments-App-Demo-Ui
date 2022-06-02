import React, {useState} from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {PaymentStatus} from '../../../utils/Constants';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
import {Strings} from '../../../values/Strings';
import Avatar from '../../commons/components/Avatar';
import TransactionChip from '../../commons/components/TransactionChip';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  transaction: any;
  index: number;
};

const TransactionItem = (props: PropTypes) => {
  const {style = {}, transaction, index} = props;
  console.log('transaction', transaction);
  return (
    <View style={[styles.container, index % 2 == 0 ? styles.highlight : {}]}>
      <View style={styles.leftContainer}>
        <Avatar image={transaction.user.image} />
        <View style={styles.innerLeftContainer}>
          <Text style={styles.name}>{transaction.user.fullName}</Text>
          <TransactionChip status={transaction.status} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text
          style={[
            styles.amount,
            {
              color:
                Colors[PaymentStatus.presentation[transaction.status].color],
            },
          ]}>{`${Strings.rupeeSymbol} ${transaction.amount}`}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '16rem',
    alignItems: 'center',
    padding: '16rem',
  },
  highlight: {
    backgroundColor: Colors.purpleLight,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {},
  innerLeftContainer: {
    marginLeft: '16rem',
  },
  name: {
    fontFamily: Fonts.inter,
    fontSize: '16rem',
    fontWeight: '700',
    lineHeight: '24rem',
    color: Colors.purpleName,
    marginBottom: '6rem',
  },
  amount: {
    fontFamily: Fonts.inter,
    fontSize: '16rem',
    fontWeight: '700',
    lineHeight: '24rem',
    color: Colors.purple,
  },
});
