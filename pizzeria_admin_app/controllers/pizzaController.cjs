const pizzaDAO = require("../dao/pizza.dao.cjs");

let pizzaController = {
  addPizza: addPizza,
  findPizza: findPizza,
  findPizzaById: findPizzaById,
  updatePizza: updatePizza,
  deletePizzaById: deletePizzaById,
};

function addPizza(req, res, next) {
  let { pizzaName, price } = req.body;
  pizzaDAO
    .create({ pizza_name: pizzaName, price: price })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
    next();
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

function deletePizzaById(req, res, next) {
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
  next();
}

function updatePizza(req, res, next) {
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
    next();
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
