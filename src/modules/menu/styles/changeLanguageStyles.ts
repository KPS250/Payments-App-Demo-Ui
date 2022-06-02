import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

export const changeLanguageStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkGreyMedium,
  },
  aapBar: {
    backgroundColor: Colors.darkGreyMedium,
  },
  separator: {
    height: '1rem',
    backgroundColor: Colors.white10,
    marginHorizontal: '20rem',
  },
  footer: {
    height: '80rem',
  },
  listContainer: {
    paddingTop: '104rem',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '20rem',
    paddingVertical: '20rem',
  },
  language: {
    fontFamily: Fonts.regular,
    fontSize: '14rem',
    color: Colors.white,
  },
});
