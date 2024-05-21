const express = require('express');
const loginRoute = require('./routes/auth.route');
const mongoose = require('./mongo_connect/mongo.connect');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/auth', loginRoute);

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT} successfully`);
});
