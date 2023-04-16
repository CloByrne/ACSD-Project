const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Project Fitness Backend Docs',
      version: '1.0.0',
      port: process.env.PORT || 8080
    },
  },
  apis: ['./routes/index.js', './routes/contacts.js'],
};

const openapiSpecification = swaggerJsdoc(options);

fs.writeFile('./docs.json', JSON.stringify(openapiSpecification, null, '\t'), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
