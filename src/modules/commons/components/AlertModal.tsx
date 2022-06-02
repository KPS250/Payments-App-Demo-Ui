import React from 'react';
import {View, Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getColorScheme } from '../../../values/Colors';
import {Strings} from '../../../values/Strings';
import ModalView from './ModalView';
import RoundedButton from './RoundedButton';

type PropsType = {
  visible: boolean;
  onPress: Function;
  dismiss: Function;
  message: string;
  leftButtonLabel: string;
  rightButtonLabel: string;
};
const Colors = getColorScheme();

const AlertModal = (props: PropsType) => {
  let {
    visible = false,
    message = '',
    onPress = () => {},
    dismiss = () => {},
    leftButtonLabel = null,
    rightButtonLabel = null,
  } = props;

  return (
    <ModalView
      visible={visible}
      dismiss={() => dismiss(false)}
      style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.row}>
        {
          <Pressable style={styles.bottomButton}>
            <Text>{leftButtonLabel || Strings.cancel}</Text>
          </Pressable>
        }
        <RoundedButton
          onPress={() => onPress(false)}
          label={rightButtonLabel || Strings.ok}
          style={styles.bottomButton}
        />
      </View>
    </ModalView>
  );
};

export default AlertModal;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: '16rem',
    paddingVertical: '20rem',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16rem',
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
  },
});
