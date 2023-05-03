const db = require("../models/models.cjs");

const OrderDessert = db.orderDessert;

let orderDessertCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  udpateOrderDessert: updateOrderDessert,
};

function findAll() {
  return OrderDessert.findAll();
}

function findById(id) {
  return OrderDessert.findByPk(id);
}

function deleteById(id) {
  return OrderDessert.destroy({ where: { id: id } });
}

function create(orderdessert) {
  let newOrderDessert= new OrderDessert(orderdessert);
  return newOrderDessert.save();
}

function updateOrderDessert(orderdessert, id) {
  let updateOrderDessert = {
    quant_dessert: orderdessert.quant_dessert,
  };
  return OrderDessert.update(updateOrderDessert, { where: { id: id } });
}

module.exports = orderDessertCRUD;
