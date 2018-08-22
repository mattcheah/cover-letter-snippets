const fs = require('fs');
const path = require('path');

// CRUD routes for JSON file snippets entries. 
const self = module.exports = {
    jsonFilePath: "",
    getSnippets: (req,res) => {
        console.log("Called GetSnippets!");
        self.jsonFilePath = path.normalize(req.body.databaseUrl);

        // create file if it doesn't exist.
        // try {

        //     fs.open(self.jsonFilePath, "wx", function (err, fd) {
        //         if (err) {
        //             // throw(err);
        //             console.log("File exists already");
        //         } else {

        //             fs.close(fd, function (err) {
        //                 if (err) {
        //                     console.log("error closing created json file: " + err);
        //                 }
        //             });
        //         }
                
        //     });
        // } catch(err) {
        //     console.log("Error: Thrown error");
        //     console.log(err);
        // }

        self.returnJsonData().then(data => {
            console.log("promise return from getSnippets");
            let returnObj = {
                responseMessage: "Connected to JSON file and Returned Results!",
                connected: true,
                data: data
            };
            res.json(returnObj);
        }).catch(err => {
            res.status(500).json({
                error: true,
                responseMessage: "Sorry, could not connect to JSON file",
                connected: false,
                data: []
            });
        });
    },
    addSnippet: (req,res) => {
        console.log("calling addSnippet");
        const snippet = req.body.snippet;
        const categories = req.body.categories;
       
        
        self.returnJsonData().then(data => {
            console.log("promise return from addSnippet");
            let db = data;
            const snippetObject = {
                _id: self.createUniqueId(db),
                snippet: snippet,
                categories: categories
            };

            db.push(snippetObject);

            self.writeJson(db);
            res.json(self.createResponseObject(db, "Added Snippet to the Database Successfully!"));

        }).catch(err => {
            let returnObj = {
                error: true,
                responseMessage: err,
                data: [],
                connected: true
            }
            res.status(500).json(returnObj);
        });
    },
    editSnippet: (req,res) => {
        const id = req.body.id;
        const snippet = req.body.snippet;
        const categories = req.body.categories;
        const snippetObject = {
            snippet: snippet,
            categories: categories
        };

        self.returnJsonData().then(data => {
            let db = data;
            let foundSnippet = false; 
            
            for(let i = 0; i < db.length; i++) {
                if (db[i]._id === id) {
                    db[i].snippet = snippet;
                    db[i].categproes = categories;
                    foundSnippet = true;
                }
            }
            
            if (foundSnippet) {
                module.exports.writeJson(db);
                res.json(module.exports.createResponseObject(db, "Edited your snipped with an id of: " + id));
            } else {
                module.exports.catchError("Could not find snippet with an id of: " + id, res, 400);
            }

        }).catch((err) => {
            module.exports.catchError(err, res);
        });
    },
    deleteSnippet: (req,res) => {
        const id = req.body.id;
        module.exports.returnJsonData().then(data => {
            let db = data;
            let foundSnippet = false;

            for (let i = 0; i < db.length; i++) {
                if (db[i]._id === id) {
                    //Splice this element out of the db.
                    db.splice(i, 1);
                    foundSnippet = true;
                }
            }

            if (foundSnippet) {
                module.exports.writeJson(db);
                res.json(module.exports.createResponseObject(db, "Successfully deleted snippet with Id of "+id));
            } else {
                module.exports.catchError("Could not find snippet with an id of: " + id, res, 400);
            }

        }).catch(err => {
            module.exports.catchError(err,res);
        });
    },
    returnJsonData: () => {
        console.log("called returnJsonData");
        return new Promise((response, reject) => {
            try {
               
                const database = require(path.resolve(__dirname, "../", self.jsonFilePath));
                
                console.log("Got JSON DB. Last entry:");
                console.log(database[database.length-1]._id);
                response(database);
            } catch (err) {
                reject(err);
            }
        });
    },
    createUniqueId: (db) => {
        let newId = Math.floor(Math.random() * 1000000);
        for(let i = 0; i < db.length; i++) {
            if(db[i]._id === newId) {
                return self.createUniqueId(db);
            }
        }
        return newId;
    },
    writeJson: (db) => {
        fs.writeFile(path.resolve(__dirname, "../", self.jsonFilePath), JSON.stringify(db), (err) => {
            if (err) {
                console.log("Error writing to JSON file!");
                throw err;
            }
        });
    },
    createResponseObject: (db, successMsg) => {
        console.log(successMsg);
        return {
            error: false,
            responseMessage: successMsg,
            data: db,
            connected: true
        };
    },
    catchError: (err, res, status = 500) => {
        console.log("Caught Error: "+err);
        res.status(status).json({
            error:true,
            responseMessage: err,
            connected: true,
            data: []
        });
    }
}