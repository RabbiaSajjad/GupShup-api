const express = require("express");

const app = express();

const cors = require("cors");

// require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3001;
const db_name = process.env.DB_NAME || 'gupshup'
const userRoutes = require('./routes/user.router');

// To connect with your mongoDB database
const mongoose = require("mongoose");
var database = mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    const db = connection.db;
    console.log("MongoDB database connection established successfully");
})


app.use(cors());

app.use(express.json());
app.use('/users', userRoutes);


app.listen(port, () => {
  // Perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});
