import React, {useEffect, useMemo, useState} from 'react';

import Layout from '@app/components/Layout';
import {Button, Text} from '@app/components';
import {NavigationStackScreens} from '@app/navigation';
import {RouteProp} from '@react-navigation/native';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {GoBack, RefreshIcon} from '@app/constants/icons';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Checkbox, ProgressBar} from 'react-native-paper';
import {AnswerScale, answerScaleValues} from '@app/types';
import {DATA_API} from '@app/data';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

const TestQuizzScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'Test'>;
}) => {
  const test = route.params;
  const navigation = useStackNavigation();
  const [progress, setProgress] = useState(0);
  const [processing, setProcessing] = useState(false); // Nuevo estado para controlar el procesamiento

  // Define un estado para mantener un registro de las selecciones de los checkboxes.
  const [selectedOptions, setSelectedOptions] = useState(
    test.questions.map(() => 0),
  );
  const [selectedValues, setSelectedValues] = useState(
    Array(test.questions.length).fill(0.0 as Float),
  );

  // Función para reiniciar el test
  const resetTest = () => {
    setSelectedOptions(test.questions.map(() => 0));
    setSelectedValues(test.questions.map(() => 0));
    setProgress(0);
  };

  console.log('values', selectedValues);

  console.log('selected', selectedOptions);

  // Crear un objeto que asigne valores numéricos a las claves de AnswerScale

  console.log(test.id, test.title);
  const answers: {[key in keyof AnswerScale]: number} = useMemo(() => {
    return DATA_API.tests[test.id - 1]?.answers; // Obtiene las respuestas del objeto DATA_API
  }, [test.id]);

  // Función para manejar los cambios en los checkboxes.
  const handleCheckboxChange = (
    questionIndex: number,
    key: keyof AnswerScale,
  ) => {
    if (processing) {
      return; // Evita procesar cambios si ya se está procesando
    }
    console.log('questionIndex', questionIndex);
    setProcessing(true); // Indica que se está procesando la selección del checkbox

    setSelectedOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index === questionIndex) {
          return answerScaleValues[key];
        }
        return option;
      });
    });

    setSelectedValues(prevValues => {
      prevValues[questionIndex] = answers[key];

      const questionsAnswered = prevValues.filter(
        option => option !== 0,
      ).length;
      const newProgress = questionsAnswered / test.questions.length;
      setProgress(newProgress);
      setProcessing(false); // Indica que el procesamiento ha terminado

      return [...prevValues]; // Devolvemos un nuevo arreglo con los cambios
    });
  };

  // Este efecto se ejecutará cuando 'selectedOptions' o 'progress' cambien.
  useEffect(() => {
    console.log(progress);
  }, [selectedOptions, progress]);

  return (
    <Layout style={{flex: 1}}>
      <View style={styles.header}>
        <Button
          icon={<GoBack color="black" size={30} />}
          handleOnPress={() => navigation.goBack()}
        />
      </View>
      <View style={{paddingTop: 30, paddingBottom: 16, rowGap: 12}}>
        <View style={{rowGap: 24}}>
          <View
            style={{
              marginHorizontal: 16,
              rowGap: 12,
            }}>
            <Text numberOfLines={1} style={styles.title}>
              {test.title}
            </Text>
            <Text numberOfLines={2} style={styles.desc}>
              {test.litle_desc}
            </Text>
          </View>

          <View
            style={[styles.inlineBetween, {opacity: progress === 0 ? 0.4 : 1}]}>
            <TouchableOpacity
              disabled={progress === 0}
              style={styles.resetButton}
              onPress={() => resetTest()}>
              <RefreshIcon color="black" size={10} />
              <Text>Reiniciar</Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'right'}}>
              <Text style={{fontSize: 20}}>
                {progress * test.questions.length}/{test.questions.length}
              </Text>{' '}
              preguntas respondidas
            </Text>
          </View>
        </View>
        <ProgressBar progress={progress} color={'#EF6C00'} />
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20, rowGap: 40}}>
        {test.questions.map((question, questionIndex) => (
          <View key={questionIndex}>
            <Text style={{fontSize: 18, fontWeight: '500', marginBottom: 12}}>
              {question}
            </Text>
            {Object.keys(answers).map(option => {
              const optionKey = option as keyof AnswerScale; // Convertir 'option' a keyof AnswerScale
              return (
                <Checkbox.Item
                  key={option}
                  label={optionKey}
                  labelStyle={{fontSize: 14}}
                  status={
                    selectedOptions[questionIndex] ===
                    answerScaleValues[optionKey]
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => handleCheckboxChange(questionIndex, optionKey)}
                />
              );
            })}
          </View>
        ))}
      </ScrollView>
      <View style={styles.inline}>
        <TouchableOpacity
          disabled={progress !== 1}
          onPress={() => {
            navigation.navigate('ResultTest', {
              selectedOptions: selectedValues,
              test: test,
            });
          }}
          style={[styles.endTestButton, {opacity: progress !== 1 ? 0.4 : 1}]}>
          <Text style={{color: 'white'}}>Finalizar Test</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  inlineBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {fontSize: 18, fontWeight: 'bold', textAlign: 'left'},
  desc: {fontSize: 14, fontWeight: '300', textAlign: 'left'},
  resetButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#EF6C00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    columnGap: 8,
  },
  endTestButton: {
    width: '80%',
    backgroundColor: '#558B2F',
    borderRadius: 12,
    padding: 20,
    margin: 12,
    alignItems: 'center',
  },
});

export default TestQuizzScreen;
