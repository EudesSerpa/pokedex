import React from "react";
import { SearchOutline } from "@emotion-icons/evaicons-outline";
import "./style.css";

export default function SearchForm() {
  return (
    <form className="form-search">
      <label htmlFor="search">
        <SearchOutline aria-hidden="true" />
        <input id="search" type="search" placeholder="Search Pokemon" />
      </label>
    </form>
  );
}
