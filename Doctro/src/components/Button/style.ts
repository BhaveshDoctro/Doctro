import {StyleSheet} from 'react-native';
import color from 'shared/theme/colors';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    padding: 8,
    borderColor: color.black,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 8,
  },
  rightImgStyle: {
    marginRight: 8,
  },
  btnText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
  },
});

export default styles;
