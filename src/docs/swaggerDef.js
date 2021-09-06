const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Food App',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      // url: `http://localhost:${config.port}/v1`,
      url: 'http://10.4.41.248:9000/v1',
    },
  ],
};

module.exports = swaggerDef;
