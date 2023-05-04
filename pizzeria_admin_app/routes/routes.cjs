// Importing modules
const express = require("express");
const userController = require("../controllers/userController.cjs");
const { signup, login } = userController;
const userAuth = require("../middlewares/userAuth.cjs");

const router = express.Router();

///////////////////////////////////////////////////
/**
 * Redirection de la page d'accueil vers la page de login
 */
router.get("/", (res) => {
  res.redirect("/login");
});

router.get("/signup", (req, res) => {
  // code pour faire le rendu de la page d'inscription
  res.render("signup", {});
});

///////////////////////////////////////////////////
/**
 *  On créé le point d'entrée correspondant à l'inscription de l'utlisateur
 *  On passe le middleware à la fonction d'inscription
 * Et on fait une redirection vers la page  /users/list
 */
router.post("/signup", userAuth.saveUser, signup, (res) => {
  res.redirect("/users/list");
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
router.post("/login", login, (res) => {
  res.redirect("/users/list");
});

///////////////////////////////////////////////////
router.get("/users/list", (req, res) => {
  res.render("userList", {});
});
router.get("/users/add", (req, res) => {
  res.render("user");
});
router.post("/users/add", (req, res) => {});

router.get("/users/update/:id", (req, res) => {
  res.render("user");
});
router.post("/users/update/:id");

router.get("/users/delete/:id", (req, res) => {});
router.post("/users/delete/:id");

///////////////////////////////////////////////////
router.get("/pizza/list", (req, res) => {
  res.render("pizzaList");
});
router.get("/pizza/add", (req, res) => {
  res.render("pizza");
});
router.post("/pizza/add", (req, res) => {});

router.get("/pizza/update/:id", (req, res) => {
  res.render("pizza");
});
router.post("/pizza/update/:id");

router.get("/pizza/delete/:id", (req, res) => {
  res.render("pizza");
});
router.post("/pizza/delete/:id");

///////////////////////////////////////////////////
router.get("/clients/list", (req, res) => {
  res.render("clientsList");
});
router.get("/clients/add", (req, res) => {
  res.render("client");
});
router.post("/clients/add", (req, res) => {});

router.get("/clients/update/:id", (req, res) => {
  res.render("client");
});
router.post("/clients/update/:id");

router.get("/clients/delete/:id", (req, res) => {
  res.render("client");
});
router.post("/clients/delete/:id");

///////////////////////////////////////////////////
router.get("/orders/list", (req, res) => {
  res.render("orderList");
});
router.get("/orders/add", (req, res) => {
  res.render("order");
});
router.post("/orders/add", (req, res) => {});

router.get("/orders/update/:id", (req, res) => {
  res.render("order");
});
router.post("/orders/update/:id");

router.get("/orders/delete/:id", (req, res) => {
  res.render("order");
});
router.post("/orders/delete/:id");

///////////////////////////////////////////////////
router.get("/orderboy/list", (req, res) => {
  res.render("orderboyList");
});
router.get("/orderboy/add", (req, res) => {
  res.render("orderboy");
});
router.post("/orderboy/add", (req, res) => {});

router.get("/orderboy/update/:id", (req, res) => {
  res.render("orderboy");
});
router.post("/orderboy/update/:id");

router.get("/orderboy/delete/:id", (req, res) => {
  res.render("orderboy");
});
router.post("/orderboy/delete/:id");

///////////////////////////////////////////////////
router.get("/ingredients/list");

///////////////////////////////////////////////////
router.get("/statistics");

///////////////////////////////////////////////////
router.get("/promotions/list");

module.exports = router;
