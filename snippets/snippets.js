// When I'm done, move snippets.js out of "/snippets"

const express = require('express');
const opn = require('opn');
const mongoose = require('mongoose');
const treekill = require('tree-kill');
// const process = require('process');

const app = express();

// Decide what port to listen on.
const port = 3300;


app.use(express.static('dist/'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile("index.html", {
        root: __dirname + "/dist/"
    });
});

app.post('/connect-to-database', function(req, res) {
    const dburl = req.body.databaseUrl;

    if (dburl == "") {
        res.status(400).send("Please enter the URI of a mlab mongodb database!");
        return;
    }
    setUpConnection(dburl);
    let Snippet = setUpSchema();
    getAllSnippets(Snippet, "Successfully Connected to the Database and retrieved records!").then(data => {
        res.json(data);
    });
});

app.post('/add-snippet', function(req, res) {
    const snippet = req.body.snippet;
    const categories = req.body.categories;
    let Snippet = setUpSchema();
    new Snippet({
        snippet: snippet,
        categories: categories
    }).save(function(err) {
        if (err) {
            console.log("Error saving new snippet: "+ err);
        } else {
            console.log("New Snippet Saved!");
            getAllSnippets(Snippet, "New Snippet Saved!").then(data => {
                res.json(data);
            });
        }
    });
});

// let browser;
app.listen(port);
let browser = opn('http://localhost:' + port).then(cp => {
    // PID
    console.log(cp.pid);
    // Close the app
    // console.log(cp.kill());
    cp.kill('SIGINT');
});

console.log("app starting, listening on: localhost:"+port);

// function exitHandler(options, err) {
//     if (options.cleanup) console.log('clean');
//     if (err) console.log(err.stack);
//     // console.log("closing snippets app: pid:"+browser.pid);
//     // treekill(browser.pid);
//     if (options.exit) process.exit();
// }

// //do something when app is closing
// // process.on('exit', exitHandler.bind(null, { cleanup: true }));

// //catches ctrl+c event
// process.on('SIGINT', exitHandler.bind(null, { exit: true }));

// // catches "kill pid" (for example: nodemon restart)
// process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
// process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));

// //catches uncaught exceptions
// process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
function setUpConnection(dburl) {
    let connection = mongoose.connect(dburl);

    mongoose.connection.on('error', function (err) {
        console.log("Error! " + err);
        res.status(400).json({ error: "Sorry, mongoose could not connect to the database! Make sure your URI is correct!" });
        return;
    });

    mongoose.connection.on('connected', function () {
        console.log("Successfully Connected!");
    });
}

function setUpSchema() {
    let Snippet;
    try {
        Snippet = mongoose.model('Snippet');
    } catch(error) {
        let Schema = mongoose.Schema;
        let snippetSchema = new Schema({
            categories: Array,
            snippet: String
        });
        Snippet = mongoose.model('Snippet', snippetSchema);
    }
    return Snippet;
}

function getAllSnippets(Snippet, successMessage) {
    // Get all the snippets in the database;
    return new Promise((res,rej) => {
        Snippet.find({}, function(err, data) {
            if(err) throw err;
            returnObj = {
                responseMessage: successMessage,
                connected: true,
                data: data
            };
            res(returnObj);
        });
    });
}