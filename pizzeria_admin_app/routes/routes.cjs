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

module.exports = router;
