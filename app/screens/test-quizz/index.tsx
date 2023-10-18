import React, {useEffect, useMemo, useState} from 'react';

import Layout from '@app/components/Layout';
import {Button, Text} from '@app/components';
import {NavigationStackScreens} from '@app/navigation';
import {RouteProp} from '@react-navigation/native';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {GoBack, RefreshIcon} from '@app/constants/icons';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Checkbox, ProgressBar} from 'react-native-paper';
import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';

const TestQuizzScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'Test'>;
}) => {
  const test = route.params;
  const navigation = useStackNavigation();
  const {
    answered,
    answers,
    progress,
    handleActiveTest,
    handleCheckboxChange,
    resetTest,
    selectedValues,
    selectedOptions,
  } = useActiveTestContext();

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
                  onPress={() =>
                    handleCheckboxChange(option.value, questionIndex)
                  }
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
