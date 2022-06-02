import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {splashData} from '../../../data/splashData';
import {Screens} from '../../../utils/Constants';
import {resetNavigationStack} from '../../../utils/Utils';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
import {Strings} from '../../../values/Strings';
import Button from '../../commons/components/Button';
import Indicator from '../../commons/components/Indicator';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  navigation: any;
};

const IntroScreen = (props: PropTypes) => {
  const [sliderCount, setSliderCount] = useState<number>(0);
  const {style = {}, navigation} = props;
  const screenData = splashData[sliderCount];

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    let timer = setTimeout(() => {
      setSliderCount((sliderCount + 1) % splashData.length);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [sliderCount]);

  const navigateToHome = () => {
    resetNavigationStack(navigation, Screens.HOME);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.bluish} />
      <Image style={styles.image} source={screenData.background} />
      <View
        style={[
          styles.introBottomContainer,
          {backgroundColor: screenData.backgroundColor},
        ]}>
        <View style={styles.indicatorContainer}>
          {splashData.map((item, index) => {
            return <Indicator active={sliderCount === index} index={index} />;
          })}
        </View>

        <Text style={[styles.title, {color: screenData.textColor}]}>
          {screenData.title}
        </Text>
        <Text style={[styles.desc, {color: screenData.textColor}]}>
          {screenData.desc}
        </Text>
        <Button
          style={{backgroundColor: screenData.buttonColor}}
          label={Strings.startBanking}
          labelStyle={{color: screenData.buttonTextColor}}
          onPress={navigateToHome}
        />
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  introBottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '323rem',
    height: '224rem',
    paddingLeft: '32rem',
    paddingRight: '50rem',
    borderTopRightRadius: '70rem',
    zIndex: 99,
    backgroundColor: Colors.white,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: '32rem',
  },
  title: {
    fontFamily: Fonts.inter,
    fontSize: '18rem',
    fontWeight: '700',
    lineHeight: '30rem',
    color: Colors.white,
    marginTop: '16rem',
  },
  desc: {
    fontFamily: Fonts.inter,
    fontSize: '13rem',
    fontWeight: '400',
    lineHeight: '24rem',
    color: Colors.white,
    marginTop: '6rem',
    marginBottom: '14rem',
  },
});
