const orderboyDAO = require("../dao/orderboy.dao.cjs");

let orderBoyController = {
  addOrderBoy: addOrderBoy,
  findOrderboy: findOrderboy,
  findOrderboyById: findOrderboyById,
  updateOrderboy: updateOrderboy,
  deleteOrderboyById: deleteOrderboyById,
};

function addOrderBoy(req, res, next) {
  let { firstname, lastname, mail, vehicule } = req.body;
  orderboyDAO
    .create({
      firstname_boy: firstname,
      lastname_boy: lastname,
      mail_boy: mail,
      vehicule: vehicule,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message: `, err);
    });
    next();
}

function findOrderboyById(req, res) {
  orderboyDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteOrderboyById(req, res, next) {
  orderboyDAO
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Orderboy deleted successfully",
        orderBoy: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
    next();
}

function updateOrderboy(req, res, next) {
  orderboyDAO
    .updateOrderboy(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Orderboy updated successfully",
        orderBoy: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
    next();
}

function findOrderboy(req, res) {
  orderboyDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = orderBoyController;
