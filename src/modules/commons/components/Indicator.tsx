import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';

const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  active?: boolean;
  index?: number;
};

const Indicator = (props: PropTypes) => {
  const {style = {}, active = false, index} = props;
  return (
    <View
      key={index}
      style={[
        styles.container,
        style,
        active ? styles.active : styles.inactive,
      ]}
    />
  );
};

export default Indicator;

const styles = EStyleSheet.create({
  container: {
    height: '8rem',
    marginRight: '4rem',
    borderRadius: '4rem',
  },
  active: {
    width: '32rem',
    backgroundColor: Colors.yellowOne,
  },
  inactive: {
    width: '8rem',
    backgroundColor: Colors.yellowTwo,
  },
});
