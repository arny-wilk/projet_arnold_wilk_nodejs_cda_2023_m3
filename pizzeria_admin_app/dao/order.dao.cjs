const db = require("../models/models.cjs");

const Order = db.order;
const OrderPizza = db.orderPizza;
const OrderDrinks = db.orderDrinks;
const OrderDessert = db.orderDessert;

let orderCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateOrder: updateOrder,
};

function findAll() {
  return Order.findAll();
}

function findById(id) {
  return Order.findByPk(id);
}

function deleteById(id) {
  return Order.destroy({ where: { id: id } });
}

function create(order) {
  let newOrder = new Order(order);
  return newOrder.save();
}

function updateOrder(order, id) {
  let updateOrder = {
    total_price: order.total_price,
  };
  return Order.update(updateOrder, { where: { id: id } });
}

module.exports = orderCRUD;
