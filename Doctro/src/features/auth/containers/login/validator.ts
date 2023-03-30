import {FormError} from 'types/FormError';

export const validate = (form: any): FormError[] => {
  let errors = [] as FormError[];
  if (!form?.phone?.value) {
    errors.push({
      name: 'phone.error',
      error: `AUTH.ENTER_VALID_PHONE_NUMBER`,
    } as FormError);
  } else if (form?.phone?.value.replace('.', '').length !== 10) {
    errors.push({
      name: 'phone.error',
      error: `AUTH.ENTER_VALID_PHONE_NUMBER`,
    } as FormError);
  } else if (form?.phone?.value.replace('.', '').length !== 10) {
    let phoneNumber = new RegExp(`^[0][5][0|2|3|4|5|9]{1}[-.]{0,1}[0-9]{7}$`);
    if (!phoneNumber.test(form?.phone?.value))
      errors.push({
        name: 'phone.error',
        error: `AUTH.ENTER_VALID_PHONE_NUMBER`,
      } as FormError);
  }
  return errors;
};
