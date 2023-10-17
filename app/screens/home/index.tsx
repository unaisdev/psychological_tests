import React from 'react';

import {Button, Text} from '@app/components';
import Layout from '@app/components/Layout';
import {ScrollView, StyleSheet} from 'react-native';
import useStackNavigation from '@app/hooks/useStackNavigation';

const HomeScreen = () => {
  const navigation = useStackNavigation();

  return (
    <Layout style={styles.container}>
      <ScrollView
        style={{backgroundColor: 'green'}}
        contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Tests Psicológicos</Text>
        <Button
          style={styles.categoriesButton}
          handleOnPress={() =>
            navigation?.navigate('Category', {name: 'pepe'})
          }>
          Acceder a las categorias
        </Button>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'red',
  },
  scrollContainer: {padding: 20, backgroundColor: 'cyan', rowGap: 16},
  categoriesButton: {
    backgroundColor: '#9CCC65',
  },
  title: {fontSize: 24, fontWeight: 'bold'},
});

export default HomeScreen;
