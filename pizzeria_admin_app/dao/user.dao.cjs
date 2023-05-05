const db = require("../models/models.cjs");

const User = db.user;

let userCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  udpateUser: updateUser,
};

function findAll() {
  return User.findAll();
}

function findById(id) {
  return User.findByPk(id);
}

function deleteById(id) {
  return User.destroy({ where: { user_id: id } });
}

function create(user) {
  let newUser = new User(user);
  return newUser.save();
}

function updateUser(user, id) {
  let updateUser = {
    user_name: user.userName,
    email: user.email,
    password: user.password,
  };
  return User.update(updateUser, { where: { user_id: id } });
}

module.exports = userCRUD;
