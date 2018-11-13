const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (request, response) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => response.json(items));
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (request, response) => {
    const newItem = new Item({
        name: request.body.name,
    });

    newItem.save()
        .then(item => response.json(item))
        .catch(error => console.log(error));
});

module.exports = router;