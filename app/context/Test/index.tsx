import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {Answer, Test} from '@app/types';
import {useDataContext} from '../Data/hooks/useDataContext';

export type TestContextType = {
  activeTest: Test | undefined;
  selectedValues: number[];
  selectedOptions: number[];
  questionIndex: number;
  answers: Answer[] | undefined;
  progress: number;
  answered: boolean;
  handleActiveTest: (test: Test) => void;
  resetTest: () => void;
  setQuestionIndex: (index: number) => void;
  handleCheckboxChange: (answerIndex: number, questionIndex: number) => void;
};

export const TestContext = createContext<TestContextType>({
  activeTest: undefined,
  selectedValues: [],
  selectedOptions: [],
  questionIndex: 0,
  answers: [],
  progress: 0,
  answered: false,
  resetTest: () => ({}),
  setQuestionIndex: () => ({}),
  handleActiveTest: () => ({}),
  handleCheckboxChange: () => ({}),
});

export const TestProvider = ({children}: PropsWithChildren) => {
  const [activeTest, setActiveTest] = useState<Test>();
  const [processing, setProcessing] = useState(false); // Nuevo estado para controlar el procesamiento
  const [progress, setProgress] = useState(0);
  const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  // console.log('values', selectedValues);
  const {data} = useDataContext();
  // console.log('selected', selectedOptions);

  // console.log(activeTest.id, activeTest.title);
  const answers = useMemo(() => {
    console.log(new Date());
    if (activeTest) {
      return data.tests[activeTest?.id - 1]?.answers;
    }
  }, [data.tests, activeTest]);

  const setQuestionIndex = (index: number) => {
    setActualQuestionIndex(index);
  };

  const handleActiveTest = (test: Test) => {
    setActiveTest(test);
    setQuestionIndex(0);
    setSelectedOptions(test.questions.map(() => 0));
    setSelectedValues(Array(test.questions.length).fill(0));
  };

  // Función para reiniciar el test
  const resetTest = () => {
    if (activeTest) {
      setSelectedOptions(activeTest.questions.map(() => 0));
      setSelectedValues(activeTest.questions.map(() => 0));
      setQuestionIndex(0);
      setProgress(0);
    }
  };

  const handleCheckboxChange = useCallback(
    (answerIndex: number, questionIndex: number) => {
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
    },
    [answers, activeTest, processing],
  );

  const answered = progress === 1 ? true : false;

  const valuesProvider: TestContextType = {
    activeTest,
    selectedValues,
    selectedOptions,
    questionIndex: actualQuestionIndex,
    answered,
    answers,
    progress,
    handleActiveTest,
    handleCheckboxChange,
    resetTest,
    setQuestionIndex,
  };

  return (
    <TestContext.Provider value={valuesProvider}>
      {children}
    </TestContext.Provider>
  );
};
