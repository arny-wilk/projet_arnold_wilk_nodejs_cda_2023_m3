const dessertDAO = require("../dao/dessert.dao.cjs");

let dessertController = {
  addDessert: addDessert,
  findDessert: findDessert,
  findDessertById: findDessertById,
  updateDessert: updateDessert,
  deleteDessertById: deleteDessertById,
};

function addDessert(req, res) {
  let dessert = req.body;
  dessertDAO
    .create(dessert)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findDessertById(req, res) {
  dessertDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteDessertById(req, res) {
  dessertDAO.deleteById(req.params.id).then((data) => {
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

function updateDessert(req, res) {
  dessertDAO
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

function findDessert(req, res) {
  dessertDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = dessertController;
