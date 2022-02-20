import React from "react";
import {
  ArrowBackOutline,
  HeartOutline,
  CloseOutline,
} from "@emotion-icons/evaicons-outline";
import "./style.css";

export default function Detail() {
  return (
    <section className="App-wrapper details-section">
      <div className="buttons">
        <a href="#">
          <ArrowBackOutline color="var(--color-theme)" size="20px" />
        </a>

        <a href="#">
          <HeartOutline color="var(--color-theme)" size="20px" />
          {/* <CloseOutline color="var(--color-theme)" size="20px" /> */}
        </a>
      </div>

      <header>
        <p className="number">#001</p>
        <h2 className="App-title">Bulbasaur</h2>
        <p className="type">Seed Pokémon</p>
      </header>

      <div className="img-container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
          alt="Pokemon"
        />
      </div>

      <ul className="types">
        <li>Grass</li>
        <li>Poison</li>
      </ul>

      <div className="description-section">
        <h3>Pokédex entry</h3>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#" className="active">
                Red
              </a>
            </li>
            <li>
              <a href="#">Green</a>
            </li>
            <li>
              <a href="#">Yellow</a>
            </li>
            <li>
              <a href="#">Gold</a>
            </li>
            <li>
              <a href="#">Silver</a>
            </li>
            <li>
              <a href="#">leafgreen</a>
            </li>
            <li>
              <a href="#">firered</a>
            </li>
          </ul>
        </nav>
        <p className="version-description">
          BULBASAUR can be seen napping in bright sunlight. There is a seed on
          its back. By soaking up the sun&#39;s rays, the seed grows
          progressively larger.
        </p>
      </div>

      <h3>About</h3>
      <table className="attribute-table">
        <tbody>
          <tr>
            <td className="attribute">Height: </td>
            <td>0.7 m</td>
            <td className="attribute">Abilities:</td>
            <td rowSpan={2}>
              <p>Overgrow</p>
              <p>Chlorophyll</p>
            </td>
          </tr>
          <tr>
            <td className="attribute">Weight: </td>
            <td>6,9 kg</td>
          </tr>
          <tr>
            <td className="attribute">Capture rate: </td>
            <td>11,9%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
