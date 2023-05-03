// Importing modules
const express = require('express');
const userController = require('../controllers/userController.cjs');
const { signup, login } = userController;
const userAuth = require("../middlewares/userAuth.cjs")

const router = express.Router();

/**
 * Redirection de la page d'accueil vers la page de login
 */
router.get("/", res => {
  res.redirect("/login");
});

router.get("/signup", (req, res) => {
  // code pour faire le rendu de la page d'inscription
  res.render("signup", {})
});


/**
 *  On créé le point d'entrée correspondant à l'inscription de l'utlisateur
 *  On passe le middleware à la fonction d'inscription
 * Et on fait une redirection vers la page  /users/list
*/
router.post("/signup", userAuth.saveUser, signup, res => {
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
router.post("/login", login, res => {
  res.redirect("/users/list");
});


///////////////////////////////////////////////////
router.get("/users/list", (req, res) => {
  res.render("userList", {})
})
router.get("/users/list/:id", (req, res) => {
  res.render("user")
})
router.post("/users/list/:id")

///////////////////////////////////////////////////
router.get("/pizza/list", (req, res) => {
  res.render("pizzaList")
})
router.get("/pizza/list/:id", (req, res) => {
  res.render("pizza")
})
router.post("/pizza/list/:id")



///////////////////////////////////////////////////
router.get("/clients/list", (req, res) => {
  res.render("clientsList")
})
router.get("/clients/list/:id", (req, res) => {
  res.render("client")
})
router.post("/clients/list/:id")


///////////////////////////////////////////////////
router.get("/orders/list", (req, res) => {
  res.render("orderList")
})
router.get("/orders/list/:id", (req, res) => {
  res.render("order")
})
router.post("/orders/list/:id")


///////////////////////////////////////////////////
router.get("/orderboy/list", (req, res) => {
  res.render("orderboyList")
})
router.get("/orderboy/list/:id", (req, res) => {
  res.render("orderboy")
})
router.post("/orderboy/list/:id")


///////////////////////////////////////////////////
router.get("/ingredients/list")


///////////////////////////////////////////////////
router.get("/statistics")


///////////////////////////////////////////////////
router.get("/promotions/list")


module.exports = router;
