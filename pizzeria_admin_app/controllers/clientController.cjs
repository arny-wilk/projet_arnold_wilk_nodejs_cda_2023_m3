const clientDAO = require("../dao/client.dao.cjs");

const clientOrderPrefDAO = require("../dao/clientOrderPref.dao.cjs");

let clientController = {
  addClient: addClient,
  findClient: findClient,
  findClientById: findClientById,
  updateClient: updateClient,
  deleteClientById: deleteClientById,
};

function addClient(req, res, next) {
  let client = req.body;
  clientDAO
    .create(client)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
    next();
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

async function deleteClientById(req, res, next) {
  await clientDAO
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
    next();
}

async function updateClient(req, res, next) {
  await clientDAO
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
    next()
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
