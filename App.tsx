import React from 'react';

import AppNavigator from '@app/navigation';
import {StatusBar} from 'react-native';
import {TestProvider} from '@app/context/Test';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <TestProvider>
        <AppNavigator />
      </TestProvider>
    </>
  );
};

export default App;
