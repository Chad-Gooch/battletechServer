const {DataTypes} = require('sequelize');
const db = require('../db');

const Mech = db.define('mech', {
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    DLC: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    freeTon: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    walk: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxJet: {
        type: DataTypes.INTEGER,
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