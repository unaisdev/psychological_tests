import {styles} from '@app/constants';
import React from 'react';

import {PropsWithChildren} from 'react';
import {ColorValue, Text as RNText, TextProps} from 'react-native';

type Props = TextProps &
  PropsWithChildren<{
    textColor?: ColorValue;
  }>;

const Text = ({children, textColor = 'black', ...textProps}: Props) => {
  const style = styles(textColor);

  return (
    <RNText style={style.text} {...textProps}>
      {children}
    </RNText>
  );
};

export default Text;
