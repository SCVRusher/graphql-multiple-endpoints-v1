import Sequelize from "sequelize"

const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

//setup and connect 1st mysql on external database connection 1
const db1 = new Sequelize(
    'database',
    'username',
    'password', {
        operatorsAliases,
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
        operatorsAliases,
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