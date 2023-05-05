// import des modules requis
const express = require("express");
const db = require("../models/models.cjs");
const { emit } = require("nodemon");

const User = db.user;

/**
 * Fonction permettant de vérifier si le nom d'utilisateur ou l'email existe déjà dans
 * la base de données pour éviter les duplications
 */
const saveUser = async (req, res, next) => {
  // Recherche si l'utilisateur existe déjà dans la base de données
  try {
    let { userName, email, password } = req.body
    const username = await User.findAll({
      where: {
        user_name: userName,
      },
    });
    // si l'utilisateur existe bien alors on renvoie une réponse d'erreur avec un statut code 409
    
    // Verification de l'email
    const emailCheck = await User.findAll({
      where: {
        email: email,
      },
    });
    
    if (!username && !emailCheck) {
      // return res.json(409).send("username already in use");
      return res.send(req.body)
    }
    next()
    // Si l'email existe dans la base de données on renvoie une réponse d'erreur avec le statut code 409
    // if (emailCheck) {
      // return res.json(409).send("Authentication failed");
    // }

  } catch (err) {
    console.log(`Error message : `, err);
  }
};

// export du module
module.exports = { saveUser };
