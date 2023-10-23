import {useContext} from 'react';
import {DataContext} from '..';

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataContext debe usarse dentro del DataProvider');
  }

  const {data} = context;

  return {
    data,
  };
};
