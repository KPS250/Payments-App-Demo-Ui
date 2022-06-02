import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Pressable} from 'react-native';
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
import {isValidOtp} from '../../../utils/Validations';
import {Schema} from '../../../values/Schema';
import {Screens} from '../../../utils/Constants';
import {resetNavigationStack} from '../../../utils/Utils';

const Colors = getColorScheme();

const VerifyOTP = (props: any) => {
  const [otp, setOtp] = useState<string>('');
  const [count, setCounter] = useState<number>(30);

  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCounter(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  const {navigation, route} = props;

  const userMobileNo = route.params?.mobileNo ? route.params.mobileNo : '';

  return (
    <SafeArea statusBarColor={Colors.black} bottomBarColor={Colors.black}>
      <AppBar back style={styles.aapBar} />
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <MainHeading
            title={Strings.enterOtp}
            subTitle={`${Strings.otpSubTitle} ${userMobileNo}`}
          />
          <HybridInput
            style={styles.input}
            value={otp}
            label={Strings.otp}
            onChangeText={(text: string) => setOtp(text)}
            error={otp.trim() === '' ? false : !isValidOtp(otp)}
            keyboardType={'numeric'}
            maxLength={6}
            testID={Schema.emailOTP}
          />
          <View style={{alignItems: count === 0 ? 'flex-end' : 'center'}}>
            {count === 0 ? (
              <Pressable
                android_ripple={{
                  color: Colors.shimmer,
                  radius: 10,
                }}
                onPress={() =>
                  onResendPress(
                    setCounter,
                    userMobileNo,
                    navigation,
                    props.getOTP,
                  )
                }>
                <Text style={styles.forgotLabel}>{Strings.resendCode}</Text>
              </Pressable>
            ) : (
              <Text style={[styles.forgotLabel, {color: Colors.white}]}>
                {Strings.resendCodeIn}
                <Text style={styles.forgotLabel}>
                  {count < 10 ? `00:0${count}` : `00:${count}`}
                </Text>
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <BottomFloatContainer>
        <Button
          label={Strings.verifyNow}
          labelStyle={styles.buttonLabel}
          disabled={!isValidOtp(otp)}
          onPress={() => resetNavigationStack(navigation, Screens.HOME)}
          testID={Schema.verifyNow}
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
  //login,
  //getOTP,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP);

const onResendPress = (
  setCounter: Function,
  mobileNo: string,
  navigation: any,
  getOTP: any,
) => {
  getOTP(mobileNo, navigation, true);
  setCounter(30);
};
