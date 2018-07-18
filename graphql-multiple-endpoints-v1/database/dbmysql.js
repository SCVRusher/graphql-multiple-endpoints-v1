import Sequelize from "sequelize"

//setup and connect 1st mysql on external database connection 1
const db1 = new Sequelize(
    'database',
    'username',
    'password', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);

//define customer table with its data fields
const CustomerModel = db1.define('customer', {
    efirst_name: { type: Sequelize.STRING },
    elast_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
});

//setup and connect 2nd mysql database on external database connection 2
const db2 = new Sequelize(
    'database',
    'username',
    'password', {
        host: 'locahost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);

//define transaction table with its data fields
const TransactionModel = db2.define('transaction', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    customer_ID: { type: Sequelize.INTEGER },
    description: { type: Sequelize.STRING },
    note: { type: Sequelize.STRING },
    money_In: { type: Sequelize.FLOAT },
    money_Out: { type: Sequelize.FLOAT },
    created: { type: Sequelize.STRING },
});;

//define Customer and Transaction table relationship here
CustomerModel.hasMany(TransactionModel, { foreignKey: `customer_ID` });
TransactionModel.belongsTo(CustomerModel, { foreignKey: `customer_ID` });

//define customer table as Customer 
const Customer = db1.models.customer;
//define transaction table as Transaction
const Transaction = db2.models.transaction;

export { Customer, Transaction };