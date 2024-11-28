const express = require('express');
const router = express.Router();
const GroceryItem = require('../models/GroceryItem');

router.get('/', async (req, res) => {
    try {
        const groceryItems = await GroceryItem.find(); 
        res.json(groceryItems); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});

router.post('/', async (req, res) => {
    const groceryItem = new GroceryItem({
        name: req.body.name,
        quantity: req.body.quantity,
        category: req.body.category,
        purchased: req.body.completed || false
    });
    try {
        const newGrocery = await groceryItem.save(); 
        res.status(201).json(newGrocery); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedGrocery = await GroceryItem.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name, quantity: req.body.quantity, category: req.body.category, purchased: req.body.purchased },
            { new: true }
        ); 
        res.json(updatedGrocery); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await GroceryItem.findByIdAndDelete(req.params.id); 
        res.json({ message: 'Grocery deleted' }); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});

module.exports = router;
