const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Marea = require('./Marea');
const Team = require('./Team');

const MareaTeam = sequelize.define('MareaTeam', {}, { timestamps: true });

Marea.belongsToMany(Team, { through: MareaTeam, foreignKey: 'idMarea' });
Team.belongsToMany(Marea, { through: MareaTeam, foreignKey: 'idTeam' });

module.exports = MareaTeam;
