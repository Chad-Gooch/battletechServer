require('dotenv').config();
const Sequelize = require('sequelize');

sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
);

/*const sequelize = new Sequelize(`${process.env.DATABASE_URL}`);*/


module.exports = sequelize;