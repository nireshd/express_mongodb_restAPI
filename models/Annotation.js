const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnotationSchema = new Schema({
    annotation: {
        type: String,
        required: true,
    },
    question_numbers: {
        type: [{
            type: Number
        }],
    },
});

module.exports = mongoose.model("Annotation", AnnotationSchema);
