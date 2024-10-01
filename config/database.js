const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = () => {

    mongoose.connect(process.env.REACT_APP_API_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => {
        console.log('Connected to MongoDB...');
    }).catch((e) => {
        console.error('Error connecting to MongoDB:', e.message);
    })






}
module.exports = connectDb;