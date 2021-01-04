const Topic = require("../models/Topic");

exports.readTopics = (req, res) => {
    console.log(req.query.q);
    Topic.find({ "topic": req.query.q }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        try { res.status(200).json(result[0]["question_numbers"]); }
        catch (err) { res.status(200).json({"Empty String Returned":"No results found"})}
    });
};



