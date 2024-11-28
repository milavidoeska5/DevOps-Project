const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const groceriesRoutes = require('./routes/groceries');

dotenv.config();

const app = express();
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/groceries', groceriesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
