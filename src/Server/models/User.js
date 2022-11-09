const { sequelize } = require('../Util/database')
const { DataTypes } = require('sequelize')

module.exports = {
    User: sequelize.define('user',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            limit: 30
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}