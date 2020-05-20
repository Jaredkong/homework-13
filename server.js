'use strict';
const expressHandlebars = require('express-handlebars');
const express = require('express');
const path = require('path');
const routes = require('./controllers/burgers_controller');
const PORT = process.env.PORT || 5000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set Handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



app.use(routes);

// Start server so that it can begin listening to client requests.
app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);