const db = require("../models/models.cjs");

const Orderboy = db.orderBoy;

let orderBoyCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateOrderboy: updateOrderboy,
};

function findAll() {
  return Orderboy.findAll();
}

function findById(id) {
  return Orderboy.findByPk(id);
}

function deleteById(id) {
  return Orderboy.destroy({ where: { orderboy_id: id } });
}

function create(orderBoy) {
  let newOrderBoy = new Orderboy(orderBoy);
  return newOrderBoy.save();
}

function updateOrderboy(orderBoy, id) {
  let updateOrderboy = {
    firstname_boy: orderBoy.firstname,
    lastname_boy: orderBoy.lastname,
    mail_boy: orderBoy.mail,
    vehicule: orderBoy.vehicule,
  };
  return Orderboy.update(updateOrderboy, { where: { orderboy_id: id } });
}

module.exports = orderBoyCRUD;
