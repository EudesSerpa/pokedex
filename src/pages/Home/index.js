import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import debounce from "just-debounce-it";
import PokemonList from "components/PokemonList";
import SearchForm from "components/SearchForm";
import Spinner from "components/Spinner";
import { usePokemons } from "hooks/usePokemons";
import { useNearScreen } from "hooks/useNearScreen";

import "./style.css";

export default function Home() {
  const visorRef = useRef(null);
  const { pokemons, isLoadingPage, setPage } = usePokemons();
  const { isVisible } = useNearScreen({
    distance: "200px",
    externalRef: isLoadingPage ? null : visorRef,
    once: false,
  });

  useEffect(() => {
    if (isVisible) {
      debounce(() => setPage((prevPage) => prevPage + 1), 200)();
    }
  }, [isVisible, setPage]);

  const data = pokemons.map((pokemon) => {
    const { id, name, types, sprites } = pokemon;
    const typesName = types.map((type) => type.type.name);
    const url = sprites.other.home?.front_default;

    return { id, name, url, typesName };
  });

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
              <Link to="/" className="active">
                Pokémons
              </Link>
            </li>
            <li>
              <Link to="/">Abilities</Link>
            </li>
            <li>
              <Link to="/">Moves</Link>
            </li>
            <li>
              <Link to="/">Types</Link>
            </li>
          </ul>
        </nav>

        <PokemonList pokemons={data} />

        {isLoadingPage && <Spinner />}

        <div id="visor" ref={visorRef} />
      </div>
    </>
  );
}
