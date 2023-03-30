import {StyleSheet} from 'react-native';
import color from 'shared/theme/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: '15%',
  },
  flex: {
    flex: 1,
  },
  logoImage: {
    width: 137,
    height: 140,
  },
  headingText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 27,
    color: '#EDAC15',
    marginTop: 83,
  },
  subheadingText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: color.black,
    marginTop: 23,
    marginBottom: 24,
  },
  wrapHeaderText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  infoWapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginTop: 11,
  },
  infoText: {
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 18,
    color: color.lableGrey,
    fontWeight: '400',
  },
});

export default styles;
