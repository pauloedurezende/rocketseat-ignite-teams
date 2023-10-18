module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@components': './src/components',
            '@assets': './assets',
            '@types': './src/@types',
          },
        },
      ],
    ],
  };
};
