/**
 * Get Pokemons
 *  * Fetch Pokemons data from Poke API
 * @param { page: number, limit: number }
 * @returns Array | Array<Objetc>
 *
 */

import { API_URL } from "./settings";

const fromApiResponseToPokemons = async (apiResponse) => {
  const { results = [] } = apiResponse;

  if (Array.isArray(results)) {
    const promises = results.map(async (pokemon) => {
      const { url } = pokemon;

      const response = await window.fetch(url);
      return await response.json();
    });

    return await Promise.all(promises);
  }

  return [];
};

export const getPokemons = async ({ page = 0, limit = 15 } = {}) => {
  try {
    const response = await window.fetch(
      `${API_URL}/pokemon?offset=${page * limit}&limit=${limit}`
    );

    if (!response.ok) throw new Error("Something went wrong");

    const body = await response.json();

    return await fromApiResponseToPokemons(body);
  } catch (error) {
    console.log(error);
  }
};
