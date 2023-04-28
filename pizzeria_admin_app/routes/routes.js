// Importing modules
import express from "express";
import userController from "../controllers/userController.js";

const { signup, login } = userController;
import userAuth from "../middlewares/userAuth.js";

const router = express.Router();

/**
 * Configuration de pug pour le rendu des fichiers HTML
 */
router.set("views", "./views");
router.set("view engine", "pug");

/**
 * Configuration du routage des fichiers statiques
 */
router.use("/public", express.static("public"));

/**
 * Redirection de la page d'accueil vers /users/list
 */
router.get("/", (req, res) => {
  res.redirect("/login");
});

router.get("/signup", (req, res) => {
  // code pour faire le rendu de la page d'inscription
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
});

/**
 * On créé la route permettant de vérifier avec le middleware l'authentification de l'utilisateur
* On attache le middleware d'authentification de l'utilisateur et on fait une redirection vers 
* la page /users/list
 */
router.post("/login", login, (res, req) => {
  res.redirect("/users/list");
});

module.exports = router;
