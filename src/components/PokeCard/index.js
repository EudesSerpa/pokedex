import React from "react";
import { formattedId } from "styles/index.js";
import {
  PokeCardStyled,
  PokeNumber,
  TypeListItem,
  PokeImage,
} from "./styles.js";

function PokeCard({ name, id, types, url }) {
  const mainType = types[0];
  const listType = types.map((type) => (
    <TypeListItem key={type}>{type}</TypeListItem>
  ));

  return (
    <PokeCardStyled to={`/pokemon/${id}`} maintype={mainType}>
      <header>
        <p>{name}</p>
        <PokeNumber>{`#${formattedId(id)}`}</PokeNumber>
      </header>

      <div>
        <ul>{listType}</ul>

        <PokeImage>
          <img src={url} alt={name} loading="lazy" />
        </PokeImage>
      </div>
    </PokeCardStyled>
  );
}

export default React.memo(PokeCard, (prevPros, nextProps) => {
  return prevPros.id === nextProps.id;
});
