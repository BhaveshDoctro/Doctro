import {StyleSheet} from 'react-native';
import color from 'shared/theme/colors';

export default StyleSheet.create({
  swipeView: {
    height: 42,
    backgroundColor: color.white,
    borderRadius: 70,
    borderColor: color.swipeBorderColor,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  swipeItem: {
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
  },
  selectedSwipeItem: {
    backgroundColor: color.lableGrey,
  },
  selectedSwipeText: {
    color: color.white,
  },
  unSelectedSwipeText: {
    color: color.unSwipeText,
  },
});
