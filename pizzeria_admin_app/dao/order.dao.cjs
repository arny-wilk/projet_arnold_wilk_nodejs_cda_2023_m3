const db = require("../models/models.cjs");

const Order = db.order;
const OrderClient = db.orderClient;
const OrderPizza = db.orderPizza;
const OrderDrinks = db.orderDrinks;
const OrderDessert = db.orderDessert;

let orderCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateOrder: updateOrder,
  updateOrderPizza: updateOrderPizza,
  updateOrderDrinks: updateOrderDrinks,
  updateOrderDessert: updateOrderDessert,
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
    total_price: order.total_price
};
  return Order.update(updateOrder, { where: { id: id } });
}

function updateOrderPizza(orderPizza, id) {
  let updateOrderPizza = {
    quant_pizz: orderPizza.quant_pizz
};
  return OrderPizza.update(updateOrderPizza, { where: { id: id } });
}

function updateOrderDrinks(orderDrinks, id) {
  let updateOrderDrinks = {
    quant_drinks: orderDrinks.quant_drinks
};
  return OrderDrinks.update(updateOrderDrinks, { where: { id: id } });
}

function updateOrderDessert(orderDessert, id) {
  let updateOrderDessert = {
    quand_dessert: orderDessert.quand_dessert
};
  return OrderDessert.update(updateOrderDessert, { where: { id: id } });
}

module.exports = orderCRUD;
