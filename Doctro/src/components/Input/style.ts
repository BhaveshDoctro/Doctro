import {I18nManager, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    height: 56,

    //  width:'100%',
    //  borderWidth:1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    color: '#000',
    borderRadius: 4,
    borderRightWidth: 0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  activeInput: {
    borderColor: '#EDAC15',
  },
  inputTitle: {
    marginVertical: 5,
  },
  isRTL: {
    textAlign: 'left',
  },
  starText: {
    color: '#E4181D',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
  },
});

export default styles;
