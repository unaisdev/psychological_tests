import React, {PropsWithChildren} from 'react';

import {SafeAreaView, StyleSheet, ViewProps} from 'react-native';

type Props = ViewProps & PropsWithChildren;
//type Props = PropsWithChildren<ViewProps>;

const Layout = ({children, style, ...props}: Props) => {
  return (
    <SafeAreaView {...props} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
