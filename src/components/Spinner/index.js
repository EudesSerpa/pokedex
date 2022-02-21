import React from "react";
import "./style.css";

export default function Spinner() {
  return (
    <div className="loader-wrapper">
      <div className="pokeLoader" />
      <p>Loading...</p>
    </div>
  );
}
