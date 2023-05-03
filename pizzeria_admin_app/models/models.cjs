const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("pizzeria", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

/**
 * Vérification de la connection à la base de données pizzeria.db
 */
sequelize
  .authenticate()
  .then(() => {
    console.log(`Connect successfully to Mysql db `);
  })
  .catch((err) => {
    console.log(`Error connecting to Database : `, err);
  });

console.log(`another task`);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * connecting to models
 */
db.user = require("./userModel.cjs")(sequelize, DataTypes);
db.client = require("./clientModel.cjs")(sequelize, DataTypes);
db.ingredient = require("./ingredientModel.cjs")(sequelize, DataTypes);
db.clientOrderPref = require("./clientOrderPrefModel.cjs")(
  sequelize,
  DataTypes
);
db.orderBoy = require("./orderboyModel.cjs")(sequelize, DataTypes);
db.creditCard = require("./creditCardModel.cjs")(sequelize, DataTypes);
db.clientCreditCard = require("./clientCreditCardModel.cjs")(
  sequelize,
  DataTypes
);
db.menu = require("./menuModel.cjs")(sequelize, DataTypes);
db.stock = require("./stockModel.cjs")(sequelize, DataTypes);
db.size = require("./sizeModel.cjs")(sequelize, DataTypes);
db.recipe = require("./recipeModel.cjs")(sequelize, DataTypes);
db.pizza = require("./pizzaModel.cjs")(sequelize, DataTypes);
db.drinks = require("./drinksModel.cjs")(sequelize, DataTypes);
db.dessert = require("./dessertModel.cjs")(sequelize, DataTypes);
db.order = require("./orderModel.cjs")(sequelize, DataTypes);
db.orderPizza = require("./orderPizzaModel.cjs")(sequelize, DataTypes);
db.orderDrinks = require("./orderDrinksModel.cjs")(sequelize, DataTypes);
db.orderDessert = require("./orderDessertModel.cjs")(sequelize, DataTypes);

/**
 * Mise en application des relations entre les models
 */

// ONE TO MANY ASSOCIATIONS
db.creditCard.belongsToMany(db.client, { through: db.clientCreditCard, ON_DELETE: "SET_NULL", ON_UPDATE: "CASCADE" });


// A SUPPRIMER dans les tables POUR CORRIGER 
// db.order.hasMany(db.client);
// db.client.hasMany(db.order);  

db.client.belongsToMany(db.order, {through: db.clientOrderPref, ON_DELETE: "SET_NULL", ON_UPDATE: "CASCADE" })

db.pizza.belongsToMany(db.order, { through: db.orderPizza,  ON_DELETE: "SET_NULL", ON_UPDATE: "CASCADE" });

db.drinks.belongsToMany(db.order, { through: db.orderDrinks, ON_DELETE: "SET_NULL", ON_UPDATE:"CASCADE" });

db.dessert.belongsToMany(db.order, { through: db.orderDessert , ON_DELETE: "SET_NULL", ON_UPDATE:"CASCADE"});


/**
 * exporting module
 */
module.exports = db;
