# express_mongodb_restAPI
An express mongodb API that returns questions that fall beneath a hierarchical topic tree.


To run:
1. `npm install`
2. `npm install -S express mongoose body-parser`
3. Change the databaseURI link in line 3 of `db.js` in `/config`
4. Run app.js


## Demo: To query database
Send Get request to : 13.229.100.17:8001/search?q="search_parameter" where "search_parameter" is the topic you would like to query. 

Example: 13.229.100.17:8001/search?q="Ribosomes"

Output is an array of questions that fall below "Ribosomes" in the database. 

