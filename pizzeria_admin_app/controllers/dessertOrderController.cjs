const dessertOrderDAO = require("../dao/orderDrinks.cjs");

let dessertOrderController = {
  addDessertOrder: addDessertOrder,
  findDessertOrder: findDessertOrder,
  findDessertOrderById: findDessertOrderById,
  updateDessertOrder: updateDessertOrder,
  deleteDessertOrderById: deleteDessertOrderById,
};

function addDessertOrder(req, res) {
  let {
    pizzaName,
    pizzaQuantity,
    drinkName,
    drinkQuantity,
    dessertName,
    dessertQuantity,
  } = req.body;

  dessertOrderDAO
    .create({ quant_dessert: dessertQuantity })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findDessertOrderById(req, res) {
  dessertOrderDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteDessertOrderById(req, res) {
  dessertOrderDAO.deleteById(req.params.id).then((data) => {
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

function updateDessertOrder(req, res) {
  dessertOrderDAO
    .updateDessertOrder(req.body, req.params.id)
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

function findDessertOrder(req, res) {
  dessertOrderDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = dessertOrderController;
