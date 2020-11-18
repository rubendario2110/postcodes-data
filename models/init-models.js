var DataTypes = require("sequelize").DataTypes;
var _postcodes = require("./postcodes");

function initModels(sequelize) {
  var postcodes = _postcodes(sequelize, DataTypes);


  return {
    postcodes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
