import React, { useEffect, useCallback, useRef } from "react";
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
      console.log(isVisible);

      debounce(() => setPage((prevPage) => prevPage + 1), 200)();
    }
  }, [isVisible, setPage]);

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

        {isLoadingPage && <Spinner />}

        <div id="visor" ref={visorRef} />
      </div>
    </>
  );
}
