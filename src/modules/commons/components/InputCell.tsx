import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {InputType} from '../../../utils/Constants';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  onPress: Function;
  item?: any;
};

const InputCell = (props: PropTypes) => {
  const {style = {}, item, onPress} = props;
  console.log('label', label);
  const {label, icon, type} = item;
  return (
    <Pressable style={[styles.container]} onPress={() => onPress(item)}>
      {type === InputType.NUMBER ? (
        <Text style={styles.label}>{label.toString()}</Text>
      ) : (
        icon
      )}
    </Pressable>
  );
};

export default InputCell;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '22rem',
    justifyContent: 'center',
    alignItems: 'center',
    //padding: '10rem',
  },
  label: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '24rem',
    lineHeight: '24rem',
    color: Colors.white,
  },
});
