const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


const dbRoutes = require("./controllers/db-routes");
const jsonRoutes = require("./controllers/json-routes");


router.get('/connect-to-database', dbRoutes.connectToDatabase);
router.get('/get-json-data', jsonRoutes.getSnippets);

router.post('/add-snippet', dbRoutes.addSnippet);
router.post('/add-json-snippet', jsonRoutes.addSnippet);

// router.update('/edit-snippet', );
// router.update('/edit-json-snippet', );

router.delete('/delete-snippet', dbRoutes.deleteSnippet);
// router.delete('/delete-json-snippet', );

module.exports = router;