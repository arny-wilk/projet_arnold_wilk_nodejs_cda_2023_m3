const drinksCRUD = require("./drinks.dao.cjs");
const dessertCRUD = require("./dessert.dao.cjs");
const clienCRUD = require("./client.dao.cjs");

const orderDAO = require("../dao/order.dao.cjs");
const clientOrderPrefCRUD = require("../dao/clientOrderPref.dao.cjs");
const pizzaController = require("./pizzaController.cjs");
const pizzaOrderController = require("./pizzaOrderController.cjs");
const drinksController = require("./drinksController.cjs");
const drinksOrderController = require("./drinksOrderController.cjs");
const dessertController = require("./dessertController.cjs");
const dessertOrderController = require("./dessertOrderController.cjs");

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
    pizzaPrice,
    quantityPizza,
    drinksPrice,
    drinkQuantity,
    dessertPrice,
    dessertQuantity,
  } = req.body;

  let order = {
    total_price:
      pizzaPrice * quantityPizza +
      drinksPrice * drinkQuantity +
      dessertPrice * dessertQuantity,
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
  clientDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteOrderById(req, res) {
  clientDAO
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Client deleted successfully",
        client: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function updateClient(req, res) {
  clientDAO
    .updateClient(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Client updated successfully",
        client: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
  clientOrderPrefDAO.updateClientOrderPref();
}

function findClient(req, res) {
  clientDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = orderController;
