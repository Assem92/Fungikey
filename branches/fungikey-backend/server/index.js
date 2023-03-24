let ChampiJson = require("./assets/champi.json")
let FamilleChampiJson = require("./assets/familleChampi.json")
let FamilleComplementairesJson = require("./assets/familleComplementaires.json")
let recette = require("./assets/recette.json")
let locations = require('./assets/location.json');
let posts = require('./assets/post.json');
let products = require('./assets/product.json');
let periodes = require('./assets/periode.json');

const path = require('path');


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



     //posts 
     app.get('/api/posts', (req, res) => {
        res.json(posts);
      }); 
      app.post('/api/posts', (req, res) => {
        const { title, content, author, visibility, tag, username, image } = req.body;
      
        // Generate a new id for the post
        const id = Math.max(...posts.map(post => post.id)) + 1;
      
        // If username or tag or image is not provided, replace them with a default value
        const post = {
          id,
          title: title || 'Untitled',
          content: content || { text: '', image: image || 'Not defined' },
          author: author || 'Anonymous',
          timestamp: new Date().toISOString(),
          visibility: visibility || 'public',
          tag: tag ? tag.split(/[ ,]+/) : [], // split tag string by comma or space
          username: username || 'Not defined',
          stats : {likes:0 ,dislikes:0}
        };
      
        // Add the new post to the list
        posts.push(post);
      
        // Write the updated list to the JSON file
        const fs = require('fs');
        const filePath = path.resolve(__dirname, 'assets', 'post.json');
        fs.writeFile(filePath, JSON.stringify(posts), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error writing to file' });
          } else {
            res.status(200).send(post);
          }
        });
      });
      
// Increase the like count for a post with a given id
app.post('/api/posts/:id/like', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
  
    if (post) {
      post.stats.likes += 1;
  
      // Write the updated list to the JSON file
      const fs = require('fs');
      const filePath = path.resolve(__dirname, 'assets', 'post.json');
      fs.writeFile(filePath, JSON.stringify(posts), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Error writing to file' });
        } else {
          res.status(200).send(post);
        }
      });
    } else {
      res.status(404).send({ message: `Post with id ${postId} not found` });
    }
  });
  
  // Increase the dislike count for a post with a given id
  app.post('/api/posts/:id/dislike', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
  
    if (post) {
      post.stats.dislikes += 1;
  
      // Write the updated list to the JSON file
      const fs = require('fs');
      const filePath = path.resolve(__dirname, 'assets', 'post.json');
      fs.writeFile(filePath, JSON.stringify(posts), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Error writing to file' });
        } else {
          res.status(200).send(post);
        }
      });
    } else {
      res.status(404).send({ message: `Post with id ${postId} not found` });
    }
  });
  
//products
// GET request to retrieve all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST request to add a new product
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  // Generate a unique ID for the new product
  newProduct.id = Math.floor(Math.random() * 1000000);
  newProduct.views =0;
  // Add the new product to the products array
  products.push(newProduct);
  // Write the updated product data to the JSON file
  fs.writeFileSync('./assets/product.json', JSON.stringify(products));
  // Send a response with the updated products array
  res.json(products);
});


//periodes
// GET request to retrieve all products
app.get('/api/periodes', (req, res) => {
  res.json(periodes);
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







