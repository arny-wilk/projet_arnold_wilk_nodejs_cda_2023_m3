const db = require("../models/models.cjs");

const Drinks = db.drinks;

let drinksCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  udpateDrinks: updateDrinks,
};

function findAll() {
  return Drinks.findAll();
}

function findById(id) {
  return Drinks.findByPk(id);
}

function deleteById(id) {
  return Drinks.destroy({ where: { id: id } });
}

function create(drinks) {
  let newDrinks = new Drinks(drinks);
  return newDrinks.save();
}

function updateDrinks(drinks, id) {
  let updateDrinks = {
    drink_name: drinks.drink_name,
    price: drinks.price,
  };
  return Drinks.update(updateDrinks, { where: { id: id } });
}

module.exports = drinksCRUD;
