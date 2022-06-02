import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

export const changePasswordStyles = EStyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.darkGreyMedium,
  },
  aapBar: {
    backgroundColor: Colors.darkGreyMedium,
  },
  input: {
    paddingVertical: '10rem',
    marginBottom: '10rem',
  },
  imageContainer: {
    backgroundColor: Colors.cool_grey,
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
  buttonStyle: {
    position: 'absolute',
    bottom: '20rem',
  },
  buttonLabel: {
    fontFamily: Fonts.bold,
    fontSize: '14rem',
  },
  forgotLabel: {
    fontFamily: Fonts.regular,
    fontSize: '12rem',
    color: Colors.yellow,
  },
  forgotContainer: {
    alignItems: 'flex-end',
  },
  error: {
    fontFamily: Fonts.regular,
    fontSize: '10rem',
    color: Colors.watermelon,
  },
  appBarTitle: {
    fontFamily: Fonts.extraBold,
    fontSize: '16rem',
    color: Colors.pissYellow,
  },
  appBarSubTitle: {
    fontFamily: Fonts.regular,
    fontSize: '10rem',
    color: Colors.white87,
    letterSpacing: '0.17rem',
  },
});
