import React, {useEffect, useMemo, useRef, useState} from 'react';

import Layout from '@app/components/Layout';
import {Button, Text} from '@app/components';
import {NavigationStackScreens} from '@app/navigation';
import {RouteProp} from '@react-navigation/native';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {GoBack, RefreshIcon} from '@app/constants/icons';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Checkbox, ProgressBar} from 'react-native-paper';
import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';
import Swiper from 'react-native-swiper';

const TestQuizzScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'Test'>;
}) => {
  const swiperRef = useRef<Swiper>(null);
  const test = route.params;
  const navigation = useStackNavigation();
  const {
    answers,
    progress,
    handleCheckboxChange,
    resetTest,
    selectedValues,
    selectedOptions,
  } = useActiveTestContext();

  const reset = () => {
    resetTest();
    swiperRef.current?.scrollTo(0);
  };

  const handleGoBack = () => {
    resetTest();
    navigation.goBack();
  };

  const selectAnswer = (answerIndex: number, questionIndex: number) => {
    console.log('questionIndex');
    console.log(questionIndex);
    swiperRef.current?.scrollTo(questionIndex + 1);
    handleCheckboxChange(answerIndex, questionIndex);
  };

  return (
    <Layout style={{flex: 1}}>
      <View style={styles.header}>
        <Button
          icon={<GoBack color="black" size={30} />}
          handleOnPress={handleGoBack}
        />
        <View
          style={{
            rowGap: 2,
            alignItems: 'flex-end',
          }}>
          <Text numberOfLines={1} style={styles.title}>
            {test.title}
          </Text>
          <Text numberOfLines={2} style={styles.desc}>
            {test.litle_desc}
          </Text>
        </View>
      </View>
      <View style={{paddingTop: 30, paddingBottom: 16, rowGap: 12}}>
        <View style={{rowGap: 24}}>
          <View
            style={[styles.inlineBetween, {opacity: progress === 0 ? 0.4 : 1}]}>
            <TouchableOpacity
              disabled={progress === 0}
              style={styles.resetButton}
              onPress={() => reset()}>
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
      {/* <ScrollView contentContainerStyle={{paddingHorizontal: 20, rowGap: 40}}> */}
      <Swiper ref={swiperRef} loop={false}>
        {test.questions.map((question, questionIndex) => (
          <View
            key={questionIndex}
            style={{
              flex: 1,
              margin: 16,
              rowGap: 16,
            }}>
            <View style={{rowGap: 16}}>
              <Text>{questionIndex + 1}.</Text>
              <Text style={{fontSize: 18, fontWeight: '500'}}>{question}</Text>
            </View>

            <View style={{flex: 1}}>
              {answers?.map(option => {
                return (
                  <Checkbox.Item
                    key={option.question}
                    label={option.question}
                    labelStyle={{fontSize: 14}}
                    status={
                      selectedOptions[questionIndex] === option.value
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => selectAnswer(option.value, questionIndex)}
                  />
                );
              })}
            </View>
          </View>
        ))}
      </Swiper>
      {/* </ScrollView> */}
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
