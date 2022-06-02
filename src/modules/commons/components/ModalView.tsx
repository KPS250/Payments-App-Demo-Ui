import React, {ReactNode} from 'react';
import {Modal, View, Pressable} from 'react-native';
import {getColorScheme} from '../../../values/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
const Colors = getColorScheme();

type PropsType = {
  visible: boolean;
  dismiss: Function;
  children: ReactNode;
  style?: StyleMedia;
  containerStyle?: StyleMedia;
};

const ModalView = (props: PropsType) => {
  const {
    visible = false,
    children = null,
    dismiss = () => {},
    style = null,
    containerStyle = null,
  } = props;
  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={visible} onRequestClose={dismiss}>
        <Pressable
          style={[styles.innerContainer, containerStyle]}
          onPress={dismiss}>
          <View style={[styles.modalView, style]}>{children}</View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backdrop,
  },
  modalView: {
    //width: '80%',
    backgroundColor: 'white',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalView;
