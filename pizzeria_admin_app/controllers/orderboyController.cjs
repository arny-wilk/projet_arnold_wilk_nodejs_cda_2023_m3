const orderboyDAO = require("../dao/orderboy.dao.cjs");

let orderBoyController = {
  addOrderBoy: addOrderBoy,
  findOrderboy: findOrderboy,
  findOrderboyById: findOrderboyById,
  updateOrderboy: updateOrderboy,
  deleteOrderboyById: deleteOrderboyById,
};

function addOrderBoy(req, res) {
  let orderBoy = req.body;
  orderboyDAO
    .create(orderBoy)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message: `, err);
    });
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

function deleteOrderboyById(req, res) {
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
}

function updateOrderboy(req, res) {
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
