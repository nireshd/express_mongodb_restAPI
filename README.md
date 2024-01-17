# express_mongodb_restAPI
An express mongodb API that returns questions that fall beneath a hierarchical topic tree.

To run:
1. `npm install`
2. `npm install -S express mongoose body-parser`
3. Change the databaseURI link in line 3 of `db.js` in `/config`
4. Run app.js

## Model: Embedded Annotations, Array of Ancestors Tree for Topics.
The model used for topics and annotations can be found in `/models/Topic.js` and `/models/Annotation.js` respectively. 
