const express = require('express');
const app = express();

app.use(express.static('snippets/dist/'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    // res.send('Hello World');
    res.sendFile("index.html", {
        root: __dirname + "/snippets/dist/"
    });
});

app.post('/connect-to-database', function(req, res) {
    const url = req.url;
    console.log('url'); 
    console.log(url); 
});

app.listen(3300); 

console.log("app starting");