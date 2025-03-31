const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Faena = require('./Faena');
const Buzo = require('./Buzo');
const ActividadesFaena = require('./ActividadesFaena');

const InmersionActividadesFaena = sequelize.define('InmersionActividadesFaena', {
    idFaena: {type: DataTypes.INTEGER, primaryKey:true},
    idBuzo: {type: DataTypes.INTEGER, primaryKey:true},
    idActividadFaena: {type: DataTypes.INTEGER, primaryKey:true}
}, { timestamps: true });

InmersionActividadesFaena.belongsTo(Faena, { foreignKey: 'idFaena', onDelete: 'CASCADE' });
InmersionActividadesFaena.belongsTo(Buzo, { foreignKey: 'idBuzo', onDelete: 'CASCADE' });
InmersionActividadesFaena.belongsTo(ActividadesFaena, { foreignKey: 'idActividadFaena', onDelete: 'CASCADE' });

module.exports = InmersionActividadesFaena;
