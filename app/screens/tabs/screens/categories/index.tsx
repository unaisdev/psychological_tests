import React from 'react';

import {Text} from '@app/components';
import Layout from '@app/components/Layout';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {DATA_API} from '@app/data';
import {globalStyles} from '@app/constants/styles';

const Categories = () => {
  const navigation = useStackNavigation();

  return (
    <Layout style={globalStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.title}>Categorías</Text>
          <Text style={styles.desc}>
            Elige el tipo de test que deseas realizar
          </Text>
        </View>
        <View style={styles.categories}>
          {DATA_API.categories.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Category', {
                    id: item.id,
                    name: `${item.name}`,
                    desc: item.desc,
                    color: item.color,
                  })
                }
                style={[styles.category, {backgroundColor: item.color}]}>
                <Text numberOfLines={2} style={styles.categoryText}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    rowGap: 16,
    justifyContent: 'flex-start',
    flex: 1,
  },
  categoriesButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: '#9CCC65',
  },
  title: {fontSize: 24, fontWeight: 'bold'},
  desc: {fontSize: 18, fontWeight: '300'},
  categories: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  category: {
    flexGrow: 1,
    maxWidth: '55%',
    height: 60,
    backgroundColor: '#0288D1',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 28,
  },
  categoryText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Categories;
