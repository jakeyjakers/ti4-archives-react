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
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        races: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
            allowNull: false
        },
        victor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        story: {
            type: DataTypes.TEXT({limit: 10000}),
            allowNull: true
        },
       
    },  {
        freezeTableName: true,
    },
    )
}
