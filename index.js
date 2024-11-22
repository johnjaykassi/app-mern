const express = require("express");
const app = express();

const port = 4000;

app.get("/", (_,res)=>{
    res.send("Bienvenue kassi ya longtemps quon vous avais pas vu, En fin vous avez repris le code")
})

app.listen(port, () =>{
    console.log(`Notre serveur est bien lancée sur le port ${port}`);
})