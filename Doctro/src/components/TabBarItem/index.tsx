import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './styles';
import React from 'react';
import color from 'shared/theme/colors';
type Props = {
  focused: boolean;
  tabName: String;
  icon: JSX.Element;
};
export default function TabBarItem(props: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          borderTopColor: props.focused
            ? color.selectedTabItem
            : color.transparent,
        },
      ]}>
      {props.icon}
      <AppText
        style={[
          styles.tabTitle,
          {
            color: props.focused
              ? color.selectedTabItem
              : color.unSelectedTabItem,
          },
        ]}>
        {props.tabName}
      </AppText>
    </View>
  );
}
