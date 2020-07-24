/* eslint-disable no-unused-expressions */

import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params, {
    key: Math.random().toString(),
  });
}

export function reset(routes) {
  navigationRef.current?.reset(routes);
}

export function goBack() {
  navigationRef.current?.goBack();
}
