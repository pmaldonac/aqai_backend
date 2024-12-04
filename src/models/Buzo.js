const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db')

const Buzo = sequelize.define('Buzo', {
  nombre: { type: DataTypes.STRING(50), allowNull: false },
  apellido: { type: DataTypes.STRING(50), allowNull: false },
  rut: { type: DataTypes.STRING(12), unique: true, allowNull: false },
  mail: { type: DataTypes.STRING(100) },
  foto: { type: DataTypes.BLOB },
  compania: { type: DataTypes.STRING(100) },
  licenciaBuzo: { type: DataTypes.STRING(50) },
  licenciaBuzoVenc: { type: DataTypes.DATE },
  examMedVenc: { type: DataTypes.DATE },
  contrasena: { type: DataTypes.STRING(255), allowNull: false },
  certificados: { type: DataTypes.BLOB },
  estaHabilitado: {type: DataTypes.BOOLEAN, defaultValue: false}
}, { timestamps: true });

module.exports = Buzo;
