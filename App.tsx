import React from 'react';

import AppNavigator from '@app/navigation';
import {StatusBar} from 'react-native';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <AppNavigator />
    </>
  );
};

export default App;
