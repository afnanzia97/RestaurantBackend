const express = require('express');
const router = express.Router();
const user = require('./models/order');

router.post('/order', async(req, res) => {
    try {
        const { ID, customerID, items } = req.body;

    }
});