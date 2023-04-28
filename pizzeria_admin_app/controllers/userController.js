import bcrypt from "bcrypt";
import db from "../models/models";
import jwt from "jsonwebtoken";

// Déclaration de la variable User
const User = db.users;

/**
 * Inscription de l'utlisateur
 * Hashing du mot de passe de l'utilisateur avec bcrypt avant de l'envoyer dans la base de données
 * @param {*} req
 * @param {*} res
 */
const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const data = {
      userName,
      email,
      password: await bcrypt(password, 10), // bcrypt avec un algo d'hashing de niveau 10
    };
    // saving the user
    const user = await User.create(data);

    /**
     * Si les détails de l'utilisateur sont capturées
     * on génére un jeton d'authenfication de l'id de l'utilisateur et la clé secrete dans le fichier .env
     * et on ajoute le jeton générée dans le cookie (PS: ceci n'est pas une bonne pratique en matière de sécurité des jetons
     * mais pour le projet NodeJS nous nous suffirons à cette méthode d'authentification. Cela permet de garder l'utilisateur
     * connectée à sa session sur pizzeria-admin-app  même si il change de page ou s'il supprime sa page en cours
     */
    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });
      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log(`Jeton d'authentification de l'utilisateur : `, token);
      // Envoi des détails de l'utilisateur avec le code statut 201 pour le succés  de sa création
      return res.status(201).send(user);
    } else {
      // Envoi du code statut 409 si il y'a un conflit entre la requete et l'état du serveur
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(`Error mesage : `, err);
  }
};

/**
 *  Login d'authentication
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trouver l'utilisateur avec son email
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    // Si l'email de l'utilisateur existe dans la base de données on compare le mot de passe en utilisant bcrypt
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      // Si le mot de passe est identique à celui de la base de données
      // On génère un jeton d'authentification avec l'id de l'utilisateur et la clé secrete du fichier .env

      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log(`user : `, JSON.stringify(user, null, 2));
        console.log(`Jeton d'authentification : `, token);
        // Envoie des données de l'utilisateur avec le statut code 201 succés de sa connexion
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentification failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(`Error message : `, error);
  }
};

module.exports = {
  signup,
  login,
};
