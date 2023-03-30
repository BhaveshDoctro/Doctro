import * as React from 'react';

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef: any = React.createRef();

function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
