const pizzaDAO = require("../dao/pizza.dao.cjs");

let pizzaController = {
  addPizza: addPizza,
  findPizza: findPizza,
  findPizzaById: findPizzaById,
  updatePizza: updatePizza,
  deletePizzaById: deletePizzaById,
};

function addPizza(req, res) {
  let pizza = req.body;
  pizzaDAO
    .create(pizza)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findPizzaById(req, res) {
  pizzaDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deletePizzaById(req, res) {
  pizzaDAO.deleteById(req.params.id).then((data) => {
    res
      .status(200)
      .json({
        message: "Pizza deleted successfully",
        pizza: data,
      })
      .catch((err) => {
        console.log(`Error message : `, err);
      });
  });
}

function updatePizza(req, res) {
  pizzaDAO
    .udpatePizza(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Pizza updated successfully",
        pizza: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findPizza(req, res) {
  pizzaDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = pizzaController;
