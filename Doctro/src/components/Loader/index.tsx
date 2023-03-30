import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import colors from 'shared/theme/colors';

export default function Loader(props) {
  return (
    <View>
      {props.loading && (
        <ActivityIndicator size="large" color={colors.primaryColor} />
      )}
    </View>
  );
}
