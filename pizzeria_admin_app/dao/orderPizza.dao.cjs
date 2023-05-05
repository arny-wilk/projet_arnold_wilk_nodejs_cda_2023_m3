const db = require("../models/models.cjs");
const orderCRUD = require("./order.dao.cjs")

const OrderPizza = db.orderPizza;

let orderPizzaCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  udpateOrderPizza: updateOrderPizza,
};

function findAll() {
  return OrderPizza.findAll();
}

function findById(id) {
  return OrderPizza.findByPk(id);
}

function deleteById(id) {
  return OrderPizza.destroy({ where: { order_id: id } });
}

function create(orderpizza) {
  let newOrderPizza = new OrderPizza(orderpizza);
  return newOrderPizza.save();
}

function updateOrderPizza(orderpizza, id) {
  let updateOrderPizza = {
    quant_pizza: orderpizza.quant_pizza,
  };
  return OrderPizza.update(updateOrderPizza, { where: { order_id: id } });
}

module.exports = orderPizzaCRUD;
