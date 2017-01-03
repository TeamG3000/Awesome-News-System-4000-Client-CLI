const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

const notforceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] == 'https') {
      return res.redirect(
       ['http://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(notforceSSL());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 3000);