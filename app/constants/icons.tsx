import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  size?: number;
  focused?: boolean;
  color: string;
};

export const HomeIcon = ({color, focused, size}: Props) => {
  return (
    <MaterialIcons name="home" color={color} size={focused ? 26 : 22 ?? size} />
  );
};

export const GoBack = ({color, focused, size}: Props) => {
  return (
    <MaterialIcons
      name="arrow-left"
      color={color}
      size={focused ? 26 : 22 ?? size}
    />
  );
};

export const CategoriesIcon = ({color, focused, size}: Props) => {
  return (
    <MaterialIcons
      name="category"
      color={color}
      size={focused ? 26 : 22 ?? size}
    />
  );
};

export const StartTestIcon = ({color, focused, size}: Props) => {
  return (
    <MaterialIcons
      name="play-circle-outline"
      color={color}
      size={focused ? 26 : 22 ?? size}
    />
  );
};

export const RefreshIcon = ({color, focused, size}: Props) => {
  return (
    <MaterialIcons
      name="refresh"
      color={color}
      size={focused && !size ? 26 : 18 ?? size}
    />
  );
};
