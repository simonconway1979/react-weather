const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require ('express')
const PORT = process.env.PORT || 5000;
var app = express();

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'http') {
      next();
    } else {
      response.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})
