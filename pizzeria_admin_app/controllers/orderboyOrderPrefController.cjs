const orderboyOrderPrefDAO = require("../dao/orderboy.dao.cjs");

let orderBoyOrderPrefController = {
  addOrderBoyOrderPref: addOrderBoyOrderPref,
  findOrderboyOrderPref: findOrderboyOrderPref,
  findOrderboyOrderPrefById: findOrderboyOrderPrefById,
  updateOrderboyOrderPref: updateOrderboyOrderPref,
  deleteOrderboyOrderPrefById: deleteOrderboyOrderPrefById,
};

function addOrderBoyOrderPref(req, res) {
  let { statusDelivery } = req.body;
  orderboyOrderPrefDAO
    .create({ status: statusDelivery })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message: `, err);
    });
}

function findOrderboyOrderPrefById(req, res) {
  orderboyOrderPrefDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteOrderboyOrderPrefById(req, res) {
  orderboyOrderPrefDAO
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Orderboy Status Delivery deleted successfully",
        orderBoy: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function updateOrderboyOrderPref(req, res) {
  orderboyOrderPrefDAO
    .updateOrderboy(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Orderboy Status Delivery updated successfully",
        status: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findOrderboyOrderPref(req, res) {
  orderboyOrderPrefDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = orderBoyOrderPrefController;
