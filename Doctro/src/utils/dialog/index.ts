import {Alert} from 'react-native';

export function showAlertWithYes(title, description, okClick, okText = 'OK') {
  Alert.alert(
    title,
    description,
    [
      {
        text: okText,
        onPress: () => {
          okClick();
        },
      },
    ],
    {cancelable: false},
  );
}
