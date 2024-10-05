import React from 'react';

import {Checkbox} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';
import {TestContextType} from '@app/context/Test';
import {Answer} from '@app/types';
import {FlatList} from 'react-native';
interface AnswersProps {
  answers: Answer[];
  selectedOptions: number[];
  questionIndex: number;
  handleCheckboxChange: (answerIndex: number, questionIndex: number) => void;
}

const Answers: React.FC<AnswersProps> = ({
  answers,
  selectedOptions,
  questionIndex,
  handleCheckboxChange,
}) => {
  const selectedOption = selectedOptions[questionIndex];
  console.log('selectedOption', selectedOption);
  const renderItem = ({item: answer, index}: {item: Answer; index: number}) => {
    const isChecked = selectedOption === index + 1;

    return (
      <Checkbox.Item
        style={{}}
        key={answer.answer}
        label={answer.answer}
        labelStyle={{fontSize: 14}}
        status={isChecked ? 'checked' : 'unchecked'}
        onPress={() => handleCheckboxChange(index + 1, questionIndex)}
      />
    );
  };

  return (
    <FlatList
      data={answers}
      renderItem={renderItem}
      keyExtractor={item => item.answer}
    />
  );
};

export default React.memo(Answers);
