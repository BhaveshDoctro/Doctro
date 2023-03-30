import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import LanguageSelection from 'components/Language';

const LanguageScreen = ({navigation}) => {
  return (
    <View style={style.mainView}>
      <LanguageSelection />
    </View>
  );
};

export default LanguageScreen;
