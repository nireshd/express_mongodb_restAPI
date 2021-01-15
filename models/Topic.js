const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TopicsSchema = new Schema({
    topic: {
        type: String,
        required: true,
    },
    _id: [{
        type: String
    }],

});

module.exports = mongoose.model("Topic", TopicsSchema);
