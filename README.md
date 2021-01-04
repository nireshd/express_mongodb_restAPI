# express_mongodb_restAPI
An express mongodb API that returns questions that fall beneath a hierarchical topic tree.


To run:
1. `npm install`
2. `npm install -S express mongoose body-parser`
3. Change the databaseURI link in line 3 of `db.js` in `/config`
4. Run app.js


## Demo: To query database
Send Get request to : http://13.212.160.201:8001/search?q=search_parameter where "search_parameter" is the topic you would like to query. An array of corresponding question numbers will be returned.

Example: http://13.212.160.201:8001/search?q=Ribosomes

Output is an array of questions that fall below "Ribosomes" in the database. 

## Model: Embedded
The model used for topics and annotations can be found in `/models/Topic.js`. Topics are grouped with all child topics listed as `annotations` and all relevant questions listed as `question_numbers`. 
