import React from 'react';
import {ActivityIndicator} from 'react-native';
import style from './style';

const LoadingIndicator = () => {
  return (
    <ActivityIndicator style={style.container} size={'large'} color="black" />
  );
};

export default LoadingIndicator;
