import React from 'react';

import {Button, Text} from '@app/components';
import {NavigationStackScreens} from '@app/navigation';
import {RouteProp} from '@react-navigation/native';
import Layout from '@app/components/Layout';
import {Test} from '@app/types';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {GoBack, RefreshIcon} from '@app/constants/icons';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';

function getCategoryFromResult(test: Test, score: number) {
  let message = '';
  let color = '';

  for (let i = 0; i < test.results.length; i++) {
    const result = test.results[i];
    const [minRange, maxRange] = result.baremo.split('-').map(parseFloat);

    if (score >= minRange && score <= maxRange) {
      message = result.message;
      // Asigna un color basado en la posición en el array de resultados
      color = getColorForPosition(i);
      break;
    }
  }

  return {message, color};
}

// Función para obtener un color basado en la posición en el array
function getColorForPosition(position: number) {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF1744']; // Ejemplo de colores
  // Puedes definir una matriz de colores según tus necesidades

  // Asegurémonos de que la posición no sea mayor que la cantidad de colores disponibles
  const index = Math.min(position, colors.length - 1);

  return colors[index];
}

const ResultTestScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'ResultTest'>;
}) => {
  const navigation = useStackNavigation();

  const {resetTest, selectedOptions, activeTest: test} = useActiveTestContext();

  if (!test) {
    return;
  }

  const score = selectedOptions.reduce((total, current) => total + current, 0);
  const maxScore = test.questions.length * test.answers.length;
  const resultBaremo = getCategoryFromResult(test, score);

  const handleReset = () => {
    navigation.navigate('Test', test);

    resetTest();
  };

  const handleFinish = () => {
    navigation.navigate('Tabs');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Layout style={{rowGap: 12}}>
      <View style={styles.header}>
        <Button
          icon={<GoBack color="#8E8EA9" size={24} />}
          handleOnPress={handleGoBack}
        />
        <TouchableOpacity
          style={[styles.resetButton]}
          onPress={() => handleReset()}>
          <RefreshIcon color="white" size={10} />
          <Text style={{color: 'white'}}>Repetir test</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 20, flex: 1}}>
        <View
          style={{
            backgroundColor: resultBaremo.color,
            padding: 20,
            borderRadius: 18,
          }}>
          <Text style={{fontSize: 32}}>Tu resultado:</Text>
          <Text style={{color: 'white', textAlign: 'right', fontSize: 38}}>
            {score} / {maxScore}
          </Text>
        </View>

        <Text>{resultBaremo.message}</Text>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              height: 104,
              backgroundColor: '#B2DFDB',
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 12,
              borderRadius: 12,
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1592947945242-69312358628b?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              width={104}
              height={104}
              resizeMode="cover"
              borderTopLeftRadius={12}
              borderBottomLeftRadius={12}
            />
            <View
              style={{
                flexGrow: 1,
                height: '80%',
                rowGap: 6,
                paddingRight: 12,
                justifyContent: 'space-between',
              }}>
              <View style={{flexGrow: 1}}>
                <Text style={{fontSize: 16}}>Asier Larruskain</Text>
                <Text style={{fontSize: 12}}>
                  Psicólogo especializado en Ansiedad
                </Text>
              </View>
              <Text style={{fontSize: 12, textAlign: 'right'}}>
                Visita mi página
              </Text>
            </View>
          </View>
        </View>
      </View>
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
    backgroundColor: '#3949AB',
    paddingVertical: 10,
    paddingHorizontal: 16,
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

export default ResultTestScreen;
