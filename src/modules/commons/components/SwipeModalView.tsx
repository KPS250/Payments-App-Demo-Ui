import React, {ReactNode} from 'react';
import {getColorScheme} from '../../../values/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';

const Colors = getColorScheme();

type PropsType = {
  visible: boolean;
  dismiss: Function;
  children: ReactNode;
  style?: StyleMedia;
  containerStyle?: StyleMedia;
};

const SwipeModalView = (props: PropsType) => {
  const {
    visible = false,
    children = null,
    dismiss = () => {},
    style = null,
    containerStyle = null,
  } = props;
  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={() => {
        dismiss();
      }}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      coverScreen
      style={[styles.modalView, style]}
      statusBarTranslucent={false}
      avoidKeyboard={true}
      animationOut={'slideOutDown'}
      animationOutTiming={800}
      animationInTiming={800}>
      {children}
    </Modal>
  );
};

const styles = EStyleSheet.create({
  modalView: {
    flex: 1,
    padding: 0,
    margin: 0,
    //height: '60%',
  },
});

export default SwipeModalView;
