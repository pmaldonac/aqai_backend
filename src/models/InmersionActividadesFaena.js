const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Inmersion = require('./Inmersion');
const ActividadesFaena = require('./ActividadesFaena');

const InmersionActividadesFaena = sequelize.define('InmersionActividadesFaena', {
    idInmersion: {type: DataTypes.INTEGER, primaryKey:true},
    idActividadFaena: {type: DataTypes.INTEGER, primaryKey:true}
}, { timestamps: true });

InmersionActividadesFaena.belongsTo(Inmersion, { foreignKey: 'idInmersion', onDelete: 'CASCADE' });
InmersionActividadesFaena.belongsTo(ActividadesFaena, { foreignKey: 'idActividadFaena', onDelete: 'CASCADE' });

module.exports = InmersionActividadesFaena;
