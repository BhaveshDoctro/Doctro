import React from 'react';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
type Props = {
  onChange: any;
  mainContainerStyle?: {};
  title?: string;
  titleTextMarginLeft?: any;
  isRequired?: boolean;
  rightIcon?: any;
  correctStyle?: any;
  maxLength?: number;
  editable?: boolean;
  onClick(): void;
  value: string;
};
const InputIcon = ({
  onChange,
  mainContainerStyle,
  rightIcon,
  correctStyle,
  maxLength,
  onClick,
  editable,
  value,
}: Props) => {
  const [isFocus, setFocus] = React.useState(false);
  return (
    // <View style={{marginHorizontal:10}}>
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={1}
      style={[
        isFocus ? styles.activeInput : {},
        styles.container,
        correctStyle,
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.clickView, mainContainerStyle]}
        onPress={onClick}>
        <TextInput
          autoCorrect={false}
          style={[styles.mainContainer, mainContainerStyle]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={(e: any) => onChange(e)}
          maxLength={maxLength}
          editable={editable}
          value={value}
          pointerEvents={!editable ? 'none' : 'auto'}
        />
      </TouchableOpacity>
      {rightIcon ? (
        <Image
          style={styles.imageIcon}
          resizeMode="contain"
          source={rightIcon}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default InputIcon;
