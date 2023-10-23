import React from 'react';
import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';
import {Checkbox} from 'react-native-paper';

const Answers = () => {
  const {answers, selectedOptions, questionIndex, handleCheckboxChange} =
    useActiveTestContext();

  return answers?.map((answer, index) => {
    return (
      <Checkbox.Item
        key={answer.answer}
        label={answer.answer}
        labelStyle={{fontSize: 14}}
        status={
          selectedOptions[questionIndex] === index + 1 ? 'checked' : 'unchecked'
        }
        onPress={() => handleCheckboxChange(index + 1, questionIndex)}
      />
    );
  });
};

export default Answers;
