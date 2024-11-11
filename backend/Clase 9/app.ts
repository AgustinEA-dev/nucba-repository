import express from "express";

import { getPokemonById } from "./controllers/pokemon";
import { getSimplePokemonById } from "./controllers/pokemon";
import { getMultiplePokemon } from "./controllers/pokemon";
import { getPokemonAbilities } from "./controllers/pokemon";

const app = express();

const PORT = 8080;

//Seteamos el middleware

app.use(express.json());

app.get("/pokemon/full/:id", getPokemonById);

app.get("/pokemon/simple/:id/", getSimplePokemonById);

app.get("/pokemon/multiple", getMultiplePokemon);

app.get("/pokemon/onlyAbilities/ability", getPokemonAbilities);

app.listen(8080, () => {
  console.log("Escuchando en el puerto 8080");
});
