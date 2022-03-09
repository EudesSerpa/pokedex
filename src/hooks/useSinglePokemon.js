import { useState, useContext, useEffect } from "react";
import { PokemonsContext } from "context/PokemonsContext";
import { getSinglePokemon } from "services/getSinglePokemon";
import { getEspecieData } from "services/getEspecieData";

/**
 * Get a Pokemon from the cache (context) or from getSinglePokemon service
 *
 * @param {*} id
 * @returns { pokemon, isLoading, isError }
 */
export default function useSinglePokemon({ id }) {
  const { pokemons } = useContext(PokemonsContext);
  const pokemonFromCache = pokemons.find((pk) => pk.id === id);

  const [pokemon, setPokemon] = useState(pokemonFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      if (!pokemon) {
        setIsLoading(true);

        Promise.all([getSinglePokemon({ id }), getEspecieData({ id })])
          .then((values) => {
            setPokemon({ ...values[0], ...values[1] });

            setIsLoading(false);
            setIsError(false);
          })
          .catch((error) => {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
          });
      }
    }

    return () => {
      didCancel = true;
    };
  }, [pokemon, id]);

  return { pokemon, isLoading, isError };
}
