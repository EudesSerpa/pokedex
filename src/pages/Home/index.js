import React, { useEffect, useState } from "react";
import PokemonList from "components/PokemonList";
import SearchForm from "components/SearchForm";
import "./style.css";

import { getPokemons } from "services/getPokemons";
import { type } from "@testing-library/user-event/dist/type";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      getPokemons()
        .then((body) => {
          const data = body.map((pokemon) => {
            const { id, name, types, sprites } = pokemon;

            const typesName = types.map((type) => type.type.name);

            const url = sprites.other.home?.front_default;

            return { id, name, url, typesName };
          });

          console.log(data);

          setPokemons(data);
        })
        .catch((e) => console.log(e));
    }

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <>
      <header className="header-form">
        <h2 className="App-title">Pokédex</h2>
        <SearchForm />
      </header>

      <div className="App-wrapper">
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#" className="active">
                Pokémons
              </a>
            </li>
            <li>
              <a href="#">Abilities</a>
            </li>
            <li>
              <a href="#">Moves</a>
            </li>
            <li>
              <a href="#">Types</a>
            </li>
          </ul>
        </nav>

        <PokemonList pokemons={pokemons} />
      </div>
    </>
  );
}
