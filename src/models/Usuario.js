const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db')

const Usuario = sequelize.define('Usuario', {
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  apellido: { type: DataTypes.STRING(50), allowNull: false },
  rut: { type: DataTypes.STRING(12), unique: true, allowNull: false },
  mail: { type: DataTypes.STRING(100) },
  usuario: {type: DataTypes.STRING(50), allowNull: false},
  password: { type: DataTypes.STRING(255), allowNull: false },
  nombreEmpresa: { type: DataTypes.STRING(100) },
  foto:{ type: DataTypes.BLOB }  
}, { timestamps: true });

module.exports = Usuario;
