const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route   GET api/shoppingList
// @desc    Get All Items
// @access  Public
router.get('/', (request, response) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => response.json(items));
});

// @route   POST api/shoppingList
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

// @route   DELETE api/shoppingList/:id
// @desc    Create an Item
// @access  Public
router.delete('/:id', (request, response) => {
    Item.findById(request.params.id)
        .then(item => {
            item.remove()
                .then(() => response.json({
                    success: true
                }))
        })
        .catch(error => {
            console.log(error);
            response.status(404).json({
                success: false
            });
        });
});

module.exports = router;
