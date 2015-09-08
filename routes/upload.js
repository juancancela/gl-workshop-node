var router = require('express').Router();
var formidable = require('formidable');
var fs   = require('fs-extra');

router.get('/', function (req, res) {
    res.render('pages/upload');
});


router.post('/', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        res.redirect('/');
    });

    form.on('end', function(fields, files) {
        /* temporary location of our uploaded file */
        var temporalFilePath = this.openedFiles[0].path;

        /* file name of the uploaded file */
        var fileName = this.openedFiles[0].name;

        /* location where we want to copy the uploaded file */
        var imagesPath = 'public/images/';

        /* lets create the image file name */
        var imageFileName = imagesPath + fileName + new Date().valueOf();

        /* copy image to public/images folder */
        fs.copy(temporalFilePath, imageFileName, function(err) {});
    });
});

module.exports = router;