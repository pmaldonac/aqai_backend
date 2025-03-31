const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Clasificacion = sequelize.define('Clasificacion', {
  nombreClasificacion: { type: DataTypes.STRING(100)},
  estaHabilitado: {type: DataTypes.BOOLEAN, defaultValue:true}
}, { timestamps: true });

module.exports = Clasificacion;
