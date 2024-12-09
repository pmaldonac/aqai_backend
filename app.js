const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/routes/index');
const { sequelize, syncDatabase } = require('./src/models');

const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1/', router);

(async () => {
  try {
    await syncDatabase();
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error);
  }
})();

module.exports = app
