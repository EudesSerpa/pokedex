import React from "react";
import "./style.css";

export default function PokeCard({ name, id, types, url }) {
  const formatedId = `${id}`.padStart(3, "0");
  const mainType = types[0];
  const listType = types.map((type) => <li key={type}>{type}</li>);

  return (
    <article className={`card ${mainType}`}>
      <header>
        <p className="pokemon-name">{name}</p>
        <p className="pokemon-number">{`#${formatedId}`}</p>
      </header>

      <div className="details">
        <ul className="types">{listType}</ul>
        <div className="img-container">
          <img src={url} alt={name} loading="lazy" />
        </div>
      </div>
    </article>
  );
}
