const {DataTypes} = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    idNumber: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    collection: {
        type: DataTypes.STRING,
        defaultValue: '[]',
        allowNull: true,
    },
    mech1: {
        type: DataTypes.STRING,
        defaultValue: '[]',
        allowNull: true,
    },
    mech2: {
        type: DataTypes.STRING,
        defaultValue: '[]',
        allowNull: true,
    },
    mech3: {
        type: DataTypes.STRING,
        defaultValue: '[]',
        allowNull: true,
    },
    mech4: {
        type: DataTypes.STRING,
        defaultValue: '[]',
        allowNull: true,
    }
});

module.exports = User;