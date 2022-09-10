const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
const modelUser = require('./models/User');

dotenv.config();

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

modelUser(sequelize);

module.exports = {
    ...sequelize.models,
    db: sequelize,
}

