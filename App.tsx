import React from 'react';

import AppNavigator from '@app/navigation';
import {StatusBar} from 'react-native';
import {TestProvider} from '@app/context/Test';
import {DataProvider} from '@app/context/Data';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <DataProvider>
        <TestProvider>
          <AppNavigator />
        </TestProvider>
      </DataProvider>
    </>
  );
};

export default App;
