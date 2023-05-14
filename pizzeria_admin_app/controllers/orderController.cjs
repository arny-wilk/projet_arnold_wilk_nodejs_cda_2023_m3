const pizzaCRUD = require("../dao/pizza.dao.cjs");
const drinksCRUD = require("../dao/drinks.dao.cjs");
const dessertCRUD = require("../dao/dessert.dao.cjs");

const orderDAO = require("../dao/order.dao.cjs");
const { default: clientCRUD } = require("../dao/client.dao.cjs");
const orderPizzaDAO = require("../dao/orderPizza.dao.cjs");
const orderDrinksDAO = require("../dao/orderDrinks.cjs");
const orderDessertDAO = require("../dao/orderDessert.cjs");

// BUSINESS LOGIC HERE !!!!

let orderController = {
  addOrder: addOrder,
  findOrder: findOrder,
  findOrderById: findOrderById,
  updateOrder: updateOrder,
  deleteOrderById: deleteOrderById,
};

function addOrder(req, res) {
  const {
    pizzaName,
    pizzaQuantity,
    drinkName,
    drinkQuantity,
    dessertName,
    dessertQuantity,
    clientFirstname,
    clientLastname,
    address,
  } = req.body;

  const pizza = pizzaCRUD.findAll({ where: { pizza_name: pizzaName } });
  const drink = drinksCRUD.findAll({ where: { drink_name: drinkName } });
  const dessert = dessertCRUD.findAll({ where: { dessert_name: dessertName } });
  const client = clientCRUD.findAll({
    where: {
      firstname: clientFirstname,
      lastname: clientLastname,
      address: address,
    },
  });

  const orderPizza = {};
  const orderDrinks = {};
  const orderDessert = {};

  const order = {
    total_price:
      parseFloat(pizza.price) * parseFloat(pizzaQuantity) +
      parseFloat(drink.price) * parseFloat(drinkQuantity) +
      parseFloat(dessert.price) * parseFloat(dessertQuantity),
    clientClientId: client.clientId,
    include: [
      {
        association: orderPizza,
        include: [pizzaQuantity, pizza.pizza_id],
      },
      {
        association: orderDrinks,
        include: [drinkQuantity, drink.drink_id_],
      },
      {
        association: orderDessert,
        include: [dessertQuantity, dessert.dessert_id_],
      },
    ],
  };

  orderDAO
    .create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });

  // orderPizzaDAO
  //   .create(orderPizza)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.log(`Error message : `, err);
  //   });

  // orderDrinksDAO
  //   .create(orderDrinks)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.log(`Error message : `, err);
  //   });

  // orderDessertDAO
  //   .create(orderDessert)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.log(`Error message : `);
  //   });
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
