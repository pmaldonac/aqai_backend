const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db')

const Rol = sequelize.define('Rol', {
  nombreRol: { type: DataTypes.STRING(50), allowNull: false },
  modulos: { type: DataTypes.STRING(250), allowNull: false },
}, { timestamps: true });

module.exports = Rol;
