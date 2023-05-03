const db = require("../models/models.cjs");

const Pizza = db.pizza;

let pizzaCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  udpatePizza: updatePizza,
};

function findAll() {
  return Pizza.findAll();
}

function findById(id) {
  return Pizza.findByPk(id);
}

function deleteById(id) {
  return Pizza.destroy({ where: { id: id } });
}

function create(pizza) {
  let { pizzaName, price } = pizza;
  let newPizza = new Pizza({ pizza_name: pizzaName, price: price });
  return newPizza.save();
}

function updatePizza(pizza, id) {
  let updatePizza = {
    pizza_name: pizza.pizza_name,
    price: pizza.price,
  };
  return Pizza.update(updatePizza, { where: { id: id } });
}

module.exports = pizzaCRUD;
