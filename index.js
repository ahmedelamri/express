const express = require("express");
const serverPort = 5555;
const app = express();
app.listen(serverPort, () => {
  console.log("Le serveur est good");
});
const voitures = [
  { id: 1, name: "Bmw" },
  { id: 2, name: "Renault" },
  { id: 3, name: "Audi" },
  { id: 4, name: "Peugeot" },
];
const getCar = (req, res) => {
  console.log(req.query);
  res.status(200).json(voitures);
};
app.get("/mes-voitures", getCar);
app.get("/mes-voitures/:id", (req, res) => {
  const mesvoitureID = parseInt(req.params.id);
  const voiture = voitures.find((voiture) => voiture.id === mesvoitureID);
  if (voiture) {
    res.send(voiture);
  } else {
    res.sendStatus(404);
  }
});
