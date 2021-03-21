const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// // Connect to MongoDB
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
// const connection = mongoonse.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully!");
// });

const staffRouter = require("./routes/staffs");

app.use("/staffs", staffRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});