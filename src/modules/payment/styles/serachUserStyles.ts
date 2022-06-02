import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

export const searchUserStyles = EStyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bluish,
    paddingTop: '56rem',
  },
  circles: {
    //paddingTop: '20rem',
    width: '360rem',
    height: '360rem',
    resizeMode: 'contain',
    position: 'absolute',
    top: '56rem',
  },

  userName: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '24rem',
    lineHeight: '32rem',
    textAlign: 'center',
    color: Colors.white,
    marginBottom: '24rem',
  },
  bottomsheet: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bluishOne,
  },
});
