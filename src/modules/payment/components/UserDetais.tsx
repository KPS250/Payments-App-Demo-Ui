import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
import {Strings} from '../../../values/Strings';
import Button from '../../commons/components/Button';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  user: object;
  onPress: Function;
};

const UserDetails = (props: PropTypes) => {
  const {style = {}, user, onPress} = props;
  return (
    <View style={styles.container}>
      <Image source={user.image} style={styles.userImage} />
      <Text style={styles.userName}>{user.fullName}</Text>
      <Text style={styles.phone}>{`(${user.code})-${user.phone}`}</Text>
      <Button
        label={Strings.continue}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        onPress={onPress}
      />
    </View>
  );
};

export default UserDetails;

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '147rem',
    height: '60rem',
    backgroundColor: Colors.pink,
  },
  buttonLabel: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '16rem',
    lineHeight: '28rem',
    color: Colors.white,
  },
  userName: {
    fontFamily: Fonts.inter,
    fontWeight: '700',
    fontSize: '20rem',
    lineHeight: '20rem',
    color: Colors.white,
    marginBottom: '16rem',
  },
  phone: {
    fontFamily: Fonts.inter,
    fontWeight: '400',
    fontSize: '14rem',
    color: Colors.white,
    marginBottom: '32rem',
  },
  userImage: {
    width: '72rem',
    height: '72rem',
    borderRadius: '36rem',
    marginBottom: '16rem',
  },
});
