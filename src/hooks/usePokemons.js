import { useState, useEffect, useContext } from "react";
import { PokemonsContext } from "context/PokemonsContext";
import { getPokemons } from "services/getPokemons";

const INITIAL_PAGE = 0;

export function usePokemons() {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const { pokemons, setPokemons } = useContext(PokemonsContext);

  useEffect(() => {
    // Pagination with infinite scroll
    let didCancel = false;

    if (!didCancel) {
      setIsLoadingPage(true);

      getPokemons({ page })
        .then((body) => {
          const nextPokemons = body.map((pokemon) => {
            const { id, name, types, sprites } = pokemon;
            const typesName = types.map((type) => type.type.name);
            const url = sprites.other.home?.front_default;

            return { id, name, url, typesName };
          });

          setPokemons((prevPokemons) => prevPokemons.concat(nextPokemons));
          setIsLoadingPage(false);
        })
        .catch((e) => {
          console.log(e);
          setIsLoadingPage(false);
        });
    }

    return () => {
      didCancel = true;
    };
  }, [page, setPokemons]);

  return { pokemons, isLoadingPage, setPage };
}
