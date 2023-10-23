import React, {useEffect, useRef} from 'react';

import Layout from '@app/components/Layout';
import {Button, Text} from '@app/components';
import {NavigationStackScreens} from '@app/navigation';
import {RouteProp} from '@react-navigation/native';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {
  GoBack,
  RefreshIcon,
  SwiperLeftArrow,
  SwiperRightArrow,
} from '@app/constants/icons';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, ProgressBar} from 'react-native-paper';
import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';
import Swiper from 'react-native-swiper';
import SwiperPagination from '@app/components/SwiperPagination';
import Question from './components/Question';

const TestQuizzScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'Test'>;
}) => {
  const swiperRef = useRef<Swiper>(null);
  const test = route.params;
  const navigation = useStackNavigation();
  const {
    progress,
    questionIndex: currentQuestionIndex,
    setQuestionIndex,
    resetTest,
    selectedValues,
  } = useActiveTestContext();

  const reset = () => {
    resetTest();
    swiperRef.current?.scrollTo(0);
  };

  const handleGoBack = () => {
    resetTest();
    navigation.goBack();
  };

  useEffect(() => {
    console.log(currentQuestionIndex);

    swiperRef.current?.scrollTo(currentQuestionIndex);
  }, [swiperRef, currentQuestionIndex]);

  return (
    <Layout style={{flex: 1}}>
      <View style={styles.header}>
        <Button
          icon={<GoBack color="#8E8EA9" size={24} />}
          handleOnPress={handleGoBack}
        />
        <TouchableOpacity
          disabled={progress === 0}
          style={[styles.resetButton, {opacity: progress === 0 ? 0.4 : 1}]}
          onPress={() => reset()}>
          <RefreshIcon color="black" size={10} />
          <Text>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <View style={{rowGap: 12}}>
        <View style={styles.colBetween}>
          <View
            style={{
              alignItems: 'flex-start',
            }}>
            <Text numberOfLines={1} style={styles.title}>
              {test.title}
            </Text>
            <Text numberOfLines={2} style={styles.desc}>
              {test.litle_desc}
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'right',
              opacity: progress === 0 ? 0.4 : 1,
              fontSize: 12,
            }}>
            <Text style={{fontSize: 16}}>
              {progress * test.questions.length} / {test.questions.length}
            </Text>{' '}
            respondidas
          </Text>
        </View>
        <ProgressBar progress={progress} color={'#EF6C00'} />
      </View>
      {/* <ScrollView contentContainerStyle={{paddingHorizontal: 20, rowGap: 40}}> */}
      <View
        style={{
          flex: 1,
          rowGap: 32,
          paddingBottom: 32,
        }}>
        <Swiper
          ref={swiperRef}
          loop={false}
          loadMinimal={true}
          loadMinimalSize={0}
          loadMinimalLoader={<ActivityIndicator />}
          nextButton={<SwiperRightArrow color="black" />}
          prevButton={<SwiperLeftArrow color="black" />}
          renderPagination={(index, total, swiper) => (
            <SwiperPagination index={index} swiper={swiper} total={total} />
          )}
          onIndexChanged={index => setQuestionIndex(index)}
          index={currentQuestionIndex}
          buttonWrapperStyle={{opacity: 0.4}}
          removeClippedSubviews>
          {test.questions.map((question, questionIndex) => {
            console.log('MOUNTING', new Date());
            return (
              <ScrollView
                contentContainerStyle={{flex: 1, rowGap: 16}}
                key={question}
                style={{}}>
                <Question
                  question={question} // Pasa el texto de la pregunta
                  questionIndex={questionIndex}
                />
              </ScrollView>
            );
          })}
        </Swiper>
        <View
          style={[
            styles.inlineAround,
            {
              height: '8%',
              paddingHorizontal: 40,
              justifyContent:
                currentQuestionIndex === test.questions.length - 1
                  ? 'flex-start'
                  : currentQuestionIndex !== 0
                  ? 'space-between'
                  : 'flex-end',
            },
          ]}>
          {currentQuestionIndex !== 0 && (
            <TouchableOpacity
              onPress={() =>
                swiperRef.current?.scrollTo(currentQuestionIndex - 1)
              }>
              <Text style={{fontWeight: '500'}}>Anterior</Text>
            </TouchableOpacity>
          )}
          {currentQuestionIndex !== test.questions.length - 1 && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() =>
                swiperRef.current?.scrollTo(currentQuestionIndex + 1)
              }>
              <Text style={{color: 'white'}}>Siguiente</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* </ScrollView> */}
      {progress === 1 && (
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
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  colBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    rowGap: 2,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  inlineAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    backgroundColor: '#C0C0CF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    columnGap: 8,
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#1E88E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
