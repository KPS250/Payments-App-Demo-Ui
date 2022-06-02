import React, {useState, useRef, useMemo} from 'react';
import {View, Text, Modal} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import {getColorScheme} from '../../../values/Colors';
import {Strings} from '../../../values/Strings';
import AppBar from '../../commons/components/AppBar';
import Button from '../../commons/components/Button';
import SwipeModalView from '../../commons/components/SwipeModalView';
import SafeArea from '../../commons/components/SafeArea';
import {homestyles as styles} from '../styles/homeStyles';
import TransactionHistory from './TransactionHistory';
import MoneyInput from '../../commons/components/MoneyInput';
import {NavigationRouteContext} from '@react-navigation/native';
import {PaymentMode, Screens} from '../../../utils/Constants';
import {users} from '../../../data/mockData';
import BottomSheet from '@gorhom/bottom-sheet';
import MoneyInputModal from '../../payment/components/MoneyInputModal';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  navigation: any;
};

const HomeScreen = (props: PropTypes) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['60%', '95%'], []);
  const [moneyInput, setMoneyInput] = useState<boolean>(false);
  const {style = {}, navigation} = props;

  const showMoneyModal = () => {
    setMoneyInput(true);
  };

  const hideMoneyModal = () => {
    setMoneyInput(false);
  };

  const onMoneyInput = () => {
    setMoneyInput(false);
  };

  const renderHandle = () => {
    return (
      <View style={styles.handleStyle}>
        <View style={styles.handleIndicatorStyle} />
      </View>
    );
  };

  const addMoneyButton = () => {
    return (
      <Button
        label={Strings.addMoney}
        style={styles.addMoneyButton}
        labelStyle={styles.addMoneyButtonLabel}
        onPress={showMoneyModal}
      />
    );
  };

  const requestMoney = () => {
    navigation.navigate(Screens.USER_TRANSACTION, {
      user: users[0],
      amount: 2000,
      mode: PaymentMode.REQUESTING,
    });
  };

  const sendMoneyMoney = () => {
    navigation.navigate(Screens.SEARCH_USER);
  };

  return (
    <SafeArea>
      <AppBar drawer title={'Hello Kiran,'} rightComponent={addMoneyButton} />
      <View style={styles.container}>
        <View style={styles.balanceContainer}>
          <Text style={styles.currentBalance}>{Strings.currentBalance}</Text>
          <Text
            style={
              styles.currentbalanceAmount
            }>{`${Strings.rupeeSymbol} 20,000`}</Text>
          <View style={styles.sendRequestMoneyContainer}>
            <Button
              label={Strings.requestMoney}
              style={styles.sendRequestMoneyButton}
              labelStyle={styles.sendRequestMoneyButtonLabel}
              onPress={requestMoney}
            />
            <Button
              label={Strings.sendMoney}
              style={styles.sendRequestMoneyButton}
              labelStyle={styles.sendRequestMoneyButtonLabel}
              onPress={sendMoneyMoney}
            />
          </View>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={styles.bottomSheetBg}
          //handleStyle={styles.handleStyleBg}
          handleComponent={renderHandle}>
          <View style={styles.bottomsheet}>
            <TransactionHistory />
          </View>
        </BottomSheet>

        <MoneyInputModal
          visible={moneyInput}
          onSubmit={onMoneyInput}
          dismiss={hideMoneyModal}
          mode={PaymentMode.ADD}
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = state => {
  return {
    //errorState: state.commonReducer,
  };
};

const mapDispatchToProps = {
  //noInternet,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
