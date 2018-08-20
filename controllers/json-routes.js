const fs = require('fs');
const path = require('path');

// CRUD routes for JSON file snippets entries. 
module.exports = {
    getSnippets: (req,res) => {
        const jsonPath = req.body.urlString;

        if (!fs.existsSync(path.normalize(jsonPath))) {
            fs.open(path, "wx", function (err, fd) {
                // create file if it doesn't exist.
                if (err) {
                    console.log("error creating new json file: " + err);
                }
                fs.close(fd, function (err) {
                    if (err) {
                        console.log("error closing created json file: " + err);
                    }
                });
            });
        }

        module.exports.returnJsonData().then(data => {
            let returnObj = {
                responseMessage: "Connected to JSON file and Returned Results!",
                connected: true,
                data: data
            };
            res.json(returnObj);
        }).catch(err => {
            res.status(400).json({
                error: "Sorry, could not connect to JSON file",
                connected: false
            });
        });
    },
    addSnippet: (req,res) => {
        const snippet = req.body.snippet;
        const categories = req.body.categories;
        const snippetObject = {
            snippet: snippet,
            categories: categories
        };
        let db;
        module.exports.returnJsonData().then(data => {
            db = data;
            db.push(snippetObject);
            // Here: rewrite the json file with the new json.
            // THIS ROUTE IS NOT COMPLETED UNTIL THIS IS DONE. 
        }).catch(err => {
            console.log("Error getting data from JSON file!");
            let returnObj = {
                error: "Error getting data from JSON file!"
            }
            res.send(returnObj);
        });
    },
    editSnippet: (req,res) => {

    },
    deleteSnippet: (req,res) => {

    },
    returnJsonData: () => {
        return new Promise((response, reject) => {
            try {
                const database = require('../snippets-db.json');
                console.log("Got JSON DB");
                response(database);
            } catch (err) {
                reject(err);
            }
        });
    }
}