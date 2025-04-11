const { getDefaultConfig } = require('metro-config');

module.exports = async () => {
  const config = await getDefaultConfig();

  config.resolver.alias = {
    '@': require('path').resolve(__dirname, 'src'), // Ajuste conforme a estrutura do seu projeto
  };

  return config;
};
