import { API_URL } from "./settings";

export const getSinglePokemon = async ({ id }) => {
  try {
    const response = await window.fetch(`${API_URL}/pokemon/${id}`);

    if (!response.ok) throw new Error("Something went wrong x");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
