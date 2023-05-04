const drinksOrderDAO = require("../dao/orderDrinks.cjs");

let drinksOrderController = {
  addDrinksOrder: addDrinksOrder,
  findDrinksOrder: findDrinksOrder,
  findDrinksOrderById: findDrinksOrderById,
  updateDrinksOrder: updateDrinksOrder,
  deleteDrinksOrderById: deleteDrinksOrderById,
};

function addDrinksOrder(req, res) {
  let {
    pizzaName,
    pizzaQuantity,
    drinkName,
    drinkQuantity,
    dessertName,
    dessertQuantity,
  } = req.body;

  drinksOrderDAO
    .create({ quant_drinks: drinkQuantity })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findDrinksOrderById(req, res) {
  drinksOrderDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteDrinksOrderById(req, res) {
  drinksOrderDAO.deleteById(req.params.id).then((data) => {
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

function updateDrinksOrder(req, res) {
  drinksOrderDAO
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

function findDrinksOrder(req, res) {
  drinksOrderDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = drinksOrderController;
