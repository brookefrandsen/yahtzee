'use strict';

const express = require('express');
const app = express();
const path = require('path');

// This game lives at the root
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Static files
app.use('/lib', express.static(path.join(__dirname, 'static')));
   
const server = app.listen(1234, function () {
    let host = server.address().address;
    const port = server.address().port;

    if(host === '::') {
        host = 'localhost';
    }
    
    console.log('Example app listening at http://%s:%s', host, port);
});