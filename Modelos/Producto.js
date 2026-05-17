const sequelize = require('../db/Connection');
const { DataTypes } = require('sequelize');


const Producto=sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    precio:{
        type: DataTypes.DOUBLE,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
    imagen:{
        type: DataTypes.STRING,
    }
},{
    tableName: 'Producto',
    timestamps: false,
})

module.exports = Producto;