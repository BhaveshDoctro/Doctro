import AppText from 'components/AppText';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import style from './style';
type Props = {
  title: string;
  icon: any;
  onClick(): void;
  style: any;
  textStyle: any;
  iconStyle: any;
};
const ButtonIcon = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onClick}>
      <View style={[style.container, props.style]}>
        <AppText style={[style.titleText, props.textStyle]}>
          {props.title}
        </AppText>
        <Image style={[style.icon, props.iconStyle]} source={props.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
