import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts} from '../../../values/Fonts';
import {getColorScheme} from '../../../values/Colors';
const Colors = getColorScheme();

export const menuStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  label: {
    fontFamily: Fonts.inter,
    fontSize: '16rem',
    color: Colors.white,
    marginVertical: '13rem',
  },
  version: {
    fontFamily: Fonts.inter,
    fontSize: '12rem',
    color: Colors.white,
    marginHorizontal: '30rem',
    paddingTop: '26rem',
    paddingBottom: Platform.OS === 'android' ? '26rem' : '10rem',
    backgroundColor: Colors.blue,
  },
  logo: {
    width: '112rem',
    height: '16rem',
    marginVertical: '40rem',
    marginLeft: '30rem',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  close: {
    paddingVertical: '40rem',
    paddingHorizontal: '30rem',
  },
  hr: {
    height: '1rem',
    backgroundColor: Colors.blue,
    marginHorizontal: '30rem',
  },
  body: {
    marginHorizontal: '30rem',
    marginTop: '27rem',
  }
});
