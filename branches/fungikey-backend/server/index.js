let ChampiJson = require("./assets/champi.json")
let FamilleChampiJson = require("./assets/familleChampi.json")
let FamilleComplementairesJson = require("./assets/familleComplementaires.json")

const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/champi", (req, res) => {
    res.json(ChampiJson);});


app.get("/api/champi/:id", (req, res) => {
    const champ=ChampiJson.find(c=> c.id === parseInt(req.params.id));
    if (!champ) res.status(404).send("le chapignion n'existe pas");
    res.json(champ);});
  
app.get("/api/familleChampi", (req, res) => {
    res.json(FamilleChampiJson);});

app.get("/api/familleComplementaires", (req, res) => {
    res.json(FamilleComplementairesJson);});
      
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});







