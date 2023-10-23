import {useContext} from 'react';
import {TestContext} from '..';

export const useActiveTestContext = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error('useActiveTestContext debe usarse dentro del TestProvider');
  }

  const {
    activeTest,
    selectedValues,
    selectedOptions,
    questionIndex,
    answers,
    answered,
    progress,
    handleActiveTest,
    handleCheckboxChange,
    resetTest,
    setQuestionIndex,
  } = context;

  return {
    activeTest,
    selectedValues,
    selectedOptions,
    questionIndex,
    answers,
    answered,
    progress,
    handleActiveTest,
    handleCheckboxChange,
    resetTest,
    setQuestionIndex,
  };
};
