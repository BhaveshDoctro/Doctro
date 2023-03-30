module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          services: './src/services',
          features: './src/features',
          types: './src/types',
          utils: './src/utils',
          shared: './src/shared',
          components: './src/components',
        },
      },
    ],
  ],
};
