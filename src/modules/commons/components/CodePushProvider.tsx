import React, {createContext, useContext} from 'react';
import codePush, {DownloadProgress} from 'react-native-code-push';

interface CodePushContext {
  updateStatus: null | codePush.SyncStatus;
  progress: null | number;
}

// @ts-ignore
const CodePushContext = createContext<CodePushContext>({});

export const useCodePush = () => useContext<CodePushContext>(CodePushContext);

export const CodePushProvider = codePush()(
  class extends React.Component<{}, CodePushContext> {
    state = {
      updateStatus: null,
      progress: null,
    };

    codePushStatusDidChange(updateStatus: codePush.SyncStatus) {
      this.setState({updateStatus});
    }

    codePushDownloadDidProgress(progress: DownloadProgress) {
      this.setState({progress: progress.receivedBytes / progress.totalBytes});
    }

    render() {
      return (
        <CodePushContext.Provider
          value={{
            updateStatus: this.state.updateStatus,
            progress: this.state.progress,
          }}>
          {this.props.children}
        </CodePushContext.Provider>
      );
    }
  },
);

export default CodePushProvider;
