import Button from 'components/Button';
import Input from 'components/Input';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from 'shared/theme/colors';
import {selectLoginForm} from './redux/authSelectors';
import {actions} from './redux/authSlice';
import style from './style';
import {validate} from './validator';

const LoginScreen = ({navigation}) => {
  const {t} = useTranslation();
  const form = useSelector(selectLoginForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (form?.phone.value) {
      const errors = validate(form);
      if (errors.length) {
        dispatch(actions.setFormErrors({errors}));
        return;
      }
    }
  }, [form?.phone.value]);
  return (
    <KeyboardAvoidingView
      style={style.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={style.flex} showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          <View style={style.wrapHeaderText}>
            <Text style={style.headingText}>{t('AUTH.WELCOME_TITLE')}</Text>
            <Text style={style.subheadingText}>
              {t('AUTH.ENTER_PHONE_NUMBER')}
            </Text>
          </View>
          <Input
            errMsg={form.phone.error ? t('AUTH.ENTER_VALID_PHONE_NUMBER') : ''}
            maxLength={10}
            keyboardType="number-pad"
            onChange={(value: any) => {
              dispatch(
                actions.changeFormValue({
                  name: `phone`,
                  value: value.trim().replace(/[^0-9]/g, ''),
                }),
              );
            }}
            value={form?.phone.value}
            mainContainerStyle={{
              width: 266,
            }}
          />
          <View style={style.infoWapper}>
            <Text style={style.infoText}> {t('AUTH.MESSAGE_CODE')}</Text>
          </View>
          <Button
            btnText={t('BUTTONS.CONTINUE')}
            disabled={
              !form.phone.error && form.phone.value.length == 10 ? false : true
            }
            mainContainerStyle={{
              width: 340,
              marginTop: 29,
              backgroundColor:
                !form.phone.error && form.phone.value.length == 10
                  ? colors.btnActiveGreen
                  : colors.lableGrey,
            }}
            onPress={() => {}}
            textstyle={{color: colors.white}}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
