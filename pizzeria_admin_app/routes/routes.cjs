// Importing modules
const express = require("express");
const userController = require("../controllers/userController.cjs");
const pizzaController = require("../controllers/pizzaController.cjs");
const clientController = require("../controllers/clientController.cjs");
const orderBoyController = require("../controllers/orderboyController.cjs");
const orderController = require("../controllers/orderController.cjs");

const { signup, login } = userController;
const userAuth = require("../middlewares/userAuth.cjs");

const userDAO = require("../dao/user.dao.cjs");
const pizzaDAO = require("../dao/pizza.dao.cjs");
const clientDAO = require("../dao/client.dao.cjs");
const orderboyDAO = require("../dao/orderboy.dao.cjs");
const orderDAO = require("../dao/order.dao.cjs");
const { clientCRUD } = require("../dao/client.dao.cjs");
const { orderBoy } = require("../models/models.cjs");

const { addPizza, updatePizza, deletePizzaById } = pizzaController;
const { addClient, updateClient, deleteClientById } = clientController;
const { addOrderBoy, updateOrderboy, deleteOrderboyById } = orderBoyController;
const { addOrder, updateOrder, deleteOrderById } = orderController;

const router = express.Router();

///////////////////////////////////////////////////
/**
 * Redirection de la page d'accueil vers la page de login
 */
router.get("/", (req, res) => {
  res.redirect("/login");
});

router.get("/signup", (req, res) => {
  // code pour faire le rendu de la page d'inscription
  res.render("signup");
});

///////////////////////////////////////////////////
/**
 *  On créé le point d'entrée correspondant à l'inscription de l'utlisateur
 *  On passe le middleware à la fonction d'inscription
 * Et on fait une redirection vers la page  /users/list
 */
router.post("/signup", userAuth.saveUser, signup, (req, res) => {
  res.redirect("/login");
});

router.get("/login", (req, res) => {
  // code pour faire le rendu de la page de login
  res.render("login", {});
});

/**
 * On créé la route permettant de vérifier avec le middleware l'authentification de l'utilisateur
 * On attache le middleware d'authentification de l'utilisateur et on fait une redirection vers
 * la page /users/list
 */
router.post("/login", login, (req, res) => {
  res.redirect("/users/list");
});

///////////////////////////////////////////////////
/**
 * Rendu de la page utilisateur
 * Application des operations CRUD pour chaque utilisateur
 * via les boutons d'action Editer er Supprimer
 */
router.get("/users/list", async (req, res) => {
  const renderAllUser = await userDAO.findAll();
  res.render("userList", {
    values: renderAllUser,
  });
});
router.get("/users/list/add", (req, res) => {
  res.render("user");
});
router.post("/users/list/add", signup, (req, res) => {
  res.redirect("/users/list");
});

router.get("/users/list/update/:id", async (req, res) => {
  const user = await userDAO.findById(req.params.id);
  res.render("userUpdate", {
    valueId: user.user_id,
    valueUserName: user.user_name,
    valueEmail: user.email,
    valuePassword: user.password,
  });
});

router.post(
  "/users/list/update/:id",
  async (req, res, next) => {
    let userId = req.params.id;
    let userBody = req.body;
    await userDAO.udpateUser(userBody, userId);
    next();
  },
  (req, res) => {
    res.redirect("/users/list");
  }
);

router.get("/users/list/delete/:id", async (req, res) => {
  let userId = req.params.id;
  const user = await userDAO.findById(userId);
  res.render("userDelete", {
    valueId: user.user_id,
    valueUserName: user.user_name,
    valueEmail: user.email,
    valuePassword: user.password,
  });
});

router.post(
  "/users/list/delete/:id",
  async (req, res, next) => {
    await userDAO.deleteById(req.params.id);
    next();
  },
  (req, res) => {
    res.redirect("/users/list");
  }
);

///////////////////////////////////////////////////
router.get("/pizza/list", async (req, res) => {
  const renderAllPizza = await pizzaDAO.findAll();
  res.render("pizzalist", {
    values: renderAllPizza,
  });
});
router.get("/pizza/list/add", (req, res) => {
  res.render("pizza");
});
router.post("/pizza/list/add", addPizza, (req, res) => {
  res.redirect("/pizza/list");
});

