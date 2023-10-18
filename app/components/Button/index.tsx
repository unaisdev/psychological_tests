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
  icon?: React.ReactNode;
}

const Button = ({children: title, handleOnPress, style, icon}: Props) => {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={[styles.container, style]}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    columnGap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});

export default Button;
