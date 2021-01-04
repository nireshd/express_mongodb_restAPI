const express = require("express");
const bodyParser = require("body-parser");
const topicController = require("./controllers/TopicController");

// db instance connection
require("./config/db");

const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint
app
    .route("/search")
    .get(topicController.readTopics)

// Serve
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