router.get("/pizza/list/update/:id", async (req, res) => {
  const pizza = await pizzaDAO.findById(req.params.id);
  res.render("pizzaUpdate", {
    valueId: pizza.pizza_id,
    valuePizzaName: pizza.pizza_name,
    valuePricePizza: pizza.price,
  });
});
router.post("/pizza/list/update/:id", updatePizza, (req, res) => {
  res.redirect("/pizza/list");
});

router.get("/pizza/list/delete/:id", async (req, res) => {
  let pizzaId = req.params.id;
  const pizza = await pizzaDAO.findById(pizzaId);
  res.render("pizzaDelete", {
    valueId: pizza.pizza_id,
    valuePizzaName: pizza.pizza_name,
    valuePricePizza: pizza.price,
  });
});
router.post(
  "/pizza/list/delete/:id",
  async (req, res, next) => {
    await pizzaDAO.deleteById(req.params.id);
    next();
  },
  (req, res) => {
    res.redirect("/pizza/list");
  }
);

///////////////////////////////////////////////////
router.get("/clients/list", async (req, res) => {
  const renderAllClients = await clientDAO.findAll();
  res.render("clientList", {
    values: renderAllClients,
  });
});
router.get("/clients/list/add", (req, res) => {
  res.render("client");
});
router.post("/clients/list/add", addClient, (req, res) => {
  res.redirect("/clients/list");
});

router.get("/clients/list/update/:id", async (req, res) => {
  const client = await clientDAO.findById(req.params.id);
  res.render("clientUpdate", {
    valueId: client.client_id,
    valueFirstname: client.firstname,
    valueLastname: client.lastname,
    valueMail: client.mail,
    valueAddress: client.address,
    valueZipcode: client.zipcode,
  });
});
router.post(
  "/clients/list/update/:id",
  async (req, res, next) => {
    await clientDAO.updateClient(req.body, req.params.id);
    next();
  },
  (req, res) => {
    res.redirect("/clients/list");
  }
);

router.get("/clients/list/delete/:id", async (req, res) => {
  const client = await clientDAO.findById(req.params.id);
  res.render("clientDelete", {
    valueId: client.client_id,
    valueFirstname: client.firstname,
    valueLastname: client.lastname,
    valueMail: client.mail,
    valueAddress: client.address,
    valueZipcode: client.zipcode,
  });
});
router.post(
  "/clients/list/delete/:id",
  async (req, res, next) => {
    await clientDAO.deleteById(req.params.id);
    next();
  },
  async (req, res) => {
    res.redirect("/clients/list");
  }
);

///////////////////////////////////////////////////
router.get("/orderboy/list", async (req, res) => {
  const orderboys = await orderboyDAO.findAll();
  res.render("orderboyList", {
    values: orderboys,
  });
});
router.get("/orderboy/list/add", (req, res) => {
  res.render("orderboy");
});
router.post("/orderboy/list/add", addOrderBoy, (req, res) => {
  res.redirect("/orderboy/list");
});

router.get("/orderboy/list/update/:id", async (req, res) => {
  const orderboy = await orderboyDAO.findById(req.params.id);
  res.render("orderboyUpdate", {
    valueId: orderboy.orderboy_id,
    valueFirstname: orderboy.firstname_boy,
    valueLastname: orderboy.lastname_boy,
    valueMail: orderboy.mail_boy,
    valueVehicule: orderboy.vehicule,
  });
});
router.post("/orderboy/list/update/:id", updateOrderboy, (req, res) => {
  res.redirect('/orderboy/list');
});

router.get("/orderboy/list/delete/:id", (req, res) => {
  res.render("orderboy");
});
router.post("/orderboy/list/delete/:id");

///////////////////////////////////////////////////
router.get("/orders/list", (req, res) => {
  res.render("orderList");
});
router.get("/orders/list/add", (req, res) => {
  res.render("order");
});
router.post("/orders/list/add", (req, res) => {});

router.get("/orders/list/update/:id", (req, res) => {
  res.render("order");
});
router.post("/orders/list/update/:id");

router.get("/orders/list/delete/:id", (req, res) => {
  res.render("order");
});
router.post("/orders/list/delete/:id");

///////////////////////////////////////////////////
router.get("/ingredients/list");

///////////////////////////////////////////////////
router.get("/statistics");

///////////////////////////////////////////////////
router.get("/promotions/list");

module.exports = router;
