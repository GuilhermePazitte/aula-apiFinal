const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Conquista = sequelize.define('Consquistas', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    nameConquista: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descConquista: {
        type: DataTypes.STRING,
        allowNull: false

    }
});

module.exports = Conquista;