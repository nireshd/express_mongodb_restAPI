const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TopicsSchema = new Schema({
    topic: {
        type: String,
        required: true,
    },
    annotations: [{
        type: String
    }],

    question_numbers: [{
            type: Number
    }],
});



module.exports = mongoose.model("Topic", TopicsSchema);
