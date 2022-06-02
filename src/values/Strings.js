import LocalizedStrings from 'react-native-localization';
import english from '../languages/en.js';
import hindi from '../languages/hi.js';

export const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'hi',
    name: 'हिंदी',
  },
];

export const Strings = new LocalizedStrings({
  en: english,
  hi: hindi,
});

export const changeLaguage = languageKey => {
  Strings.setLanguage(languageKey);
};
