const db = require("../models/models.cjs");

const ClientOrderPref = db.clientOrderPref;

let clientOrderPrefCRUD = {
  findAll: findAll,
  findById: findById,
  deleteById: deleteById,
};

function findAll() {
  return ClientOrderPref.findAll();
}

function findById(id) {
  return ClientOrderPref.findByPk(id);
}

function deleteById(id) {
  return ClientOrderPref.destroy({ where: { id: id } });
}

module.exports = clientOrderPrefCRUD;
