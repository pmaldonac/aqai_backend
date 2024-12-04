const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db')

const Team = sequelize.define('Team', {
  esActivo: { type: DataTypes.BOOLEAN, defaultValue: true },
  nombreEmpresa: {type: DataTypes.STRING(100)}
}, { timestamps: true });

module.exports = Team;
