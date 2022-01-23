const {DataTypes} = require('sequelize');
const db = require('../db');

const Weapon = db.define('weapon', {
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    shots: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    damage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stability: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    heat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    minRange: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxRange: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    DLC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Weapon;