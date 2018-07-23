const express = require('express');
const opn = require('opn');
const mongoose = require('mongoose');

const app = express();

// Decide what port to listen on.
const port = 3300;


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
    const dburl = req.body.databaseUrl;
    console.log('dburl'); 
    console.log(dburl); 

    if (dburl == "") {
        res.send("Please enter the URL of a mlab mongodb database!");
    } else {
        console.log("connecting to mongoose db: response is:")

        let connection = mongoose.connect(dburl);
        console.log(connection);

        let Schema = mongoose.Schema;

        let snippetSchema = new Schema({
            id: {
                type: String,
                unique: true,
                index: true
            },
            categories: Array,
            snippet: String
        }); 
        let Snippet;
        try {
            Snippet = mongoose.model('Snippet');
        } catch(error) {
            Snippet = mongoose.model('Snippet', snippetSchema);
        }

    }
});

app.listen(port); 
opn('http://localhost:'+port, {app: ['chrome']});

console.log("app starting, listening on: localhost:"+port);