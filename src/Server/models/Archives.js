const {sequelize} = require('../Util/database')
const {DataTypes} = require('sequelize')

module.exports = {
    Archive: sequelize.define('archive',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        length: {
            type: DataTypes.STRING,
            allowNull: false
        },
        players: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        races: {
            type: DataTypes.ARRAY,
            allowNull: false
        },
        victor: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}