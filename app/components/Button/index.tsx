import React from 'react';

import {PropsWithChildren} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Text from '../Text';

interface Props extends PropsWithChildren<TouchableOpacityProps> {
  handleOnPress: () => void;
}

const Button = ({children: title, handleOnPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 14,
  },
});

export default Button;
