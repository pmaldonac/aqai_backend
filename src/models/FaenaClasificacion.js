const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Faena = require('./Faena');
const Clasificacion = require('./Clasificacion');

const FaenaClasificacion = sequelize.define('FaenaClasificacion', {
    idFaena: {type:DataTypes.INTEGER, primaryKey:true},
    idClasificacion: {type:DataTypes.INTEGER, primaryKey:true}
}, { timestamps: true });

FaenaClasificacion.belongsTo(Faena, { foreignKey: 'idFaena', onDelete: 'CASCADE' });
FaenaClasificacion.belongsTo(Clasificacion, { foreignKey: 'idClasificacion', onDelete: 'CASCADE' });

module.exports = FaenaClasificacion;
