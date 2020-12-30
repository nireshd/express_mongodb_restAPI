const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TopicsSchema = new Schema({
    topic: {
        type: String,
        required: true,
    },
    question_number : {
        type: [{
            type: Number
        }],
    },
});



module.exports = mongoose.model("Topic", TopicsSchema);
