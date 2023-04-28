// import des modules requis
import db from "../models/models";

const User = db.users;

/**
 * Fonction permettant de vérifier si le nom d'utilisateur ou l'email existe déjà dans
 * la base de données pour éviter les duplications
 */
const saveUser = async (req, res, next) => {
  // Recherche si l'utilisateur existe déjà dans la base de données
  try {
    const username = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    // si l'utilisateur existe bien alors on renvoie une réponse json avec un statut code 409
    if (username) {
      return res.json(409).send("username already in use");
    }

    // Verification de l'email
    const emailCheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // Si l'email existe dans la base de données on renvoie une réponse json avec le statut code 409
    if (emailCheck) {
      return res.json(409).send("Authentication failed");
    }

    next();
  } catch (error) {
    console.log(`Error message : `, err);
  }
};

// export du module
export default saveUser;
