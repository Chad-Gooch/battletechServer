require('dotenv').config();
const Sequelize = require('sequelize');

//const sequelize = new Sequelize(`${DATABASE_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`);


sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);


module.exports = sequelize;