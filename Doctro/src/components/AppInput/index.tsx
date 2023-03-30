import React from 'react';
import {useTranslation} from 'react-i18next';
import {Input, InputProps} from 'react-native-elements';
import styles from './styles';
export default function AppInput(_props: InputProps) {
  const {t} = useTranslation();
  return (
    <Input
      inputContainerStyle={styles.inputContainerStyle}
      placeholder={t('BUTTONS.WRITE_MSG')}
      autoCompleteType="phone"
      {..._props}
      inputStyle={[styles.inputStyle, _props.inputStyle]}
    />
  );
}
