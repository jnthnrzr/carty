const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (request, response) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => response.json(items));
});


module.exports = router;