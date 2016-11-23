module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactTrixEditor',
      externals: {
        react: 'React'
      }
    }
  }
};
