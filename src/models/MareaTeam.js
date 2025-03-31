const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Marea = require('./Marea');
const Team = require('./Team');

const MareaTeam = sequelize.define('MareaTeam', {
    idMarea:{type:DataTypes.INTEGER, allowNull: false, primaryKey:true},
    idTeam:{type: DataTypes.INTEGER, allowNull: false, primaryKey:true},
}, { timestamps: true });

Marea.belongsToMany(Team, { through: MareaTeam, foreignKey: 'idMarea' });
Team.belongsToMany(Marea, { through: MareaTeam, foreignKey: 'idTeam' });

module.exports = MareaTeam;
