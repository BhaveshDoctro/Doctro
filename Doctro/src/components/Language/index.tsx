import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from 'shared/theme/styles';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'hi', label: 'Hindi'},
];

const LanguageSelection = () => {
  const {i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;
  const setLanguage = code => {
    AsyncStorage.setItem(
      'selectedLanguage',
      LANGUAGES.find(item => item.code == code)?.label!!,
    );
    return i18n.changeLanguage(code);
  };

  return (
    <View>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <TouchableWithoutFeedback
            key={language.code}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}>
            <View style={styles.languageView}>
              <Text style={styles.radioLabel}>{language.label}</Text>
              <View style={styles.radioButtonView}>
                {selectedLanguage ? (
                  <View style={styles.selectedRadioButtonView} />
                ) : null}
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default LanguageSelection;
