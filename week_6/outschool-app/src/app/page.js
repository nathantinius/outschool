"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { TestComponent } from "@/components/TestComponent";
import { PokemonCard } from "@/components/PokemonCard";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState();

  const getPokemon = async (pokemonName) => {
    await axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    }).then((result) => {
      console.log(result.data);
      return setPokemon(result.data);
    }).catch((error) => {
      console.log(error);
      return null
    }) 
  }

  useEffect(() => {
    if (!pokemon) {
      getPokemon("mewtwo")
    }
  }, [])


  return (
    <div className={styles.main}>
      <div className={styles.horizontal}>
        <div className={styles.helloWorld}>
          <h1>Hello World</h1>
        </div>
        <div className={styles.yeah}>
          <p>{!pokemon ? "Yeah" : pokemon.name}</p>
        </div>
      </div>
      <TestComponent />
      <form onSubmit={(e) => {
        e.preventDefault();
        getPokemon(e.target.pokemon.value);
      }}>
        <input className={styles.inputField} type="text" id="pokemon" />
      </form>
      <div className={styles.employeeCardList}>
        {pokemon ? (
          <PokemonCard 
            imageURL={pokemon.sprites.front_default} 
            pokemonName={pokemon.name} 
            type={pokemon.types[0].type.name} 
            favoriteMove={pokemon.moves[0].move.name} 
            weight={pokemon.weight} 
          />
        ) : null}
      </div>
    </div>
  );
}
