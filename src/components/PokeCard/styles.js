import styled from "@emotion/styled";
import { Link } from "wouter";
import { generateBackgroundByType } from "styles";

export const PokeCardStyled = styled(Link)`
  position: relative;
  display: block;
  height: 115px;
  padding: 10px;
  color: var(--color-theme);
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
  }

  ${generateBackgroundByType}

  & header,
  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PokeNumber = styled.p`
  font-size: var(--fz-body-s);
  color: #fff;
  opacity: 0.5;
`;

export const TypeListItem = styled.li`
  margin: 8px 0;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: var(--fz-small-s);
  font-weight: 400;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
`;

export const PokeImage = styled.figure`
  max-width: 100%;
  width: 80px;
  aspect-ratio: 1;
`;
