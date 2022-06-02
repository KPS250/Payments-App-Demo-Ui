import EStyleSheet from 'react-native-extended-stylesheet';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
const Colors = getColorScheme();

export const homestyles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  addMoneyButton: {
    backgroundColor: Colors.blueNavy,
    paddingVertical: '4rem',
    paddingHorizontal: '8rem',
  },
  addMoneyButtonLabel: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '14rem',
    lineHeight: '24rem',
    color: Colors.blueSky,
  },
  balanceContainer: {
    marginTop: '48rem',
    paddingHorizontal: '16rem',
    marginBottom: '32rem',
  },
  currentBalance: {
    fontFamily: Fonts.inter,
    fontWeight: '400',
    fontSize: '12rem',
    lineHeight: '12rem',
    color: Colors.white,
    marginBottom: '16rem',
  },
  currentbalanceAmount: {
    fontFamily: Fonts.inter,
    fontWeight: '700',
    fontSize: '40rem',
    lineHeight: '48rem',
    color: Colors.white,
  },
  sendRequestMoneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '40rem',
    //marginHorizontal: '16rem',
    // alignItems: 'center',
    //alignSelf: 'baseline',
  },
  sendRequestMoneyButton: {
    width: '158rem',
    height: '60rem',
    backgroundColor: Colors.transparent,
    borderWidth: '1rem',
    borderColor: Colors.purple,
    borderRadius: '10rem',
    paddingHorizontal: '4rem',
  },
  sendRequestMoneyButtonLabel: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '16rem',
    lineHeight: '28rem',
    color: Colors.purple,
  },
  bottomsheet: {
    flex: 1,
  },
  bottomSheetBg: {
    backgroundColor: Colors.bluishOne,
  },
  handleStyle: {
    height: '47rem',
    justifyContent: 'center',
    backgroundColor: Colors.bluishOne,
    //borderWidth: 0,
    borderTopLeftRadius: '40rem',
    borderTopRightRadius: '40rem',
  },
  handleIndicatorStyle: {
    width: '64rem',
    height: '7rem',
    borderRadius: '10rem',
    alignSelf: 'center',
    backgroundColor: Colors.indicator,
  },
  handleStyleBg: {
    backgroundColor: Colors.transparent,
  },
});
