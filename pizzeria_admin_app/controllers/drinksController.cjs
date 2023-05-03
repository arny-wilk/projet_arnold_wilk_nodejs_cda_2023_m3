const drinksDAO = require("../dao/drinks.dao.cjs");

let drinksController = {
  addDrinks: addDrinks,
  findDrinks: findDrinks,
  findDrinksById: findDrinksById,
  updateDrinks: updateDrinks,
  deleteDrinksById: deleteDrinksById,
};

function addDrinks(req, res) {
  let drinks = req.body;
  drinksDAO
    .create(drinks)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findDrinksById(req, res) {
  drinksDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteDrinksById(req, res) {
  drinksDAO.deleteById(req.params.id).then((data) => {
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

function updateDrinks(req, res) {
  drinksDAO
    .udpateDrinks(req.body, req.params.id)
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

function findDrinks(req, res) {
  drinksDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = drinksController;
