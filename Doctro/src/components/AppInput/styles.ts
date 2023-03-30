import {I18nManager, StyleSheet} from 'react-native';
import colors from 'shared/theme/colors';
const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  inputStyle: {
    height: 45,
    fontSize: 16,
    color: colors.black,
    width: '100%',
    paddingStart: 8,
    backgroundColor: colors.white,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});

export default styles;
