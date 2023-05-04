const db = require("../models/models.cjs");

const OrderboyOrderPref = db.orderBoyOrderPref;

let orderBoyOrderPrefCRUD = {
  findAll: findAll,
  findById: findById,
  deleteById: deleteById,
};

function findAll() {
  return OrderboyOrderPref.findAll();
}

function findById(id) {
  return OrderboyOrderPref.findByPk(id);
}

function deleteById(id) {
  return OrderboyOrderPref.destroy({ where: { id: id } });
}

module.exports = orderBoyOrderPrefCRUD;
