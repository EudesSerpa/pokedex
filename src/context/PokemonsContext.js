import React, { useState } from "react";

export const PokemonsContext = React.createContext({});

export const PokemonsContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};
