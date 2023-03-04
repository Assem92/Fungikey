let ChampiJson = require("./assets/champi.json")
let FamilleChampiJson = require("./assets/familleChampi.json")
let FamilleComplementairesJson = require("./assets/familleComplementaires.json")
let recette = require("./assets/recette.json")
let locations = require('./assets/location.json');
let posts = require('./assets/post.json');


const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();


//
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../swagger.json');
//


app.use(bodyParser.json());

app.get("/api/champi", (req, res) => {
    res.json(ChampiJson);});

app.get("/api/champi/:id", (req, res) => {
    const champ=ChampiJson.find(c=> c.id === parseInt(req.params.id));
    if (!champ) res.status(404).send("le champignion n'existe pas");
    res.json(champ);});
  
app.get("/api/familleChampi", (req, res) => {
    res.json(FamilleChampiJson);});

app.get("/api/familleComplementaires", (req, res) => {
    res.json(FamilleComplementairesJson);});
   
app.get("/api/recette", (req, res) => {
        res.json(recette);});    

app.get("/api/recette/:id", (req, res) => {
        const r=recette.find(c=> c.id === parseInt(req.params.id));
        if (!r) res.status(404).send("la recette n'existe pas");
        res.json(r);});    



app.get('/api/closest-points/:latitude/:longitude', (req, res) => {
    const { latitude, longitude } = req.params;
    const userLocation = { latitude, longitude };
    
    // Calculate the distance between the user's location and each location
    const distances = locations.map((location) => {
        const latDiff = location.latitude - userLocation.latitude;
        const lngDiff = location.longitude - userLocation.longitude;
        return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
    });
    
    // Find the 3 closest locations
    const closestLocations = [];
    while (closestLocations.length < 3) {
        const minDistance = Math.min(...distances);
        const minIndex = distances.indexOf(minDistance);
        closestLocations.push(locations[minIndex]);
        distances[minIndex] = Infinity;
    }
    
    res.json(closestLocations);
    });


    app.get('/api/champi-types', (req, res) => {
        const distinctNoms = [...new Set(ChampiJson.map(d => d.nom))];
        res.json(distinctNoms);
      });


    app.post('/api/location', (req, res) => {

        console.log(req.body)
        const newLocation = {
          id: locations.reduce((maxId, location) => Math.max(location.id, maxId), 0) + 1,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          type: req.body.type,
        };

        locations.push(newLocation);
        // Write the updated data to the file
        fs.writeFileSync('./server/assets/location.json', JSON.stringify(locations));
        res.status(201).json(newLocation);
      });

//swagger
app.use('/api-docs',
        swaggerUi.serve, 
        swaggerUi.setup(swaggerDocument)
      );   
//


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});







