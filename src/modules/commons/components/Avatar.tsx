import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  image: any;
  size?: number;
  onPress?: Function;
  borderColor?: string;
};

const Avatar = (props: PropTypes) => {
  const {style = {}, image, size = 48, borderColor, onPress = () => {}} = props;
  return (
    <Pressable
      onPress={onPress}
      style={[
        borderColor
          ? [styles(size).borderContainer, {borderColor: borderColor}]
          : styles(size).container,
      ]}>
      <Image style={[styles(size).image]} source={image} />
    </Pressable>
  );
};

export default Avatar;

const styles = (size: number) =>
  EStyleSheet.create({
    container: {
      width: `${size}rem`,
      height: `${size}rem`,
      borderRadius: `${size / 2}rem`,
    },
    borderContainer: {
      borderWidth: '2rem',
      borderColor: Colors.white,
      width: `${size + 4}rem`,
      height: `${size + 4}rem`,
      borderRadius: `${(size + 4) / 2}rem`,
    },
    image: {
      backgroundColor: Colors.shimmer,
      width: `${size}rem`,
      height: `${size}rem`,
      borderRadius: `${size / 2}rem`,
      resizeMode: 'stretch',
    },
  });
