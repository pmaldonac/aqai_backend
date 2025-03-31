const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Buzo = require('./Buzo');
const Faena = require('./Faena');

const Inmersion = sequelize.define('Inmersion', {
  idBuzo: { type: DataTypes.INTEGER, primaryKey:true, references: {
    model: Buzo,
    key: 'id',
  }},
  idFaena: { type: DataTypes.INTEGER, primaryKey:true, references: {
    model: Faena,
    key: 'id',
  }},
  tiempoInicio: { type: DataTypes.DATE },
  estado: {type:DataTypes.STRING(100)},
  tiempoFinal: { type: DataTypes.DATE },
  tiempoTotal: { type: DataTypes.INTEGER },
  fotoInicial: { type: DataTypes.BLOB },
  fotoFinal: { type: DataTypes.BLOB },
  observacion: { type: DataTypes.TEXT },
  jsonData: { type: DataTypes.JSON }
}, { timestamps: true , indexes: [
  {
    unique: true,
    fields: ['idBuzo', 'idFaena'], 
  },
]});

Inmersion.belongsTo(Buzo, { foreignKey: 'idBuzo', onDelete: 'CASCADE' });
Inmersion.belongsTo(Faena, { foreignKey: 'idFaena', onDelete: 'CASCADE' });

module.exports = Inmersion;
