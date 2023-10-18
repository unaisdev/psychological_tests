import React, {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from 'react';
import {Answer, Test} from '@app/types';
import {DATA_API} from '@app/data';

type TestContextType = {
  activeTest: Test | undefined;
  selectedValues: number[];
  selectedOptions: number[];
  answers: Answer[] | undefined;
  progress: number;
  answered: boolean;
  handleActiveTest: (test: Test) => void;
  resetTest: () => void;
  handleCheckboxChange: (answerIndex: number, questionIndex: number) => void;
};

export const TestContext = createContext<TestContextType>({
  activeTest: undefined,
  selectedValues: [],
  selectedOptions: [],
  answers: [],
  progress: 0,
  answered: false,
  resetTest: () => ({}),
  handleActiveTest: (test: Test) => ({}),
  handleCheckboxChange: (answerIndex: number, questionIndex: number) => ({}),
});

export const TestProvider = ({children}: PropsWithChildren) => {
  const [activeTest, setActiveTest] = useState<Test>();
  const [processing, setProcessing] = useState(false); // Nuevo estado para controlar el procesamiento
  const [progress, setProgress] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  // console.log('values', selectedValues);

  // console.log('selected', selectedOptions);

  // console.log(activeTest.id, activeTest.title);
  const answers = useMemo(() => {
    return DATA_API.tests[activeTest?.id - 1]?.answers;
  }, [activeTest]);

  const handleActiveTest = (test: Test) => {
    setActiveTest(test);
    setSelectedOptions(test.questions.map(() => 0));
    setSelectedValues(Array(test.questions.length).fill(0));
  };

  // Función para reiniciar el test
  const resetTest = () => {
    if (activeTest) {
      setSelectedOptions(activeTest.questions.map(() => 0));
      setSelectedValues(activeTest.questions.map(() => 0));
      setProgress(0);
    }
  };

  const handleCheckboxChange = (answerIndex: number, questionIndex: number) => {
    if (processing || !answers || !activeTest) {
      return;
    }

    setProcessing(true);

    setSelectedOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index === questionIndex) {
          return answers[answerIndex - 1].value; // Use the value from Answer type
        }
        return option;
      });
    });

    setSelectedValues(prevValues => {
      prevValues[questionIndex] = answers[answerIndex - 1].value;

      const questionsAnswered = prevValues.filter(
        option => option !== 0,
      ).length;
      const newProgress = questionsAnswered / activeTest.questions.length;
      setProgress(newProgress);
      setProcessing(false);
      return [...prevValues];
    });
  };

  const answered = progress === 1 ? true : false;

  const valuesProvider: TestContextType = {
    activeTest,
    selectedValues,
    selectedOptions,
    answered,
    answers,
    progress,
    handleActiveTest,
    handleCheckboxChange,
    resetTest,
  };

  return (
    <TestContext.Provider value={valuesProvider}>
      {children}
    </TestContext.Provider>
  );
};
