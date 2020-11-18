/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postcodes', {
    idpostcodes: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lat: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    log: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'postcodes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpostcodes" },
        ]
      },
    ]
  });
};
