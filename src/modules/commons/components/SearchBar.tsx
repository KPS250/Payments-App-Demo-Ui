import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TextInput} from 'react-native-gesture-handler';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
import {Icons} from '../../../values/Icons';
import {Strings} from '../../../values/Strings';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  value: string;
  onChange: Function;
};

const SearchBar = (props: PropTypes) => {
  const {style = {}, value, onChange} = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={Strings.searchUser}
        style={styles.input}
        value={value}
        onChangeText={text => onChange(text)}
      />
    </View>
  );
};

export default SearchBar;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    borderWidth: '1rem',
    borderColor: Colors.green,
    borderRadius: '8rem',
    justifyContent: 'center',
    paddingHorizontal: '16rem',
    height: '48rem',
    marginHorizontal: '16rem',
  },
  input: {
    fontFamily: Fonts.inter,
    fontWeight: '400',
    fontSize: '14rem',
    margin: 0,
    padding: 0,
    color: Colors.white,
  },
});
