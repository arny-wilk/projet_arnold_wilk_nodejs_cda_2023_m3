import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage:
    " /home/prodesk/webdev/Arnold_Wilk_cda_2023_M03_projet_node_js/projet_arnold_wilk_nodejs_cda_2023_m3/pizzeria_admin_app/pizzeria.db",
});

/**
 * Vérification de la connection à la base de données pizzeria.db
 */
sequelize.authenticate().then(() => {
    console.log(`Connect successfully to db pizzeria.db`);
}).catch((err) => {console.log(`Error message : `, err);})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

/**
* connecting to models
 */
db.users = require('./userModel')(sequelize, DataTypes)
db.pizza = require('./pizzaModel')(sequelize, DataTypes)
db.ingredient = require('./ingredientModel')(sequelize, DataTypes)
db.command = require('./commandModel')(sequelize, DataTypes)
db.client = require('./clientModel')(sequelize, DataTypes)
db.orderboy = require('./orderboyModel')(sequelize, DataTypes)


/**
* exporting module
 */
export default db