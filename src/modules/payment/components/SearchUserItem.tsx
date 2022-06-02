import React, {useState} from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {randomPositions} from '../../../utils/Constants';
import {getColorScheme} from '../../../values/Colors';
import {Fonts} from '../../../values/Fonts';
import {Icons} from '../../../values/Icons';
import Avatar from '../../commons/components/Avatar';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
  user: object;
  onPress: Function;
  active: boolean;
  index: number;
};

const SearchUserItem = (props: PropTypes) => {
  const {style = {}, user, onPress, active = false, index} = props;

  return (
    <View
      style={[
        styles.container,
        {alignItems: randomPositions[index % randomPositions.length]},
      ]}>
      <View style={styles.innerContainer}>
        <Avatar
          image={user.image}
          borderColor={active ? Colors.green : Colors.white}
          size={active ? 56 : 48}
          onPress={() => onPress(user)}
        />
        <Text style={active ? styles.highLightedName : styles.name}>
          {user.fullName}
        </Text>
      </View>
    </View>
  );
};

export default SearchUserItem;

const styles = EStyleSheet.create({
  container: {
    paddingVertical: '6rem',
    alignItems: 'flex-end',
    paddingHorizontal: '26rem',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Fonts.inter,
    fontWeight: '400',
    fontSize: '14rem',
    lineHeight: '18rem',
    color: Colors.white,
    marginTop: '8rem',
  },
  highLightedName: {
    fontFamily: Fonts.inter,
    fontWeight: '400',
    fontSize: '16rem',
    lineHeight: '18rem',
    color: Colors.green,
    marginTop: '8rem',
  },
});
