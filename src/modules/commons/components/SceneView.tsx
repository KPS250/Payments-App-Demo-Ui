import React, {ReactNode} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../values/Strings';
import Button from './Button';
import SafeArea from './SafeArea';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

type PropTypes = {
  title?: string;
  titleStyle?: string;
  desc?: string;
  scrollDesc?: boolean;
  image?: string;
  imageStyle?: StyleMedia;
  buttonStyle?: StyleMedia;
  buttonLabel?: string;
  buttonLabelStyle?: StyleMedia;
  onPress?: Function;
  children?: ReactNode;
  descStyle?: StyleMedia;
  style?: StyleMedia;
  svgImage?: any;
};

const SceneView = (props: PropTypes) => {
  const {
    title,
    titleStyle,
    desc,
    scrollDesc,
    image,
    imageStyle,
    buttonStyle,
    buttonLabel,
    buttonLabelStyle,
    onPress,
    children,
    descStyle,
    style,
    svgImage,
  } = props;
  return (
    <View style={[styles.container]}>
      {svgImage}
      {image && !svgImage && (
        <Image source={image} style={[styles.imageStyle, imageStyle]} />
      )}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {desc && <Text style={styles.desc}>{desc}</Text>}
      {onPress && (
        <Button
          label={buttonLabel}
          labelStyle={styles.buttonLabelStyle}
          onPress={onPress}
          style={styles.buttonStyle}
          rippleColor={Colors.white}
        />
      )}
    </View>
  );
};

export default SceneView;

const styles = EStyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: '50rem',
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: '20rem',
    color: Colors.white,
    paddingHorizontal: '31rem',
    marginBottom: '10rem',
    marginTop: '64rem',
  },
  desc: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: '14rem',
    color: Colors.white,
    paddingHorizontal: '40rem',
  },
  buttonStyle: {
    width: '186rem',
    height: '45rem',
    marginTop: '30rem',
    marginBottom: '30rem',
    paddingVertical: '10rem',
    backgroundColor: Colors.primary,
  },
  buttonLabelStyle: {
    fontFamily: Fonts.bold,
    fontSize: '14rem',
    color: Colors.black,
  },
});
