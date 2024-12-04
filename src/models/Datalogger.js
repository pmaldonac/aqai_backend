const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Inmersion = require('./Inmersion');

const Datalogger = sequelize.define('Datalogger', {
  dispositivo: { type: DataTypes.STRING(50) },
  idBuzo: { type: DataTypes.INTEGER, allowNull: false },
  idFaena: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: true });

Datalogger.belongsTo(Inmersion, {
  foreignKey: {
    name: 'idBuzo',
    allowNull: false,
  },
  targetKey: 'idBuzo',
  onDelete: 'CASCADE',
});

Datalogger.belongsTo(Inmersion, {
  foreignKey: {
    name: 'idFaena',
    allowNull: false,
  },
  targetKey: 'idFaena',
  onDelete: 'CASCADE',
});

module.exports = Datalogger;
