Map Application Using OSM Map

OSM Map Provider: Leaflet

Api Used: https://photon.komoot.io/api/

Project Structure:

src > actions > components > reducers
App.css
App.js
index.js

Working of the App:

1. Map provided with three maps United States, India, and United Kingdom as default.
2. On user's map selction the app moves the marker to the country selected and displays
   currency, speed, distance, volume unit selected of that country.
3. The application's map region and regoin info is handled using redux.
4. Ant Design is used to create the app components

Way to test the api:

Api: https://photon.komoot.io/api/

1. https://photon.komoot.io/api/?q=placename
2. placename is the name of the place for which data is to be fetched
3. The api can be tested using Postman or simply typing in the browser along with placename as the parameter
   will return OSM data supporting the place
