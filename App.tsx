import React from 'react';
import {LogBox, Text, TextInput} from 'react-native';
import Store, {Persistor} from './src/utils/Store';
import AppRouter from './src/utils/AppRouter';
import {Provider} from 'react-redux';
import CodePushProvider from './src/modules/commons/components/CodePushProvider';
import {PersistGate} from 'redux-persist/integration/react';

type PropTypes = {};

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreAllLogs();

const App = (props: PropTypes) => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <CodePushProvider>
          <AppRouter props={props} />
        </CodePushProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
