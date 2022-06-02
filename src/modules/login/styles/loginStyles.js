import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

export const loginStyles = EStyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  aapBar: {
    backgroundColor: Colors.white,
  },
  input: {
    paddingVertical: '10rem',
    marginBottom: '10rem',
  },
  imageContainer: {
    backgroundColor: Colors.white,
    alignItems: 'flex-end',
    paddingVertical: '20rem',
    borderBottomLeftRadius: '20rem',
    borderBottomRightRadius: '20rem',
  },
  bikeImage: {
    width: '251rem',
    height: '222rem',
  },
  formContainer: {
    paddingVertical: '16rem',
    paddingHorizontal: '16rem',
  },
  bottomContainer: {
    backgroundColor: Colors.darkGrey,
    paddingBottom: '16rem',
  },
  batteryIndicator: {
    position: 'absolute',
    bottom: 0,
  },
  buttonLabel: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: '14rem',
  },
  forgotLabel: {
    fontFamily: Fonts.regular,
    fontSize: '12rem',
    color: Colors.yellow,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
  },
  error: {
    fontFamily: Fonts.regular,
    fontSize: '10rem',
    color: Colors.watermelon,
  },
});
