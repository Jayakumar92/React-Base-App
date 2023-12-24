const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@translations': path.resolve(__dirname, 'src/translations'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },
};