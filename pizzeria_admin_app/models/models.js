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

// ONE TO MANY ASSOCIATIONS
db.Client.hasMany(db.CreditCard, { through: db.ClientCreditCard });
db.CreditCard.belongsTo(db.Client, { through: db.ClientCreditCard });

db.Client.hasMany(db.Order, { through: db.ClientOrderPref });
db.Order.belongsTo(db.Client, { through: db.ClientOrderPref });

// SUPER MANY TO MANY
db.Order.hasMany(db.Client, { foreignKey: "client_id" });
db.Order.hasMany(db.CreditCard, { foreignKey: "cc_id" });

// MANY TO MANY ASSOCIATION
db.Order.belongsToMany(db.Pizza, { through: db.ClientPizza });
db.Pizza.belongsToMany(db.Order, { through: db.ClientPizza });

db.Order.belongsToMany(db.Drinks, { through: db.ClientDrinks });
db.Drinks.belongsToMany(db.Order, { through: db.ClientDrinks });

db.Order.belongsToMany(db.Dessert, { through: db.ClientDessert });
db.Dessert.belongsToMany(db.Order, { through: db.ClientDessert });

db.Ingredient.belongsToMany(db.Pizza, { through: db.Recipe });
db.Pizza.belongsToMany(db.Ingredient, { through: db.Recipe });

db.Pizza.hasMany(db.Size, { foreignKey: 'size_id'})
db.Size.belongsTo(db.Pizza, { foreignKey: 'pizza_id'})

/**
 * exporting module
 */
export default db;
