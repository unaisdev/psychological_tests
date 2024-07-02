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
  return (
    <FlatList
      data={answers}
      renderItem={({item: answer, index}) => {
        return (
          <Checkbox.Item
            style={{}}
            key={answer.answer}
            label={answer.answer}
            labelStyle={{fontSize: 14}}
            status={
              selectedOptions[questionIndex] === index + 1
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => handleCheckboxChange(index + 1, questionIndex)}
          />
        );
      }}
    />
  );
};

export default React.memo(Answers);
