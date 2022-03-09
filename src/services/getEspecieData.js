import { API_URL } from "./settings";

export const getEspecieData = async ({ id }) => {
  try {
    const response = await window.fetch(`${API_URL}/pokemon-species/${id}`);

    if (!response.ok) throw new Error("Something went wrong");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
