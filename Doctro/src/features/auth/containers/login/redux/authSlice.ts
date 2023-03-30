/*
 * GithubRepoForm Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import {PayloadAction} from '@reduxjs/toolkit';
import set from 'lodash/set';
import {FormError} from 'types/FormError';
import {createSlice} from 'utils/@reduxjs/toolkit';
import {ContainerState} from '../types';

// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  loading: false,
  error: null,
  phone: {value: '', error: ''},
  code: {value: '', error: ''},
};

const loginSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    setFormErrors(
      state,
      action: PayloadAction<{
        errors: FormError[];
      }>,
    ) {
      action.payload.errors.forEach(error => {
        set(state, `${error.name}`, error.error);
      });
      state.error = null;
    },
    changeFormValue(
      state,
      action: PayloadAction<{
        name: string;
        value: string | string[] | any[] | boolean | number | Date | null;
      }>,
    ) {
      console.log({state, action});
      set(state, `${action.payload.name}.value`, action.payload.value);
      set(state, `${action.payload.name}.error`, null);
      state.error = null;
    },
    login(state) {
      console.log('---------->>>>', JSON.stringify(state));
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.actions = action.payload;
    },
    loginError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {actions, reducer, name: sliceKey} = loginSlice;
