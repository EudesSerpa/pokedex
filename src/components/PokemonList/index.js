import React from "react";
import PokeCard from "components/PokeCard";

import "./style.css";

export default function PokemonList({ pokemons } = { pokemons: [] }) {
  return (
    <section className="pokemons-grid-container">
      {pokemons.map(({ name, id, typesName, url }) => (
        <PokeCard
          key={`${id}${url}`}
          name={name}
          id={id}
          types={typesName}
          url={url}
        />
      ))}
    </section>
  );
}
