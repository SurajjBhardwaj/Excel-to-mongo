// express server using dotenv
require("dotenv").config();
const express = require('express');


const app = express();
const PORT = process.env.PORT || 5001;


app.get("/", (req, res) => {
    
    res.send("heyy balak");
    
});


app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost${PORT}`);
})
