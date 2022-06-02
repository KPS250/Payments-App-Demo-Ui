import React, {useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import {PaymentMode} from '../../../utils/Constants';
import {Strings} from '../../../values/Strings';
import AppBar from '../../commons/components/AppBar';
import Button from '../../commons/components/Button';
import SafeArea from '../../commons/components/SafeArea';
import {userTransactionStyles as styles} from '../styles/userTransactionStyles';

type PropTypes = {
  style?: StyleMedia;
  user: object;
  amount: number;
  mode: number;
  navigation: any;
};

const UserTransaction = (props: PropTypes) => {
  const {style = {}, route, navigation} = props;
  const {user, amount, mode} = route.params;
  return (
    <SafeArea>
      <AppBar back title={Strings.newRequest} />
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../../assets/images/image_bg.png')}>
          <Image style={styles.userImage} source={user.image} />
        </ImageBackground>
        <Text style={styles.userName}>{user.fullName}</Text>
        <Text style={styles.hint}>
          {mode == PaymentMode.SENDING
            ? Strings.sendingMoney
            : Strings.requestingMoney}
        </Text>
        <Text style={styles.amount}>{`${Strings.rupeeSymbol} ${amount}`}</Text>
        <Button
          label={Strings.sendMoney}
          style={styles.okButton}
          labelStyle={styles.okButtonLabel}
        />
        <Button
          label={Strings.cancel}
          style={styles.cancelButton}
          labelStyle={styles.cancelButtonLabel}
          onPress={navigation.goBack}
        />
      </View>
    </SafeArea>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserTransaction);
