const pizzaOrderDAO = require("../dao/orderPizza.dao.cj");

let pizzaOrderController = {
  addPizzaOrder: addPizzaOrder,
  findPizzaOrder: findPizzaOrder,
  findPizzaOrderById: findPizzaOrderById,
  updatePizzaOrder: updatePizzaOrder,
  deletePizzaOrderById: deletePizzaOrderById,
};

function addPizzaOrder(req, res) {
  let {
    pizzaName,
    pizzaQuantity,
    drinkName,
    drinkQuantity,
    dessertName,
    dessertQuantity,
  } = req.body;

  pizzaOrderDAO
    .create({ quant_pizza: pizzaQuantity })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findPizzaOrderById(req, res) {
  pizzaOrderDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deletePizzaOrderById(req, res) {
  pizzaOrderDAO.deleteById(req.params.id).then((data) => {
    res
      .status(200)
      .json({
        message: "Pizza quantity deleted successfully",
        pizza: data,
      })
      .catch((err) => {
        console.log(`Error message : `, err);
      });
  });
}

function updatePizzaOrder(req, res) {
  pizzaOrderDAO
    .udpatePizza(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Pizza quantity updated successfully",
        pizza: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findPizzaOrder(req, res) {
  pizzaOrderDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = pizzaOrderController;
