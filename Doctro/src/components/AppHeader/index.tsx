import React from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, Text, View, Image} from 'react-native';
import BackIcon from './assets/back.png';
import style from './style';

type Props = {
  title: string;
  isBackShown: boolean;
  onBackPress(): void;
  style: any;
};
const AppHeader = (props: Props) => {
  const {t} = useTranslation();
  return (
    <View
      style={[
        style.container,
        !props.isBackShown && style.justifyContent,
        props.style,
      ]}>
      {props.isBackShown && (
        <Pressable style={style.backButton} onPress={props.onBackPress}>
          <Image style={style.backIcon} source={BackIcon} />

          <Text style={style.backButtonText}> {t('AUTH.BACK')}</Text>
        </Pressable>
      )}
      <Text style={[style.titleText, !props.isBackShown && style.flexView]}>
        {props.title}
      </Text>
    </View>
  );
};
AppHeader.defaultProps = {
  isBackShown: true,
};
export default AppHeader;
