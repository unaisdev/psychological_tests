import React, {PropsWithChildren, createContext, useState} from 'react';
import {DataAPI} from '@app/types';
import {DATA_API} from '@app/data';

type DataContextType = {
  data: DataAPI;
};

export const DataContext = createContext<DataContextType>({
  data: DATA_API,
});

export const DataProvider = ({children}: PropsWithChildren) => {
  const [data] = useState<DataAPI>(DATA_API);

  const valuesProvider: DataContextType = {
    data,
  };

  return (
    <DataContext.Provider value={valuesProvider}>
      {children}
    </DataContext.Provider>
  );
};
