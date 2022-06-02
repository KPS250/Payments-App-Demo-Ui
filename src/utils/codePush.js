import CodePush from 'react-native-code-push';
import React from 'react';
import {AppConfig} from '../config/AppConfig';
import {environment} from '../config/EnvConfig';

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

const withCodePush = (WrappedComponent) => {
  class WrappedApp extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        progress: 0,
        updateStatus: CodePush.SyncStatus.SYNC_IN_PROGRESS,
      };
    }
    componentDidMount() {
      CodePush.sync(
        {
          //updateDialog: true,
          deploymentKey: AppConfig[environment].codePushDeploymentKey,
          checkFrequency: CodePush.CheckFrequency.ON_APP_START,
          installMode: CodePush.InstallMode.IMMEDIATE,
          mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
          /*updateDialog: {
            title: 'An update is available!',
            appendReleaseDescription: true,
            descriptionPrefix: '\n\nChange log:\n',
          },*/
        },
        this.syncWithCodePush,
        null,
      );
    }

    syncWithCodePush = (status) => {
      this.updateStatus(status);
    };

    codePushStatusDidChange(status) {
      this.updateStatus(status);
    }

    codePushDownloadDidProgress(progress) {
      let progressPercent = progress.receivedBytes / progress.totalBytes;
      this.setState({progress: progressPercent});
    }

    updateStatus = (status) => {
      this.setState({updateStatus: status});
    };

    render() {
      const {updateStatus, progress} = this.state;
      return (
        <WrappedComponent updateStatus={updateStatus} progress={progress} />
      );
    }
  }

  return CodePush(CODE_PUSH_OPTIONS)(WrappedApp);
};
export default withCodePush;
