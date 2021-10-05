const express = require('express');
const connectToDB = require('./config/dbConn');

const app = express(); // initialized express

//Database connection
connectToDB();

// Init middleware body parser
app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send('API running'));

//Define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));