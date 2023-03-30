/**
 * Homepage selectors
 */

import {RootState} from 'types';

import {createSelector} from '@reduxjs/toolkit';

// TODO: Add an explanation for this
const selectDomain = (state: RootState) => state.loginState || {};

export const selectLoginForm = createSelector([selectDomain], state => state);

export const selectError = createSelector([selectDomain], state => state.error);
