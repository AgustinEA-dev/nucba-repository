import { Request, Response } from "express";

import axios from "axios";

import { Pokemon, MultiplePokemonObject } from "../interfaces/pokemon";

export const getPokemonById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("Enviando datos a la pokeAPi");
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  res.json({ data });
  console.log("Respuesta enviada al front");
};

export const getPokemonAbilities = async (req: Request, res: Response) => {
  const { limit = 5, offset = 0 } = req.query;
  console.log("enviando datos a la pokeAPi");
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/ability?limit=${limit}&offset=${offset}`
  );
  res.json({ data });
  console.log("Rspuesta enviada al front");
};

export const getSimplePokemonById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("Petición enviada a la pokeAPi");
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const { name, order, sprites, abilities, types }: Pokemon = response.data;
  const bestImg = sprites.other?.dream_world.front_default;
  const simplePokemon = {
    name,
    abilities,
    bestImg,
    order,
    types,
  };
  res.json({
    simplePokemon,
  });
  console.log("Respuesta enviada a a la pokeAPi");
};

export const getMultiplePokemon = async (req: Request, res: Response) => {
  const { limit = 5, offset = 0 } = req.query;
  console.log("Eviando datos a la pokeAPi");
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const pokemonDataUrls: string[] = response.data.results.map(
    (pokemon: MultiplePokemonObject) => pokemon.url
  );
  const finalPokemonData = await Promise.all(
    pokemonDataUrls.map(async (url: string) => {
      const pokemonData = await axios.get(url);
      return pokemonData.data;
    })
  );
  res.json({
    finalPokemonData,
  });
};
