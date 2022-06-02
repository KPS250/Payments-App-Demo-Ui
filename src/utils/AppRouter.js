import React from 'react';
import {Dimensions} from 'react-native';
import Menu from '../modules/menu/components/Menu';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../modules/splash/components/Splash';
import { Screens } from './Constants';
import IntroScreen from '../modules/splash/components/IntroScreen';
import HomeScreen from '../modules/home/components/HomeScreen';
import UserTransaction from '../modules/payment/components/UserTransaction';
import SearchUser from '../modules/payment/components/SearchUser';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const defaultConfig = {
  initialRouteName: Screens.SPLASH,
  headerMode: 'none',
};
const disableDrawer = {swipeEnabled: false};
//let {authToken, logout, loginId} = Store.getState().loginReducer;

const AppRouter = props => {
  return /*false ? DrawerStack(props) :*/ AppStack(props);
};

const AppStack = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            detachPreviousScreen: !navigation.isFocused(),
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          };
        }}>
        <Stack.Screen name={Screens.SPLASH} component={Splash} />
        <Stack.Screen name={Screens.INTROSLIDER} component={IntroScreen} />
        <Stack.Screen name={Screens.HOME} component={DrawerStack} />
        <Stack.Screen name={Screens.USER_TRANSACTION} component={UserTransaction} />
        <Stack.Screen name={Screens.SEARCH_USER} component={SearchUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DrawerStack = props => {
  const {width} = Dimensions.get('window');
  const DrawerWidth = width * 0.8;

  return (
    <Drawer.Navigator
      initialRouteName={'homeStack'}
      drawerPosition={'left'}
      drawerType={'front'}
      screenOptions={({navigation}) => {
        return {
          detachPreviousScreen: !navigation.isFocused(),
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          drawerStyle: {
            width: DrawerWidth,
          },
        };
      }}
      drawerContent={() => <Menu {...props} />}
      >
      <Drawer.Screen name="homeStack" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AppRouter;
