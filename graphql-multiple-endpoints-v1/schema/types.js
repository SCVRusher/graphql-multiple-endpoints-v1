//define graphql schema and types here

const typeDefs = `

#define type customer for mysqldb
type Customer {
  id: Int
  efirst_name: String
  elast_name: String
  email: String
  phone: String
  addresses: [Address]
  transactions: [Transaction]
}

#define type Transaction for mysqldb
type Transaction {
  id: Int
  customer_ID: Int
  description: String
  note: String
  money_In: Float
  money_Out: Float
  created: String
  customer: Customer
}

#define type address for mongodb
type Address { 
  street1: String
  street2: String
  city: String
  region: String
  country: String
  postal_zip: String
  customer_ID: Int
  customer: Customer
}

type Query {
  
  #query for individual customer data from an argument input
  customer(
    id: Int
    efirst_name: String
    elast_name: String
    email: String
    phone: String
  ): Customer

  #query for all individual customer data
  allCustomers: [Customer]
  
  #query for individual transaction data from an argument input by customer id
  transaction(
    id: Int,
    customer_ID: Int,
    description: String,
    note: String,
    money_In: Float,
    money_Out: Float,
    created: String
  ): Transaction

  #query for all customers' individual transaction data
  allTransactions: [Transaction]

  #query for individual address data from an argument input by customer id
  address( 
    street1: String
    street2: String
    city: String
    region: String
    country: String
    postal_zip: String
    customer_ID: Int
  ): Address

  #query for all customers' individual address data
  allAddresses: [Address]
  
  #query json string output from multiple external restful apis data sources from one function call
  getRandomQuote: String
}

`;

export default typeDefs;