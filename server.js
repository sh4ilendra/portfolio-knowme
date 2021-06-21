const express = require('express');
const connectToDB = require('./config/dbConn');

const app = express(); // initialized express

//Database connection
connectToDB();

app.get('/', (req,res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));