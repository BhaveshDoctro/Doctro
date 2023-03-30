import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import styles from './style';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
type Props = {
  mainContainerStyle?: {};
  btnText: string;
  RightImage?: any;
  disabled?: boolean;
  onPress?: () => void;
  textstyle?: {};
};
const Button = ({
  mainContainerStyle,
  btnText,
  disabled,
  onPress,
  textstyle,
  RightImage = null,
}: Props) => {
  const buttonScale = useSharedValue(1);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const reAnimmatedBounceStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={() => {}}
      style={[
        styles.mainContainer,
        mainContainerStyle,
        reAnimmatedBounceStyle,
      ]}>
      {RightImage}
      <Text style={[styles.btnText, textstyle]}>{btnText}</Text>
    </AnimatedPressable>
  );
};

export default Button;
