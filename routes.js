const express = require('express');
const router = express.Router();
const user = require('./models/Restaurant');
const Menu = require('./models/Menu');


router.post('/Customer', async(req, res) => {
    try {
        const {ID, age, gender, income} = req.body;


       
        const newCustomer = new Customer({ID, age, gender, income});
        await newCustomer.save();
        res.status(201).json({ message: 'new customer order', customer: newCustomer});

    } catch(error) {
        console.error('Error making order', error);
        res.status(500).json({message: 'Internal server error'});
    }

router.get('/Customer', (req, res) => {
    res.json({ message: 'Welcome to the Restaurant' });
});

router.put('/Customer', (req, res) => {
    res.json({ message: 'Customer has finished his order' });
});

router.delete('/Customer', (req, res) => {
    res.json({ message: "Delete this customer" });
});

router.post('/Menu', async(req, res) => {
    try {
        const {orderNumber, meal, dessert, drinks, size, dinein_OR_takeaway} = req.body;


       
        const newMenu = new Menu({orderNumber, meal, dessert, drinks, size, dinein_OR_takeaway});
        await newMenu.save();
        res.status(201).json({ message: 'select from Menu', menu: newMenu});

    } catch(error) {
        console.error('Error', error);
        res.status(500).json({message: 'Internal server error'});
    }

router.get('/Menu', (req, res) => {
    res.json({ message: 'an oder has been made' });
});

router.put('/Menu', (req, res) => {
    res.json({ message: 'Would you like anything else?' });
});

router.delete('/Menu', (req, res) => {
    res.json({ message: "Delete this customer's order" });
});

})
});

module.exports = router;