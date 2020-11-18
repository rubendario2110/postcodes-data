let connect = require('../config/config.json');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(connect.db_config.name, connect.db_config.user, connect.db_config.pass, {
    host: 'localhost',  
    dialect: 'mysql',
  })


module.exports = sequelize;