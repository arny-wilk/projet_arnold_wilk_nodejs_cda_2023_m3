const clientDAO = require("../dao/client.dao.cjs");

const clientOrderPrefDAO = require("./dao/clientOrderPref.dao.cjs");

let clientController = {
  addClient: addClient,
  findClient: findClient,
  findClientById: findClientById,
  updateClient: updateClient,
  deleteClientById: deleteClientById,
};

function addClient(req, res) {
  let client = req.body;
  clientDAO
    .create(client)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findClientById(req, res) {
  clientDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteClientById(req, res) {
  clientDAO
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Client deleted successfully",
        client: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function updateClient(req, res) {
  clientDAO
    .updateClient(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Client updated successfully",
        client: data,
      });
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
    clientOrderPrefDAO.updateClientOrderPref()
}


function findClient(req, res) {
  clientDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = clientController;
