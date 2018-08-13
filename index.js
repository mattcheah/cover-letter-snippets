#!/usr/bin/env node

const opn = require('opn');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();

app.use("/api", routes);

// Decide what port to listen on.
const port = 3141;

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile("index.html", {
        root: path.join(__dirname,"dist")
    });
});

app.listen(port);
opn('http://localhost:' + port);

console.log("snippets starting, listening on: localhost:"+port);

