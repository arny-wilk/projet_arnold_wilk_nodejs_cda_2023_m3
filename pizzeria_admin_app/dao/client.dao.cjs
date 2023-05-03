const db = require("../models/models.cjs");
const Client = db.client;

let clientCRUD = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateClient: updateClient,
};

function findAll() {
  return Client.findAll();
}

function findById(id) {
  return Client.findByPk(id);
}

function deleteById(id) {
  return Client.destroy({ where: { id: id } });
}

function create(client) {
  let { firstname, lastname, mail, address, zipcode } = client;

  let newClient = new Client(
    {
      firstname: firstname,
      lastname: lastname,
      mail: mail,
      address: address,
      zipcode: zipcode,
    },
    {
      include: [
        { association: db.clientOrderPref },
        { association: db.clientCreditCard },
      ],
    }
  );
  return newClient.save();
}

function updateClient(client, id) {
  let updateClient = {
    firstname: client.firstname,
    lastname: client.lastname,
    mail: client.mail,
    address: client.address,
    zipcode: client.zipcode,
  };
  return Client.update(updateClient, { where: { id: id } });
}

module.exports = clientCRUD;
