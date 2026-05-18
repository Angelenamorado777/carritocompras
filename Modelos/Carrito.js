const sequelize = require('../db/Connection');
const { DataTypes } = require('sequelize');

const Carrito = sequelize.define('carrito', {
  idcarrito: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idproducto: {
    type: DataTypes.INTEGER
  },
  isvProducto: {
    type: DataTypes.DOUBLE
  },
  ordenCompra: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'carrito',
  timestamps: false
});

module.exports = Carrito;