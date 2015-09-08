var router = require('express').Router();
var fs = require("fs");
var path = require("path");

router.get('/', function (req, res) {
    var imagesPath = "./public/images";
    fs.readdir(imagesPath, function (err, files) {
        if (err) throw err;
        res.render('pages/index', {gl_images: files});
    });
});

module.exports = router;