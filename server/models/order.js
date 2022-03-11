'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.product, {
        as: "product",
        foreignKey: {
          name: "idProduct"
        }
      })
      order.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name : "idUser",
        }
      })
      order.belongsTo(models.toping, {
        as: "toping",
        foreignKey: {
          name: "idToping"
        }
      })
    }
  }
  order.init({
    idUser: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    idToping: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};