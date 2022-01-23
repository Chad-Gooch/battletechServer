const {DataTypes} = require('sequelize');
const db = require('../db');

const Mech = db.define('user', {
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    DLC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    freeTon: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    walk: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    maxJet: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    head: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rightArm: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rightTorso: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    center: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    leftTorso: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    leftArm: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Mech;