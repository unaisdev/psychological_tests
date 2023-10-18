import React from 'react';

import {Button, Text} from '@app/components';
import Layout from '@app/components/Layout';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CategoriesIcon} from '@app/constants/icons';
import useTabNavigation from '@app/hooks/useTabNavigation';
import {Image} from 'react-native';

const HomeScreen = () => {
  const navigation = useTabNavigation();

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{rowGap: 16}}>
          <View>
            <Text style={styles.title}>Tests realizados</Text>
            <Text style={styles.desc}>
              No has contestado ningún test todavía.
            </Text>
          </View>
          <Text>
            Realiza cualquier tipo de test desde la pestaña de categorias, se
            subdividen para poder conseguir una mejor organización de la app.
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/no-tests-answered.png')}
            style={{width: 300, height: 300}}
          />
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Button
            icon={<CategoriesIcon color={'white'} focused={true} />}
            style={styles.categoriesButton}
            handleOnPress={() => navigation?.navigate('Categories')}>
            <Text
              style={{textAlign: 'right', fontWeight: '500', color: 'white'}}>
              Acceder a las categorias
            </Text>
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    rowGap: 16,
    justifyContent: 'space-between',
    flex: 1,
  },
  categoriesButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: '#00838F',
  },
  title: {fontSize: 24, fontWeight: 'bold'},
  desc: {fontSize: 18, fontWeight: '300'},
});

export default HomeScreen;
