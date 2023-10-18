import React from 'react';

import {Button, Text} from '@app/components';
import Layout from '@app/components/Layout';
import {RouteProp} from '@react-navigation/native';
import {NavigationStackScreens} from '@app/navigation';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {GoBack} from '@app/constants/icons';
import {DATA_API} from '@app/data';

const CategoryScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'Category'>;
}) => {
  const {name, desc, id} = route.params;
  const navigation = useStackNavigation();

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Button
          icon={<GoBack color="black" size={30} />}
          handleOnPress={() => navigation.goBack()}
        />
      </View>
      <View style={{padding: 20}}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {DATA_API.tests
          .filter(item => item.category === id)
          .map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('StartTest', {...item})}>
                <View style={styles.testButton}>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'gray'}}>{item.litle_desc}</Text>
                  <Text style={{textAlign: 'right'}}>
                    {item.questions.length} preguntas
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 64,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
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
  testButton: {
    rowGap: 10,
    backgroundColor: '#B2EBF2',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});

export default CategoryScreen;
