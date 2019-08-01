const config = (api) => {
  api.cache(false);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-syntax-class-properties',
      '@babel/plugin-transform-runtime',
      ['babel-plugin-module-resolver', {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js'],
      }],
    ],
  };
};

module.exports = config;