import React from 'react';

import Text from '@app/components/Text';
import {Dimensions, View} from 'react-native';
import Answers from '../Answers';
import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';

interface QuestionProps {
  question: string;
  questionIndex: number;
}

const width = Dimensions.get('window').width;

const Question: React.FC<QuestionProps> = ({question, questionIndex}) => {
  const {answers, selectedOptions, handleCheckboxChange} =
    useActiveTestContext();

  return (
    <View style={{width, padding: 16, rowGap: 16}}>
      <View style={{rowGap: 16}}>
        <Text>{questionIndex + 1}.</Text>
        <Text style={{fontSize: 18, fontWeight: '500'}}>{question}</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 24,
          justifyContent: 'space-around',
        }}>
        {answers && (
          <Answers
            answers={answers}
            handleCheckboxChange={handleCheckboxChange}
            questionIndex={questionIndex}
            selectedOptions={selectedOptions}
          />
        )}
      </View>
    </View>
  );
};

export default React.memo(Question);
