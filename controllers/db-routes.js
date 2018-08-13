const mongoose = require('mongoose');

// CRUD routes for Mongoose db snippets entries. 
module.exports = {
    connectToDatabase: (req, res) => {
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


        let Snippet = module.exports.setUpSchema();
        module.exports.getAllSnippets(Snippet, "Successfully Connected to the Database and retrieved records!").then(data => {
            res.json(data);
        });
    },
    addSnippet: (req, res) => {
        const snippet = req.body.snippet;
        const categories = req.body.categories;
        let Snippet = module.exports.setUpSchema();
        new Snippet({
            snippet: snippet,
            categories: categories
        }).save(function (err) {
            if (err) {
                console.log("Error saving new snippet: " + err);
                res.error("Error adding snippet: " + err);
            } else {
                console.log("New Snippet Saved!");
                module.exports.getAllSnippets(Snippet, "New Snippet Saved!").then(data => {
                    res.json(data);
                });
            }
        });
    },
    editSnippet: (req, res) => {

    },
    deleteSnippet: (req, res) => {
        const Snippet = module.exports.setUpSchema();
        const id = req.body.id;
        let snippet;
        Snippet.findById(id, function (err, response) {
            let snippet = response;
            Snippet.findByIdAndRemove(id, function (err) {
                if (err) res.error("Error deleting snippet: " + err);
                module.exports.getAllSnippets(Snippet, "Removed Snippet: " + snippet.snippet.substring(0, 30) + "...").then(data => {
                    res.json(data);
                });
            });
        });
    },
    getAllSnippets: (Snippet, successMessage) => {
        // Get all the snippets in the database;
        return new Promise((res, rej) => {
            Snippet.find({}, function (err, data) {
                if (err) {
                    rej({
                        error: err,
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
    },
    setUpSchema: () => {
        try {
            Snippet = mongoose.model('Snippet');
        } catch (error) {
            let Schema = mongoose.Schema;
            let snippetSchema = new Schema({
                categories: Array,
                snippet: String
            });
            Snippet = mongoose.model('Snippet', snippetSchema);
        }
        return Snippet;
    }
}