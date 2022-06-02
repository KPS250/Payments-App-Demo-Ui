import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

export const transactionHistoryStyles = EStyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    paddingHorizontal: '16rem',
    marginBottom: '32rem',
    justifyContent: 'space-between',
  },
  listHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listHeaderTitle: {
    fontFamily: Fonts.inter,
    fontWeight: '700',
    fontSize: '16rem',
    lineHeight: '24rem',
    color: Colors.white,
  },
  sortBy: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '14rem',
    color: Colors.purple,
  },
  sortByValue: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '14rem',
    color: Colors.white,
  },
  arrowDown: {
    width: '12rem',
    height: '7rem',
    marginLeft: '4rem',
  },
  listFooter: {
    height: '80rem',
  },
  list: {
    flex: 1,
    height: '100%',
    flexGrow: 1,
    //alignSelf: 'baseline',
    //justifyContent: 'center',
  },
});
