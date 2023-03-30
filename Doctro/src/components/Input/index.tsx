import React from 'react';
import {TextInput, Text, View, Image} from 'react-native';
import styles from './style';
import Animated, {BounceIn} from 'react-native-reanimated';
import color from 'shared/theme/colors';
type Props = {
  keyboardType: string;
  onChange: any;
  mainContainerStyle?: {};
  title?: string;
  titleTextMarginLeft?: any;
  isRequired?: boolean;
  rightIcon?: any;
  correctStyle?: any;
  maxLength?: number;
  value?: string;
  errMsg?: string;
  isNotAllowedRTL?: boolean;
};
const Input = ({
  keyboardType,
  onChange,
  mainContainerStyle,
  titleTextMarginLeft,
  title,
  isRequired,
  rightIcon,
  correctStyle,
  maxLength,
  value,
  errMsg,
  isNotAllowedRTL = false,
}: Props) => {
  const [isFocus, setFocus] = React.useState(false);
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  return (
    <View style={{marginHorizontal: 10}}>
      <View
        style={[
          isFocus ? styles.activeInput : {},
          {
            flexDirection: 'row',
            borderWidth: 1,
            alignItems: 'center',
            borderRadius: 4,
          },
          correctStyle,
        ]}>
        <TextInput
          value={value}
          autoCorrect={false}
          style={[
            styles.mainContainer,
            mainContainerStyle,
            isNotAllowedRTL && styles.isRTL,
          ]}
          keyboardType={keyboardType}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={(e: any) => onChange(e)}
          maxLength={maxLength}
        />
        {rightIcon && (
          <View>
            <AnimatedImage
              entering={BounceIn.duration(500)}
              style={{height: 18, width: 24, marginRight: 10}}
              resizeMode="contain"
              source={rightIcon}
            />
          </View>
        )}
      </View>
      {errMsg && (
        <Text
          style={{
            fontSize: 12,
            lineHeight: 14,
            fontWeight: '400',
            color: color.requiredRed,
            marginVertical: 5,
          }}>
          {errMsg}
        </Text>
      )}
    </View>
  );
};

export default Input;
