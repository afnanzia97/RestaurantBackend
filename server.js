const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express();
const routes = require('./routes');  

// connecting to MongoDB

mongoose.connect('mongodb://localhost:27017/Restaurant').then(() => {
    console.log('connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

// Routes

app.use('/api', routes); 

 
app.listen(3000, () => {
    console.log('Server is running on port 3000')
}); 






