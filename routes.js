const express = require('express');
const router = express.Router();
const user = require('./models/Restaurant');
const Order = require('./models/Order');
const Customer = require('./models/Customer');


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

router.get('/Customer', async (req, res) => {
  try {
    const Cusomter = await Customer.findOne({ ID: req.body.ID });
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'Customer not found' });
  }
});

router.put('/Customer', async (req, res) => {
  try {
    const updated = await Customer.findOneAndUpdate(
      { ID: req.body.ID },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/Customer', async (req, res) => {
  try {
    await Customer.findOneAndDelete({ ID: req.body.ID });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/Order', async(req, res) => {
    try {
        const {orderNumber, meal, dessert, drinks, size, dinein_OR_takeaway} = req.body;


       
        const newOrder = new Order({orderNumber, meal, dessert, drinks, size, dinein_OR_takeaway});
        await newOrder.save();
        res.status(201).json({ message: 'select from Order', Order: newOrder});

    } catch(error) {
        console.error('Error', error);
        res.status(500).json({message: 'Internal server error'});
    }

router.get('/Order', async (req, res) => {
  try {
    const Order = await Order.findOne({ orderNumber: req.body.orderNumber });
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'Order not found' });
  }
});

router.put('/Order', async (req, res) => {
  try {
    const updated = await Order.findOneAndUpdate(
      { orderNumber: req.body.orderNumber },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete('/Order', async (req, res) => {
  try {
    await Order.findOneAndDelete({ orderNumber: req.body.orderNumber });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

})
});

module.exports = router;