const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

require('dotenv').config();

//connect to database

const mongoUri = process.env.DATABASE_URI;

mongoose.connect(mongoUri);
const database = mongoose.connection;

database.on('error', (error) => {
	console.log(error);
});

database.once('connected', () => {
	console.log('Database Connected');
});

//routes

const app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => {
	console.log(`server started at ${3000}`);
});
