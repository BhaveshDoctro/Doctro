import {StyleSheet} from 'react-native';
import colors from 'shared/theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  justifyContent: {
    justifyContent: 'center',
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 0.3,
  },
  backButtonText: {
    color: colors.backColor,
    fontSize: 12,
    fontWeight: '400',
  },

  titleText: {
    flex: 0.9,
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flexView: {
    flex: 1,
    marginEnd: 0,
  },
  backIcon: {
    height: 24,
    width: 24,
  },
});
