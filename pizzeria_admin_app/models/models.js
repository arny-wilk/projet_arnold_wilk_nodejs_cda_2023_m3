import { Sequelize, DataTypes, ForeignKeyConstraintError } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage:
    " /home/prodesk/webdev/Arnold_Wilk_cda_2023_M03_projet_node_js/projet_arnold_wilk_nodejs_cda_2023_m3/pizzeria_admin_app/pizzeria.db",
});

/**
 * Vérification de la connection à la base de données pizzeria.db
 */
sequelize
  .authenticate()
  .then(() => {
    console.log(`Connect successfully to db pizzeria.db`);
  })
  .catch((err) => {
    console.log(`Error message : `, err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * connecting to models
 */
db.User = require("./userModel")(sequelize, DataTypes);
db.Size = require("./sizeModel")(sequelize, DataTypes);
db.Recipe = require("./recipeModel")(sequel, DataTypes);
db.Pizza = require("./pizzaModel")(sequelize, DataTypes);
db.Order = require("./orderModel")(sequelize, DataTypes);
db.Orderboy = require("./orderboyModel")(sequelize, DataTypes);
db.Ingredient = require("./ingredientModel")(sequelize, DataTypes);
db.Drinks = require("./drinksModel")(sequelize, DataTypes);
db.Dessert = require("./dessertModel")(sequelize, DataTypes);
db.ClientPizza = require("./clientPizzaModel")(sequelize, DataTypes);
db.ClientOrderPref = require("./clientOrderPref")(sequelize, DataTypes);
db.Client = require("./clientModel")(sequelize, DataTypes);
db.ClientDrinks = require("./clientDrinks")(sequelize, DataTypes);
db.ClientDessert = require("./clientDessert")(sequelize, DataTypes);
db.ClientCreditCard = require("./clientCreditCard")(sequelize, DataTypes);
db.CreditCard = require("./creditCard")(sequelize, DataTypes);

/**
 * Mise en application des relations entre les models
 */
db.Order.hasMany(db.Pizza, ForeignKey());
db.Pizza.hasMany(db.Order, ForeignKey());

// TRES IMPORTANT POUR LA RELATION MANY TO MANY
// ENTRE LA TABLE  PIZZA ET INGREDIENT EN UTILISANT
// LA TABLE  DE JOINTURE RECIPE
db.Ingredient.belongsToMany(db.Pizza, { through: db.Recipe });

db.Client.hasMany(db.Command, ForeignKey());
db.Command.hasMany(db.Client, ForeignKey());



/**
 * exporting module
 */
export default db;
