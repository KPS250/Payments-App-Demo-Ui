import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {loginStyles as styles} from '../styles/loginStyles';
import {connect} from 'react-redux';
import HybridInput from '../../commons/components/HybridInput';
import {Strings} from '../../../values/Strings';
import {getColorScheme} from '../../../values/Colors';
import AppBar from '../../commons/components/AppBar';
import MainHeading from '../../commons/components/MainHeading';
import Button from '../../commons/components/Button';
import BottomFloatContainer from '../../commons/components/BottomFloatContainer';
import {isValidPhone} from '../../../utils/Validations';
import {Schema} from '../../../values/Schema';
import {Screens} from '../../../utils/Constants';
import {resetNavigationStack} from '../../../utils/Utils';
const Colors = getColorScheme();

const PhoneNumber = (props: any) => {
  const [mobileNo, setMobileNo] = useState<string>('');
  const {navigation} = props;

  return (
    <SafeArea statusBarColor={Colors.darkGrey} bottomBarColor={Colors.darkGrey}>
      <AppBar back style={styles.aapBar} />
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <MainHeading
            title={Strings.login}
            subTitle={Strings.mobileLoginTitle}
          />
          <HybridInput
            style={styles.input}
            value={mobileNo}
            label={Strings.mobileNumber}
            onChangeText={(text: string) => setMobileNo(text)}
            error={mobileNo.trim() === '' ? false : !isValidPhone(mobileNo)}
            keyboardType={'phone-pad'}
            testID={Schema.mobileNumber}
          />
        </View>
      </ScrollView>
      <BottomFloatContainer>
        <Button
          label={Strings.getOtp}
          labelStyle={styles.buttonLabel}
          disabled={!isValidPhone(mobileNo)}
          onPress={() => resetNavigationStack(navigation, Screens.OTP)}
          testID={Schema.mobileGetOTPBTN}
        />
      </BottomFloatContainer>
    </SafeArea>
  );
};

const mapStateToProps = (state: any) => {
  return {
    commonState: state.commonReducer,
  };
};

const mapDispatchToProps = {
  //getOTP,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumber);
