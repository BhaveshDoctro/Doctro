import React from 'react';
import {showAlertWithYes} from 'utils/dialog';

const ShowErrorMessage = props => {
  return (
    <>
      {props.isShow &&
        showAlertWithYes(
          'Demo App',
          props.message ? props.message.toString() : 'Server side error',
          okClick => {
            if (
              props.message &&
              props.message.includes('Unauthorized') == true
            ) {
            }
          },
        )}
    </>
  );
};

export default ShowErrorMessage;
