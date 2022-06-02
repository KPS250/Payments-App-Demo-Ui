import React from 'react';
import {Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getTestIdProps} from '../../../utils/Utils';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();
type PropTypes = {
  label?: string;
  labelStyle?: StyleMedia;
  onPress?: Function;
  disabled?: boolean;
  style?: StyleMedia;
  icon?: any;
  color?: string;
  rippleColor?: string;
  testID?: string;
};

const Button = (props: PropTypes) => {
  const {
    label,
    labelStyle = {},
    onPress,
    disabled = false,
    style = {},
    icon,
    color = Colors.primary,
    rippleColor = Colors.shimmer,
    testID = null,
  } = props;
  return (
    <Pressable
      android_ripple={{
        color: rippleColor,
        radius: 20,
      }}
      {...getTestIdProps(testID)}
      onPress={disabled ? () => {} : onPress}
      style={[
        styles.container,
        {backgroundColor: color},
        disabled ? styles.disable : {},
        styles.textCenter,
        style,
      ]}>
      {icon}
      <Text
        style={[
          styles.label,
          {color: disabled ? Colors.white : Colors.primary},
          labelStyle,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = EStyleSheet.create({
  container: {
    height: '50rem',
    paddingHorizontal: '23rem',
    borderRadius: '10rem',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    android: {
      alignSelf: 'baseline',
    },
  },
  label: {
    fontFamily: Fonts.inter,
    fontSize: '16rem',
    fontWeight: '500',
    lineHeight: '30rem',
    color: Colors.white,
  },
  disable: {
    backgroundColor: Colors.backdrop,
  },
  textCenter: {
    justifyContent: 'center',
  },
});
