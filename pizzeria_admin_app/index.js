// server/index.js
import express from "express";

/**
 * Initialisation de express js et démarrage du web server sur le port:3001
 */
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/**
 * Configuration de pug
 */
app.set("views", "./views");
app.set("view engine", "pug");

/**
 * Configuration du routage des fichiers statiques
 */
app.use("/public", express.static("public"));

/**
 * méthode json et urlencode pour le parsing des données envoyées/reçues
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Redirection de la page d'accueil vers users/list
 */
app.get("/", (req, res) => {
  res.render("login");
  res.redirect("users/list");
});

app.get("users/list", (req, res) => {
  res.render("users");
});
