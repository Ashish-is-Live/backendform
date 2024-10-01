const express = require('express')
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());


const routes = require('./routes/routes');

app.use('/api/v0/', routes);
require('dotenv').config();
app.listen(process.env.PORT, () => console.log(`server listening on ${process.env.PORT}`))

const connectDb = require('../Backend/config/database')

connectDb();














