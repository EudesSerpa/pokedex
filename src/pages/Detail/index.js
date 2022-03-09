import React, { useState } from "react";
import { Link, Redirect } from "wouter";

import useSinglePokemon from "hooks/useSinglePokemon";
import Spinner from "components/Spinner";
import { formattedId } from "styles/index.js";
import {
  ArrowBackOutline,
  HeartOutline,
  CloseOutline,
} from "@emotion-icons/evaicons-outline";

import "./style.css";

const LANGUAGE = "en";

export default function Detail({ params }) {
  const { pokemon, isLoading, isError } = useSinglePokemon({ id: params.id });
  const [isFaved, setIsFaved] = useState(false);

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;

  if (!pokemon) return null;

  const { id, name, sprites, types } = pokemon;
  const image = sprites?.other?.home;

  const generaName = pokemon.genera?.reduce((ac, el) => {
    if (el.language.name === LANGUAGE) {
      return el.genus;
    }

    return ac;
  }, "");

  const descByVersion = pokemon.flavor_text_entries?.filter(
    (el) => el.language.name === LANGUAGE
  );

  return (
    <section className={`App-wrapper details-section ${types[0].type.name}`}>
      {/* Create as component: Favorite */}
      <div className="buttons">
        <Link to="/">
          <span aria-label="Back button" title="Back button" role="img">
            <ArrowBackOutline
              color="var(--color-theme)"
              size="20px"
              aria-hidden={true}
            />
          </span>
        </Link>

        <button onClick={() => setIsFaved((prev) => !prev)}>
          <span aria-label="Fav" title="Fav" role="img">
            {isFaved ? (
              <CloseOutline
                color="var(--color-theme)"
                size="20px"
                aria-hidden={true}
              />
            ) : (
              <HeartOutline
                color="var(--color-theme)"
                size="20px"
                aria-hidden={true}
              />
            )}
          </span>
        </button>
      </div>

      <header>
        <p className="number">{`#${formattedId(id)}`}</p>
        <h2 className="App-title name">{name}</h2>
        <p className="type">{generaName}</p>
      </header>

      <figure className="img-container">
        <img src={image.front_default} alt={name} />
      </figure>

      <ul className="types">
        {types.map((obj) => (
          <li key={obj.type.name}>{obj.type.name}</li>
        ))}
      </ul>

      <div className="description-section">
        <h3>Pokédex entry</h3>

        <ul className="nav-menu">
          {descByVersion.map((obj) => (
            <li key={obj.version.name}>{obj.version.name}</li>
          ))}
        </ul>
        <p className="version-description">"x"</p>
      </div>

      <h3>About</h3>
      <table className="attribute-table">
        <tbody>
          <tr>
            <td className="attribute">Height: </td>
            <td>{pokemon.height / 10} m</td>

            <td className="attribute">Abilities:</td>
            <td rowSpan={pokemon.abilities.length}>
              {pokemon.abilities.map((obj) => (
                <p
                  key={obj.ability.name}
                  style={{ textTransform: "capitalize" }}
                >
                  {obj.ability.name}
                </p>
              ))}
            </td>
          </tr>

          <tr>
            <td className="attribute">Weight: </td>
            <td>{pokemon.weight / 10} Kg</td>
          </tr>

          <tr>
            <td className="attribute">Capture rate: </td>
            <td>{((pokemon.capture_rate * 100) / 255).toFixed(2)} %</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
