const sequelize = require('../../config/db');
const Buzo = require('./Buzo');
const Team = require('./Team');
const BuzoTeam = require('./BuzoTeam');
const Marea = require('./Marea');
const MareaTeam = require('./MareaTeam');
const Faena = require('./Faena');
const Clasificacion = require('./Clasificacion');
const FaenaClasificacion = require('./FaenaClasificacion');
const ActividadesFaena = require('./ActividadesFaena');
const Inmersion = require('./Inmersion');
const InmersionActividadesFaena = require('./InmersionActividadesFaena');
const Datalogger = require('./Datalogger');
const Reporte = require('./Reporte');
const Usuario = require('./Usuario');
const Rol = require('./Rol');
const UsuarioRol = require('./UsuarioRoles');


async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');
    
    await sequelize.sync({ alter: true });
    console.log('Tablas sincronizadas.');

  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

module.exports = {
    syncDatabase
}
