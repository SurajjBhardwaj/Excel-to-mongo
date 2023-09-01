const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    }
}, { TimStamps: true });


const data = mongoose.model('data', schema);
mongoose.exports = data;

// mongoose.exports = mongoose.model("data", schema);