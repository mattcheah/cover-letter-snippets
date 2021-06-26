const express = require('express');
const router = express.Router();

const dbRoutes = require("./controllers/db-routes");
const jsonRoutes = require("./controllers/json-routes");

router.post('/connect-to-database', dbRoutes.connectToDatabase);
router.post('/get-json-data', jsonRoutes.getSnippets);

router.post('/add-snippet', dbRoutes.addSnippet);
router.post('/add-json-snippet', jsonRoutes.addSnippet);

router.put('/edit-snippet', dbRoutes.editSnippet);
router.put('/edit-json-snippet', jsonRoutes.editSnippet);

router.delete('/delete-snippet', dbRoutes.deleteSnippet);
router.delete('/delete-json-snippet', jsonRoutes.deleteSnippet);

// for aliases
router.post('/get-json-category-aliases-data', jsonRoutes.getCategoryAliases);

router.post('/add-json-category-aliases', jsonRoutes.addCategoryAliases);

router.put('/edit-json-category-aliases', jsonRoutes.editCategoryAliases);

router.delete('/delete-json-category-aliases', jsonRoutes.deleteCategoryAliases);

module.exports = router;