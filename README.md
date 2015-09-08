# gl-workshop-node
Node application used during Globallogic Node JS course

# Description

During this workshop, we will create an application that will show a gallery of images, were users will be able to send messages. To do it, we will implement a Bootstrap based UI that will consume an API built with Express 4.x.


# Steps

* Install ´express´ library

$> npm install express --save


* Install ´ejs´ library

$> npm install ejs --save


* Install ´body-parser´ library

$> npm install body-parser --save


* Create a ´routes´ at application root

$> mkdir routes


* In ´routes´ folder, create file ´index.js´ and copy following code:

$> cd routes && vi index.js

var router = require('express').Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.get('/index', function (req, res) {
    res.render('pages/index');
});

router.get('/about', function (req, res) {
    res.render('pages/about');
});

module.exports = router;



* Create file ´app.js´ at application root and copy following code:

$> vi app.js

var express = require('express');
var bodyParser = require('body-parser');
var home = require('./routes/home');
var app = express();

/* app configuration */
app.set('view engine', 'ejs');
app.use( bodyParser.json() );
app.set('port', (process.env.PORT || 5000));


/* middleware */
app.use('/', home);

/* server start */
app.listen(app.get('port'), function () {
    console.log('app started!');
});


* Create ´views´ folder at application root

$> mkdir views


* Create ´pages´ and ´partials´ folders inside ´views´ folder

$> cd views && mkdir pages && mkdir partials


* Create ´index.ejs´ file at ´views/pages´ folder and copy following code

$> vi index.ejs


* Create ´public/css´ folder, and copy ´bootstrap-image-gallery.min.css´ file


<!-- views/pages/index.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <% include ../partials/head.ejs %>
</head>
<body class="container">

<header>
    <% include ../partials/header.ejs %>
</header>

<main>
    <div class="jumbotron">
        <h1>Gallery Images</h1>
        <p>Documentation</p>
    </div>
</main>

<footer>
    <% include ../partials/footer.ejs %>
</footer>

</body>
</html>


* Create ´footer.ejs´ file at ´views/partials´ folder and copy following code:

$> cd views && cd partials && vi footer.ejs

<p class="text-center text-muted">© Copyright 2015 Juan Carlos Cancela</p>


* Create ´head.ejs´ file at ´views/partials´ folder and copy following code:

$> cd views && cd partials && vi head.ejs

<meta charset="UTF-8">
<title>GL Gallery Image app</title>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<style>
    body    { padding-top:50px; }
</style>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
<link rel="stylesheet" href="../styles/bootstrap-image-gallery.min.css">


* Create ´header.ejs´ file at ´views/partials´ folder and copy following code:

$> cd views && cd partials && vi header.ejs

<nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">
                <span class="glyphicon glyphicon glyphicon glyphicon-floppy-open"></span> GL Gallery Images
            </a>
        </div>
        <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
</nav>



