import React from 'react';

import {Text} from '@app/components';
import Layout from '@app/components/Layout';
import {RouteProp} from '@react-navigation/native';
import {NavigationScreens} from '@app/navigation';

const CategoryScreen = ({
  route,
}: {
  route: RouteProp<NavigationScreens, 'Category'>;
}) => {
  const {name} = route.params;

  return (
    <Layout>
      <Text>Category: {name}</Text>
    </Layout>
  );
};

export default CategoryScreen;
