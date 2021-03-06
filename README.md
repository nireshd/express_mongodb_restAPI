# express_mongodb_restAPI
An express mongodb API that returns questions that fall beneath a hierarchical topic tree.

To run:
1. `npm install`
2. `npm install -S express mongoose body-parser`
3. Change the databaseURI link in line 3 of `db.js` in `/config`
4. Run app.js

## Demo: To query database
Send Get request to : http://13.212.169.179:8001/search?q=search_parameter where "search_parameter" is the topic you would like to query. An array of corresponding question numbers will be returned.

Example: http://13.212.169.179:8001/search?q=Ribosomes for topic 'Ribosomes'

Output is an array of questions that fall below 'Ribosomes' in the database. 

and: http://13.212.169.179:8001/search?q=Biological%20Molecules for 'topic Biological Molecules.'. 

Output is an array of questions that fall below 'Biological Molecules' in the database. 

## Model: Embedded Annotations, Array of Ancestors Tree for Topics.
The model used for topics and annotations can be found in `/models/Topic.js` and `/models/Annotation.js` respectively. 
