const db = require("../models/models.cjs");

const OrderDrinks = db.orderDrinks;

let orderDrinksCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  udpateOrderDrinks: updateOrderDrinks,
};

function findAll() {
  return OrderDrinks.findAll();
}

function findById(id) {
  return OrderDrinks.findByPk(id);
}

function deleteById(id) {
  return OrderDrinks.destroy({ where: { id: id } });
}

function create(orderdrinks) {
  let newOrderDrinks = new OrderDrinks(orderdrinks);
  return newOrderDrinks.save();
}

function updateOrderDrinks(orderdrinks, id) {
  let updateOrderDrinks = {
    quant_drinks: orderdrinks.quant_drinks,
  };
  return OrderDrinks.update(updateOrderDrinks, { where: { id: id } });
}

module.exports = orderDrinksCRUD;
