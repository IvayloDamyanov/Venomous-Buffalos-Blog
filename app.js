const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose'); // maybe we use only mongodb later
const config = require('./config/database');

//temporary setup with mongoose
mongoose.connect(config.database);

// Confirms we are connected
mongoose.connection.on('connected', () => {
    console.log(`Connected to ${config.database}`);
});

//On error
mongoose.connection.on('error', (err) => {
    console.log(`Database error ${err}`);
});


const app = express();

const users = require('./routes/users');

const port = 3000;

// cors enables us to run the app on 2 different ports
app.use(cors());

// Set statis folder where will be the client side
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());

// every route coming from users will be looked for in this file.
app.use('/users', users);


app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, () => {
    console.log(`Magic happends on port ${port}`);
})
