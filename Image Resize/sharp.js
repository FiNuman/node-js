const sharp = require('sharp');
sharp('./images/h2r.jpg')
    .resize(350, 250)
    .toFile('result.jpg', function (err) {

        console.log(err)
    });
