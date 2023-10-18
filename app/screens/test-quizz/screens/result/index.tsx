import React from 'react';

import {Text} from '@app/components';
import {NavigationStackScreens} from '@app/navigation';
import {RouteProp} from '@react-navigation/native';
import Layout from '@app/components/Layout';
import {Test} from '@app/types';

// Función para obtener la categoría basada en el resultado
function getCategoryFromResult(test: Test, result: number) {
  let resultCategory = '';

  // Recorre las categorías del test
  for (const category in test.results) {
    const [minRange, maxRange] = category.split('-').map(Number);

    // Verifica si el resultado está dentro del rango de la categoría
    if (result >= minRange && result <= maxRange) {
      resultCategory = test.results[category];
      break;
    }
  }

  return resultCategory;
}

const ResultTestScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'ResultTest'>;
}) => {
  const {selectedOptions, test} = route.params;

  const score = selectedOptions.reduce((total, current) => total + current, 0);
  const resultCategory = getCategoryFromResult(test, score);

  return (
    <Layout>
      <Text>{JSON.stringify(selectedOptions, null, 4)}</Text>
      <Text>SUMA: {score}</Text>
      <Text>Total posbile: {test.questions.length * 5}</Text>
      <Text>{resultCategory}</Text>
      <Text>Baremos: {JSON.stringify(test.results, null, 4)}</Text>
    </Layout>
  );
};

export default ResultTestScreen;
