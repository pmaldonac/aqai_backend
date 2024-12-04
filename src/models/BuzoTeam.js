const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Buzo = require('./Buzo');
const Team = require('./Team');

const BuzoTeam = sequelize.define('BuzoTeam', {
    idBuzo:{type:DataTypes.INTEGER, allowNull: false, primaryKey:true},
    idTeam:{type: DataTypes.INTEGER, allowNull: false, primaryKey:true},
    esSupervisor: {type:DataTypes.BOOLEAN, allowNull:false, defaultValue: false},
    fechaInicio: {type: DataTypes.DATE, allowNull:false},
    fechaTermino: {type: DataTypes.DATE, defaultValue:null}
}, { timestamps: true });

BuzoTeam.belongsTo(Buzo, { foreignKey: 'idBuzo', onDelete: 'CASCADE' });
BuzoTeam.belongsTo(Team, { foreignKey: 'idTeam', onDelete: 'CASCADE' });

module.exports = BuzoTeam;