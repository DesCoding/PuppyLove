// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Swipe = sequelize.define("Swipe", {
    answer: DataTypes.BOOLEAN,
    imageURL: DataTypes.STRING
  });
  return Swipe;
};
