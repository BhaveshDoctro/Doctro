import {StyleSheet} from 'react-native';
import colors from './colors';
import {fontStyle} from './mixins';

export default StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#00000040',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallFieldIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  in_active_tab_label: {
    ...fontStyle(10, colors.black),
    paddingTop: 2,
  },
  active_tab_label: {
    ...fontStyle(10, colors.primaryColor),
    paddingTop: 2,
  },
  languageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderBottomColor: colors.borderLinesColor,
  },

  radioLabel: {
    ...fontStyle(16, colors.black),
  },
  radioButtonView: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLinesColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedRadioButtonView: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.borderLinesColor,
  },
});
