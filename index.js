require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5001;
const URI = process.env.URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database is connected successfully`);
  })
  .catch((err) => {
    console.error(`Error in connecting to the database: ${err}`);
  });

const userRoute = require('./routes/userRoutes');
app.use('/', userRoute);


app.get("/", (req, res) => {
  res.send("heyy balak");
});

app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
});
