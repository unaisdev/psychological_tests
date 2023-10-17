import {ColorValue, StyleSheet} from 'react-native';

export const styles = (color?: ColorValue) => {
  return StyleSheet.create({
    text: {
      color: color,
    },
  });
};
