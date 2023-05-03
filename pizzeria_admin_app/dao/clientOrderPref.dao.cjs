// const db = require("../models/models.cjs");

// const ClientOrderPref = db.clientOrderPref;
// const Order = db.order;

// let clientOrderPrefCRUD = {
//   findAll: findAll,
//   create: create,
//   findById: findById,
//   deleteById: deleteById,
//   updateClientOrderPref: updateClientOrderPref,
// };

// function findAll() {
//   return ClientOrderPref.findAll();
// }

// function findById(id) {
//   return ClientOrderPref.findByPk(id);
// }

// function deleteById(id) {
//   return ClientOrderPref.destroy({ where: { id: id } });
// }

// function create(clientOrderPref) {
//   let { clientId, orderId } = clientOrderPref;
//   let newClientOrderPref = new ClientOrderPref(
//     {
//       clientClientId: clientId,
//       orderOrderId: orderId,
//     },
//     { include: [clientClientId, orderOrderId] }
//   );
//   return newClientOrderPref.save();
// }

// function updateClientOrderPref(clientOrderPref, id) {
//   let { clientId, orderId } = clientOrderPref;
//   let updateClientOrderPref = {
//     clientClientId: clientId,
//     orderOrderId: orderId,
//   };
//   return ClientOrderPref.update(updateClientOrderPref, { where: { id: id } });
// }

// module.exports = clientOrderPrefCRUD;
