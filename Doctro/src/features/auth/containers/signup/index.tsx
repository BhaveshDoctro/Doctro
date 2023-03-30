import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text> SignUpScreen </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
