import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

export const userTransactionStyles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bluish,
  },
  imageBackground: {
    width: '200rem',
    height: '200rem',
    resizeMode: 'contain',
    marginBottom: '20rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: '100rem',
    height: '100rem',
    resizeMode: 'contain',
    borderRadius: '50rem',
  },
  userName: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '24rem',
    lineHeight: '32rem',
    textAlign: 'center',
    color: Colors.white,
    marginBottom: '20rem',
  },
  hint: {
    fontFamily: Fonts.inter,
    fontWeight: '400',
    fontSize: '14rem',
    lineHeight: '21rem',
    textAlign: 'center',
    color: Colors.white,
    marginBottom: '20rem',
  },
  amount: {
    fontFamily: Fonts.inter,
    fontWeight: '700',
    fontSize: '40rem',
    lineHeight: '48rem',
    textAlign: 'center',
    color: Colors.white,
    marginBottom: '40rem',
  },
  okButton: {
    backgroundColor: Colors.pink,
    width: '173rem',
    height: '60rem',
    borderRadius: '10rem',
    marginBottom: '20rem',
    alignSelf: 'center',
  },
  okButtonLabel: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '16rem',
    lineHeight: '28rem',
    textAlign: 'center',
    color: Colors.white,
  },
  cancelButton: {
    backgroundColor: Colors.transparent,
    width: '173rem',
    height: '60rem',
    borderRadius: '10rem',
    borderWidth: '1rem',
    borderColor: Colors.purple,
    alignSelf: 'center',
  },
  cancelButtonLabel: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '16rem',
    lineHeight: '28rem',
    textAlign: 'center',
    color: Colors.purple,
  },
});
