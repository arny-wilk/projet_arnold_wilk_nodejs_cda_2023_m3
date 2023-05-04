const clientOrderPrefDAO = require("./dao/clientOrderPref.dao.cjs");

let clientOrderPrefController = {
  addClientOrderPref: addClientOrderPref,
  findClientOrderPref: findClientOrderPref,
  findClientOrderPrefById: findClientOrderPrefById,
  updateClientOrderPref: updateClientOrderPref,
  deleteClientOrderPrefById: deleteClientOrderPrefById,
};

function addClientOrderPref(req, res) {
  let clientOrderPref = req.body;
  clientOrderPrefDAO
    .create(clientOrderPref)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function findClientOrderPrefById(req, res) {
  clientOrderPrefDAO
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

function deleteClientOrderPrefById(req, res) {
  clientOrderPrefDAO
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

function updateClientOrderPref(req, res) {
  clientOrderPrefDAO
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


function findClientOrderPref(req, res) {
  clientOrderPrefDAO
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error message : `, err);
    });
}

module.exports = clientOrderPrefController;
