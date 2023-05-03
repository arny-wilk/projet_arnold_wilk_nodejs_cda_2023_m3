const db = require("../models/models.cjs");

const Dessert = db.dessert;

let dessertCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  udpateDessert: updateDessert,
};

function findAll() {
  return Dessert .findAll();
}

function findById(id) {
  return Dessert .findByPk(id);
}

function deleteById(id) {
  return Dessert .destroy({ where: { id: id } });
}

function create(dessert) {
  let newDessert = new Dessert (dessert);
  return newDessert.save();
}

function updateDessert(dessert, id) {
  let updateDessert = {
    dessert_name: dessert.dessert_name,
    price: dessert.price,
  };
  return Dessert .update(updateDessert, { where: { id: id } });
}

module.exports = dessertCRUD;
