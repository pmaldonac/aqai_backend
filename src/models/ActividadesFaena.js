const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Clasificacion = require('./Clasificacion');

const ActividadesFaena = sequelize.define('ActividadesFaena', 
  {
  nombreActividad: { type: DataTypes.STRING(100), allowNull: false },
  esActivo:{type: DataTypes.BOOLEAN, defaultValue: false}
}, { timestamps: true });

ActividadesFaena.belongsTo(Clasificacion, { foreignKey: 'idClasificacion', onDelete: 'CASCADE' });

module.exports = ActividadesFaena;
