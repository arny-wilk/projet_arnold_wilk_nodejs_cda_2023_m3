const pizzaCRUD = require("../dao/pizza.dao.cjs");
const drinksCRUD = require("../dao/drinks.dao.cjs");
const dessertCRUD = require("../dao/dessert.dao.cjs");

const orderDAO = require("../dao/order.dao.cjs");

// BUSINESS LOGIC HERE !!!!

let orderController = {
  addOrder: addOrder,
  findOrder: findOrder,
  findOrderById: findOrderById,
  updateOrder: updateOrder,
  deleteOrderById: deleteOrderById,
};

function addOrder(req, res) {

  let {
    pizzaName,
    pizzaQuantity,
    drinkName,
    drinkQuantity,
    dessertName,
    dessertQuantity,
  } = req.body;

  let pizza = pizzaCRUD.findAll({ where: { pizza_name: pizzaName}});
  let drink = drinksCRUD.findAll({ where: { drink_name: drinkName}});
  let dessert = dessertCRUD.findAll( { where: { dessert_name: dessertName}});

  let order = {
    total_price:
      parseFloat(pizza.price) * parseFloat(pizzaQuantity) +
      parseFloat(drink.price) * parseFloat(drinkQuantity) +
      parseFloat(dessert.price) * parseFloat(dessertQuantity),
  };

  orderDAO
    .create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findOrderById(req, res) {
  orderDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteOrderById(req, res) {
  orderDAO
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Order deleted successfully",
        client: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function updateOrder(req, res) {
  orderDAO
    .updateClient(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Order updated successfully",
        client: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findOrder(req, res) {
  orderDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = orderController;