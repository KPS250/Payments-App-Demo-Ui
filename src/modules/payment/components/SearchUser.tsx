import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import SafeArea from '../../commons/components/SafeArea';
import {FlatList} from 'react-native-gesture-handler';
import {users} from '../../../data/mockData';
import Avatar from '../../commons/components/Avatar';
import {getColorScheme} from '../../../values/Colors';
import AppBar from '../../commons/components/AppBar';
import {Strings} from '../../../values/Strings';
import SearchBar from '../../commons/components/SearchBar';
import {searchUserStyles as styles} from '../styles/serachUserStyles';
import {PaymentMode, randomPositions} from '../../../utils/Constants';
import UserDetails from './UserDetais';
import SearchUserItem from './SearchUserItem';
import BottomSheet from '@gorhom/bottom-sheet';
import UserDetailsModal from './UserDetailsModal';
import MoneyInputModal from './MoneyInputModal';
const Colors = getColorScheme();

type PropTypes = {
  style?: StyleMedia;
};

const SearchUser = (props: PropTypes) => {
  const [searchText, setSearchtext] = useState<string>('');
  const [user, setUser] = useState<object>(null);
  const [moneyInput, setMoneyInput] = useState<boolean>(false);
  const {style = {}} = props;

  const renderSearchBar = () => {
    return <SearchBar value={searchText} onChange={setSearchtext} />;
  };

  const onMoneyInput = () => {
    setMoneyInput(false);
  };

  const showMoneyModal = () => {
    setMoneyInput(true);
  };

  const hideMoneyModal = () => {
    setMoneyInput(false);
  };

  const getFilteredData = () => {
    console.log('SearchText', searchText);
    if (searchText.length > 0 && searchText.trim() != '') {
      let filteredData = users.filter(user =>
        user.fullName
          .toLocaleLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim()),
      );
      console.log(filteredData.length);
      return filteredData;
    } else {
      return users;
    }
  };

  const dismissUserModal = () => {
    setUser(null);
  };

  return (
    <SafeArea>
      <AppBar back title={Strings.back} rightComponent={renderSearchBar} />
      <View style={styles.container}>
        <ImageBackground
          style={styles.circles}
          source={require('../../../assets/images/circles.png')}>
          <FlatList
            data={getFilteredData()}
            extraData={searchText}
            renderItem={({item, index}) => (
              <SearchUserItem
                onPress={setUser}
                user={item}
                active={user?.phone === item.phone}
                index={index}
              />
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </ImageBackground>
        {user && (
          <UserDetailsModal
            user={user}
            dismiss={dismissUserModal}
            onSubmit={showMoneyModal}
          />
        )}
        <MoneyInputModal
          visible={moneyInput}
          onSubmit={onMoneyInput}
          dismiss={hideMoneyModal}
          mode={PaymentMode.SENDING}
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state: any) => {
  return {
    //errorState: state.commonReducer,
  };
};

const mapDispatchToProps = {
  //noInternet,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
