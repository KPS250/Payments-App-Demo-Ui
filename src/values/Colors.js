import Store from '../utils/Store';

export const getColorScheme = () => {
  if (Store.getState().commonReducer.colorScheme === 'dark') {
    return darkColors;
  }
  return lightColors;
};

const lightColors = {
  black: '#0d0d0d',
  transparent: 'transparent',
  shimmer: '#32383E10',
  primary: '#1abc9c',
  backdrop: '#0d0d0d',

  white: '#FFFFFF',
  bluish: '#010A43',
  bluishOne: '#10194E',
  blue: '#17288E',
  blueDark: '#1C265C',
  blueNavy: '#212A6B',
  blueSky: '#426DDC',
  purple: '#464E8A',
  purpleLight: '#192259',
  yellowOne: '#FFB129',
  yellowTwo: '#FDD590',
  green: '#1DC7AC',
  red: '#FE4A54',
  chrome: '#FAAD39',
  pink: '#FF2E63',
  indicator: '#4E589F',
  purpleName: '#858EC5',
};

const darkColors = {
  black: '#0d0d0d',
  transparent: 'transparent',
  shimmer: '#32383E90',
  primary: '#1abc9c',
  backdrop: '#0d0d0d',

  white: '#FFFFFF',
  bluish: '#010A43',
  bluishOne: '#10194E',
  blue: '#17288E',
  blueDark: '#1C265C',
  blueNavy: '#212A6B',
  blueSky: '#426DDC',
  purple: '#464E8A',
  purpleLight: '#192259',
  yellowOne: '#FFB129',
  yellowTwo: '#FDD590',
  green: '#1DC7AC',
  red: '#FE4A54',
  chrome: '#FAAD39',
  pink: '#FF2E63',
  indicator: '#4E589F',
  purpleName: '#858EC5',
};
