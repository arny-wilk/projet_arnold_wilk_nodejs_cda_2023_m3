// server/index.js
const express = require("express");
const sequelize = require("sequelize");
// const dotenv = require("env").config();
const cookieParser = require("cookie-parser");
const db = require("./models/models.cjs");
const appRoutes = require("./routes/routes.cjs");

/**
 * Port d'écoute 3001
 */
const PORT = 3001;

/**
 * Initialisation de express js et démarrage du web server
 */
const app = express();

/**
 * Middlewares
 */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Synchronisation de la db avec force=false pour ne pas perdre les données à chaque relance du serveur
 */
db.sequelize.sync({ force: true }).then(() => {
  console.log(`db has been re sync`);
});

/**
 * Configuration de pug pour le rendu des fichiers HTML
 */
app.set("views", "./views");
app.set("view engine", "pug");

/**
 * Configuration du routage des fichiers statiques
 */
app.use("/public", express.static("public"));

/**
 * routes de l'application vers les pages et les API routes
 */
app.use("/", appRoutes);

/**
 * ecoute de la connection du serveur sur le port 3001
 */
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
