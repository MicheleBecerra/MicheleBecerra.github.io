const path = require('path');
const express = require('express');
const app = express();

// static files
app.use(express.static( __dirname + '/dist/portafolio'));

// Mandar las peticiones al index.html
app.get('/*', function(req,res){
    res.sendFile(path.join( __dirname + '/dist/portafolio/index.html'));
});

// Puerto default de Heroku
app.listen(process.env.PORT || 5000);
