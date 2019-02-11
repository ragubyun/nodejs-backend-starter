import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  info: {
    title: 'Node.js Backend Starter APIs',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  apis: ['src/routes/*.js'],
};

export default swaggerJSDoc(options);
