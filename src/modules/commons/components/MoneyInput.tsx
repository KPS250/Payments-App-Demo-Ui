import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {InputType, PaymentMode} from '../../../utils/Constants';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
import {Icons} from '../../../values/Icons';
import {Strings} from '../../../values/Strings';
import Button from './Button';
import InputCell from './InputCell';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  mode: number;
  onSubmit: Function;
};

const MoneyInput = (props: PropTypes) => {
  const [amount, setAmount] = useState<string>('');
  const {style = {}, onSubmit, mode} = props;
  const screenConfig = [
    {
      label: 1,
      type: InputType.NUMBER,
    },
    {
      label: 2,
      type: InputType.NUMBER,
    },
    {
      label: 3,
      type: InputType.NUMBER,
    },
    {
      label: 4,
      type: InputType.NUMBER,
    },
    {
      label: 5,
      type: InputType.NUMBER,
    },
    {
      label: 6,
      type: InputType.NUMBER,
    },
    {
      label: 7,
      type: InputType.NUMBER,
    },
    {
      label: 8,
      type: InputType.NUMBER,
    },
    {
      label: 9,
      type: InputType.NUMBER,
    },
    {
      label: 10,
      type: InputType.DECIMAL_POINT,
      icon: Icons.dot,
    },
    {
      label: 0,
      type: InputType.NUMBER,
    },
    {
      label: 11,
      type: InputType.BACKSPACE,
      icon: Icons.backspace,
    },
  ];

  const onButtonPress = (input: any) => {
    if (input.type === InputType.BACKSPACE) {
      setAmount(amount.slice(0, amount.length - 1));
    } else if (input.type === InputType.DECIMAL_POINT) {
      if (!amount.includes('.')) setAmount(amount + '.');
    } else {
      setAmount(amount + input.label);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.amount} numberOfLines={1}>{`${Strings.rupeeSymbol}${
        amount ? amount : '0'
      }`}</Text>
      <FlatList
        data={screenConfig}
        numColumns={3}
        renderItem={({item, index}) => (
          <InputCell item={item} onPress={onButtonPress} />
        )}
        keyExtractor={(item, index) => item.label}
      />
      <Button
        label={PaymentMode.presentation[mode]}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        onPress={onSubmit}
      />
    </View>
  );
};

export default MoneyInput;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '38rem',
    backgroundColor: Colors.bluish,
  },
  button: {
    //paddingVertical: '16rem',
    paddingHorizontal: '40rem',
    backgroundColor: Colors.pink,
    position: 'absolute',
    bottom: '30rem',
    alignSelf: 'center',
  },
  buttonLabel: {
    fontFamily: Fonts.inter,
    fontWeight: '500',
    fontSize: '16rem',
    //lineHeight: '28rem',
    color: Colors.white,
  },
  amount: {
    fontFamily: Fonts.inter,
    fontWeight: '700',
    fontSize: '64rem',
    color: Colors.white,
    paddingHorizontal: '20rem',
    marginBottom: '30rem',
    textAlign: 'center',
  },
});
