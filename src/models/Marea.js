const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Marea = sequelize.define('Marea', {
  nombreCompania: { type: DataTypes.STRING(100) },
  fechaInicio: { type: DataTypes.DATE },
  fechaFin: { type: DataTypes.DATE },
}, { timestamps: true });

module.exports = Marea;
