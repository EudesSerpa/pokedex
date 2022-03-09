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
          setPokemons((prevPokemons) => prevPokemons.concat(body));
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
