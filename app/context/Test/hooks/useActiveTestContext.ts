import {useContext} from 'react';
import {TestContext} from '..';

export const useActiveTestContext = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error('useThemeContext debe usarse dentro del TestProvider');
  }

  const {
    activeTest,
    selectedValues,
    selectedOptions,
    answers,
    answered,
    progress,
    handleActiveTest,
    handleCheckboxChange,
    resetTest,
  } = context;

  return {
    activeTest,
    selectedValues,
    selectedOptions,
    answers,
    answered,
    progress,
    handleActiveTest,
    handleCheckboxChange,
    resetTest,
  };
};
