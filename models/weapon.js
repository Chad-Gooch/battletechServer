const {DataTypes} = require('sequelize');
const db = require('../db');

const Weapon = db.define('user', {
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
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    shots: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    damage: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    stability: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    heat: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    minRange: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    maxRange: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    DLC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Weapon;