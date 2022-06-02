import {AppRegistry, Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';

// Extended Style Sheet Configuration
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 372});

AppRegistry.registerComponent(appName, () => App);
