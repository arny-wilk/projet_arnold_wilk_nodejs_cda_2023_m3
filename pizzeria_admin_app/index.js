// server/index.js
import cookieParser from "cookie-parser";
import express from "express";
import db from "./models/models";
import router from "./routes/routes";

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
* Synchronisation de la db avec force=false pour ne pas perdre les données à chaque relance du serveur
 */
db.sequelize.sync({force: false}).then(() => { console.log(`db has been re sync`);})

/**
* routes de l'application vers les pages et les API routes
 */
app.use('/users/list', router)

/**
 * ecoute de la connection du serveur sur le port 3001
 */
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
