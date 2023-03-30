import {TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import AppText from 'components/AppText';
import style from './style';
type Props = {
  itemList: String[];
  onClickSelectedItem(index: number): void;
  index: number;
};

export default function SwipeTabView(props: Props) {
  return (
    <View style={style.swipeView}>
      {props.itemList.map((value, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => {
            props.onClickSelectedItem(index);
          }}>
          <View
            style={[
              style.swipeItem,
              props.index == index && style.selectedSwipeItem,
            ]}>
            <AppText
              style={[
                style.text,
                props.index == index
                  ? style.selectedSwipeText
                  : style.unSelectedSwipeText,
              ]}>
              {value}
            </AppText>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}
