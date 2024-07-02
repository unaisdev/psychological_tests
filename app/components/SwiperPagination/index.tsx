import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {useActiveTestContext} from '@app/context/Test/hooks/useActiveTestContext';

type Props = {
  index?: number;
  total: number;
  scrollTo: (item: {index: number}) => void;
};

const SwiperPagination = ({scrollTo, total}: Props) => {
  const {selectedOptions, questionIndex} = useActiveTestContext();

  return (
    <View style={styles.container}>
      {new Array(total).fill(null).map((_, i) => (
        <TouchableOpacity
          style={{padding: 2}}
          onPress={() => scrollTo({index: i})}
          key={i}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  i === questionIndex
                    ? '#3F51B5' // Color para el índice actual
                    : selectedOptions[i] !== 0
                    ? '#558B2F'
                    : '#B0BEC5',
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

// backgroundColor:
//   selectedOptions[i] !== 0
//     ? '#558B2F'
//     : i < index
//     ? '#F44336'
//     : '#B0BEC5',

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 60,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 12,
  },
});

export default SwiperPagination;
