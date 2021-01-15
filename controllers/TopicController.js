const Topic = require("../models/Topic");
const Annotation = require("../models/Annotation");

exports.readTopics = (req, res) => {
    console.log(req.query.q);
    Topic.distinct("topic",
        {
            "$or":
                [{ "ancestors": req.query.q }, { "topic": req.query.q }]
        },
        (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        try {
            Annotation.distinct("question_numbers",
                { "annotation": result },
                (err, result2) => {
                if (err) {
                    res.status(500).send(err);
                }
                try {
                    res.status(200).json(result2); 
                }
                catch (err) { res.status(200).json({ "Empty Array Returned": "No Questions Stored" }) }
            });
        }
        catch (err) { res.status(200).json({"Empty String Returned":"Search String unmatched"})}
    });
};
