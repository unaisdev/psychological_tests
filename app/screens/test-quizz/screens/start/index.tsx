import React from 'react';

import {Button, Text} from '@app/components';
import Layout from '@app/components/Layout';
import {StyleSheet, View} from 'react-native';
import useStackNavigation from '@app/hooks/useStackNavigation';
import {GoBack, StartTestIcon} from '@app/constants/icons';
import {NavigationStackScreens} from '@app/navigation';
import {RouteProp} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';

const StartTestQuizzScreen = ({
  route,
}: {
  route: RouteProp<NavigationStackScreens, 'StartTest'>;
}) => {
  const {top} = useSafeAreaInsets();
  const test = route.params;
  const {handleActiveTest} = useActiveTestContext();

  const navigation = useStackNavigation();

  const handleStartTest = () => {
    handleActiveTest(test);
    navigation.navigate('Test', {...test});
  };

  return (
    <Layout style={[styles.container, {marginTop: top}]}>
      <View style={styles.header}>
        <Button
          icon={<GoBack color="black" size={30} />}
          handleOnPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.title}>{test.title}</Text>
          <Text style={styles.litle_desc}>{test.litle_desc}</Text>
        </View>
        <Text numberOfLines={10}>{test.desc}</Text>

        <View />
        <View style={{rowGap: 6}}>
          <Text style={{fontSize: 20, textAlign: 'right'}}>
            {test.questions.length} preguntas
          </Text>
          <Text style={{fontSize: 20, textAlign: 'right'}}>
            Tiempo aproximado: 3 min
          </Text>
        </View>
      </View>
      <Button
        icon={<StartTestIcon color="white" size={22} />}
        style={styles.startButton}
        handleOnPress={handleStartTest}>
        <Text style={{color: 'white', fontSize: 18}}>Empezar test</Text>
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: 64,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyContainer: {
    flex: 1,
    padding: 20,
    rowGap: 24,
    justifyContent: 'flex-start',
  },
  categoriesButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: '#9CCC65',
  },
  title: {fontSize: 24, fontWeight: 'bold'},
  litle_desc: {fontSize: 18, fontWeight: '300'},
  desc: {fontWeight: 'normal'},
  startButton: {
    alignItems: 'flex-end',
    backgroundColor: '#689F38',
    borderRadius: 12,
    padding: 24,
    justifyContent: 'center',
    margin: 20,
  },
});

export default StartTestQuizzScreen;
