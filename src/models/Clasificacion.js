const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Clasificacion = sequelize.define('Clasificacion', {
  nombreFaena: { type: DataTypes.STRING(100), allowNull: false },
  estaHabilitado: {type: DataTypes.BOOLEAN, defaultValue:true}
}, { timestamps: true });

module.exports = Clasificacion;
