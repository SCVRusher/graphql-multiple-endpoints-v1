import { RandomQuote } from '../database/restapi';
import { Customer, Transaction } from '../database/dbmysql';
import { Address } from '../database/dbmongo';

//graphql resolver starts here
const resolvers = {
    //query arguments starts here
    Query: {
        //query arguments for a single customer 
        customer(_, args) {
            return Customer.find({ where: args });
        },
        //query arguments for every individual customers' data
        allCustomers(_, args) {
            return Customer.findAll();
        },
        //query arguments based off customer's id to pull all customer' transaction data
        transaction(_, args) {
            return Transaction.find({ where: args });
        },
        //query arguments for every individual customers' transaction data
        allTransactions(_, args) {
            return Transaction.findAll();
        },
        //query arguments based off customer's id to pull customer' address
        address(_, args) {
            return Address.find({ where: args });
        },
        //query arguments for every individual customers' address data
        allAddresses(_, args) {
            return Address.find();
        },
        //query json string output from multiple external restful apis data sources from one function call
        getRandomQuote() {
            return RandomQuote.getOne();
        }
    },

    //define customer select query condition here
    Customer: {
        //pass customer id as a condition to search for customer's transaction records
        transactions(customer) {
            return customer.getTransactions();
        },
        //psss customer id as a condition to search for customer's address
        addresses(customer) {
            return Address.find({ customer_ID: customer.id });
        }
    },
    //define transaction select query condition here
    Transaction: {
        customer(transaction) {
            return transaction.getCustomer();
        }
    },

    //define transaction select query condition here
    Address: {
        customer(addresss) {
            return address.getCustomer();
        }
    },
}

export default resolvers;