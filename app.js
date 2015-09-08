var express = require('express');
var bodyParser = require('body-parser');
var home = require('./routes/index');
var path = require('path');
var app = express();

/* app configuration */
app.set('view engine', 'ejs');
app.use( bodyParser.json() );
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));


/* middleware */
app.use('/', home);

/* server start */
app.listen(app.get('port'), function () {
    console.log('app started!');
});