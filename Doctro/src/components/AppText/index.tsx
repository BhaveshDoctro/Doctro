import React from 'react';
import {Text, TextProps} from 'react-native-elements';
import styles from './styles';
export default function AppText(_props: TextProps) {
  return <Text {..._props} style={[styles.container, _props.style]} />;
}
