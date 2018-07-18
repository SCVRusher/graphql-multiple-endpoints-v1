import mongoose from "mongoose"

//setup and connect nosql mongodb database on external database connection
const mongo = mongoose.connect('mongodb://mydbinfo');
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ', err));

//initialize schema here
const Schema = mongoose.Schema;

//setup collection Address and its data fields
const AddressSchema = new Schema({
    street1: { type: String },
    street2: { type: String },
    city: { type: String },
    region: { type: String },
    country: { type: String },
    postal_zip: { type: String },
    customer_ID: { type: Number }
}, { collection: "addresses" });

//define Address table
const Address = mongoose.model('addresses', AddressSchema);

export { Address };