#!/usr/bin/env node

const express = require('express');
const opn = require('opn');
const mongoose = require('mongoose');

const app = express();

// Decide what port to listen on.
const port = 3141;


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
    
    let connection = mongoose.connect(dburl);
    mongoose.connection.on('error', function (err) {
        console.log("Error! " + err);
        res.status(400).json({ error: "Sorry, mongoose could not connect to the database! Make sure your URI is correct!" });
        return;
    });
    mongoose.connection.on('connected', function () {
        console.log("Successfully Connected!");
    });


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
            res.error("Error adding snippet: "+err);
        } else {
            console.log("New Snippet Saved!");
            getAllSnippets(Snippet, "New Snippet Saved!").then(data => {
                res.json(data);
            });
        }
    });
});

app.delete('/delete-snippet', function(req,res) {
    const Snippet = setUpSchema();
    const id = req.body.id;
    let snippet;
    Snippet.findById(id, function(err, response) {
        let snippet = response;
        Snippet.findByIdAndRemove(id, function(err) {
            if (err) res.error("Error deleting snippet: " + err);
            getAllSnippets(Snippet, "Removed Snippet: "+snippet.snippet.substring(0, 30)+"...").then(data => {
                res.json(data);
            });
        });
    });
    
});

// let browser;
app.listen(port);
opn('http://localhost:' + port);

console.log("snippets starting, listening on: localhost:"+port);

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
            if(err) {
                rej({
                    error:err,
                    connected: false
                });
            }
            returnObj = {
                responseMessage: successMessage,
                connected: true,
                data: data
            };
            res(returnObj);
        });
    });
}