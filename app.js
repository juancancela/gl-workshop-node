var express = require('express');
var bodyParser = require('body-parser');
var home = require('./routes/index');
var upload = require('./routes/upload');
var path = require('path');
var app = express();

/* app configuration */
app.set('view engine', 'ejs');
app.use( bodyParser.json() );
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser({
    uploadDir: './tmp',
    keepExtensions: true
}));


/* middleware */
app.use('/', home);
app.use('/index', home);
app.use('/upload', upload);

/* server start */
app.listen(app.get('port'), function () {
    console.log('app started!');
});