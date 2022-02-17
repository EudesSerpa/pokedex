import React from "react";
import { SearchOutline } from "@emotion-icons/evaicons-outline";
import "./style.css";

export default function Home() {
  return (
    <div className="App-wrapper">
      <header className="form-wrapper">
        <h2 className="App-title">Pokédex</h2>

        <form className="form-search">
          <label htmlFor="search">
            <SearchOutline aria-hidden="true" />
            <input id="search" type="search" placeholder="Search Pokemon" />
          </label>
        </form>
      </header>

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

      <section className="pokemons-grid-container">
        <article className="card grass">
          <header>
            <p className="pokemon-name">Bulbasaur</p>
            <p className="pokemon-number">#001</p>
          </header>

          <div className="details">
            <ul className="types">
              <li>Grass</li>
              <li>Poison</li>
            </ul>
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                alt="Pokemon"
                loading="lazy"
              />
            </div>
          </div>
        </article>
        <article className="card fire">
          <header>
            <p className="pokemon-name">Charmander</p>
            <p className="pokemon-number">#004</p>
          </header>

          <div className="details">
            <ul className="types">
              <li>Fire</li>
            </ul>
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png"
                alt="Pokemon"
                loading="lazy"
              />
            </div>
          </div>
        </article>
        <article className="card water">
          <header>
            <p className="pokemon-name">Squirtle</p>
            <p className="pokemon-number">#007</p>
          </header>

          <div className="details">
            <ul className="types">
              <li>Water</li>
            </ul>
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png"
                alt="Pokemon"
                loading="lazy"
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
