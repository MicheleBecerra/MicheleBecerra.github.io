const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static( __dirname + '/dist/michbecerra' ));

// Send static files

app.get('/*', function(req, res) {
    res.sendFile(path.join( __dirname + '/dist/michbecerra/index.html'))
});

// Default heroku port
app.listen(process.env.PORT || 5000);