const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Usuario = require('./Usuario');
const Rol = require('./Rol');

const UsuarioRol = sequelize.define('UsuarioRol', {
    idUsuario: {type: DataTypes.INTEGER, primaryKey:true},
    idRol: {type: DataTypes.INTEGER, primaryKey:true}
}, { timestamps: true });

UsuarioRol.belongsTo(Usuario, { foreignKey: 'idUsuario', onDelete: 'CASCADE' });
UsuarioRol.belongsTo(Rol, { foreignKey: 'idRol', onDelete: 'CASCADE' });

module.exports = UsuarioRol;
