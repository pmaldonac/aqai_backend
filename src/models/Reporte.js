const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Inmersion = require('./Inmersion');
const ActividadesFaena = require('./ActividadesFaena');
const Marea = require('./Marea');

const Reporte = sequelize.define('Reporte', {
    tipoReporte: { type: DataTypes.STRING(50), allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    idMarea: { type: DataTypes.INTEGER, allowNull: false },
    documento:{type: DataTypes.JSON}
}, { timestamps: true });

Reporte.belongsTo(Marea, { foreignKey: 'idMarea', onDelete: 'CASCADE' });

module.exports = Reporte;
