import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../values/Fonts';
import {Icons} from '../../../values/Icons';
import {connect} from 'react-redux';
import SafeArea from '../../commons/components/SafeArea';
import {transactionHistoryStyles as styles} from '../styles/transactionHistoryStyles';
import {getColorScheme} from '../../../values/Colors';
import {transactionHistory} from '../../../data/mockData';
import TransactionItem from './TransactionItem';
import {Strings} from '../../../values/Strings';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
};

const TransactionHistory = (props: PropTypes) => {
  const {style = {}} = props;

  const renderHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderTitle}>{Strings.allTransactions}</Text>
        <Pressable style={styles.listHeaderRight} onPress={() => {}}>
          <Text style={styles.sortBy}>
            {Strings.sortBy + '  '}
            <Text style={styles.sortByValue}>{Strings.recent}</Text>
          </Text>
          <Image
            style={styles.arrowDown}
            source={require('../../../assets/icons/ic_arrow_down.png')}
          />
        </Pressable>
      </View>
    );
  };

  const renderFooter = () => {
    return <View style={styles.listFooter} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={transactionHistory}
        renderItem={({item, index}) => (
          <TransactionItem transaction={item} index={index} />
        )}
        ListHeaderComponent={renderHeader}
        //ListFooterComponent={renderFooter}
        keyExtractor={(item: object, index: number) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    //errorState: state.commonReducer,
  };
};

const mapDispatchToProps = {
  //noInternet,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory);
