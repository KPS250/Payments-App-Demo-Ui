import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../values/Fonts';
import {getColorScheme} from '../../../values/Colors';
import {Platform} from 'react-native';
const Colors = getColorScheme();

export const splashStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  status: {
    fontSize: '14rem',
    color: Colors.white,
    fontFamily: Fonts.inter,
    alignSelf: 'center',
    opacity: 0.7,
    lineHeight: '21rem',
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    // backgroundColor: Colors.blue,
    bottom: '16rem',
    paddingBottom: Platform.OS === 'android' ? '22rem' : '10rem',
  },
});
