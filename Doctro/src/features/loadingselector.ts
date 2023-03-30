/**
 * Homepage selectors
 */

import {RootState} from 'types';

import {createSelector} from '@reduxjs/toolkit';

// TODO: Add an explanation for this
const selectDomain = (state: RootState) => state || {};

export const selectLoadingForm = createSelector([selectDomain], state => state);
