const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Marea = require('./Marea');

const Faena = sequelize.define('Faena', {
  fechaInicio: { type: DataTypes.DATE },
  fechaFin: { type: DataTypes.DATE },
  estado: { type: DataTypes.STRING(50) }
}, { timestamps: true });

Faena.belongsTo(Marea, { foreignKey: 'idMarea', onDelete: 'CASCADE' });
module.exports = Faena;
