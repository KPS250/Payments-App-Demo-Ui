import {Icons} from '../values/Icons';
import {Strings} from '../values/Strings';

export const ErrorConfig = {
  dismiss: {
    visible: false,
    title: null,
    message: null,
    icon: null,
    loader: false,
    buttonLabel: null,
  },
  internetError: {
    visible: true,
    title: 'noInternetTitle',
    message: 'noInternetDesc',
    icon: Icons.internetError,
    loader: false,
    buttonLabel: 'refresh',
  },
  apiError: {
    visible: true,
    title: 'apiErrorTitle',
    message: 'apiErrorDesc',
    icon: Icons.apiError,
    loader: false,
    buttonLabel: 'retry',
  },
};
