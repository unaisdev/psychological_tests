import React from 'react';

import Text from '@app/components/Text';
import {View} from 'react-native';
import Answers from '../Answers';

interface QuestionProps {
  question: string;
  questionIndex: number;
}

const Question: React.FC<QuestionProps> = ({question, questionIndex}) => {
  return (
    <View style={{flex: 1, margin: 16, rowGap: 16}}>
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
        <Answers />
      </View>
    </View>
  );
};

export default Question;
