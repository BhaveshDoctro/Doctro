import {I18nManager, StyleSheet} from 'react-native';
import color from 'shared/theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 57,
    backgroundColor: color.white,
    borderRadius: 8,
    paddingHorizontal: 18,
    elevation: 2,
    shadowColor: color.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.lightBlack,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
