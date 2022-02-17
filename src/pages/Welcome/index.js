import React from "react";
import Logo from "../../components/Logo";
import "./style.css";

export default function Welcome() {
  return (
    <div className="welcomePage App-wrapper">
      <Logo />
      <br />
      <h1 className="App-title">Pokédex</h1>
      <p>LEARN ABOUT POKEMONS</p>
    </div>
  );
}
