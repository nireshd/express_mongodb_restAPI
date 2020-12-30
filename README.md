# express_mongodb_restAPI
An express mongodb API


To run:
1. `npm install`
2. `npm install -S express mongoose body-parser`
3. Change the databaseURI link in the config file
4. Run app.js


To query database:
Send Get request to : http://13.229.100.17:8001/search?q="search_parameter" where "search_parameter" is the topic you would like to query. 

Example: http://13.229.100.17:8001/search?q="Ribosomes"

Output return is a list of questions that fall below "Ribosomes" in the database. 

