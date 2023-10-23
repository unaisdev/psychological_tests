module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './app',
          '@components': './app/components',
          '@hooks': './app/hooks',
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
