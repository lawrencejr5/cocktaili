import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../contextApi";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef(null);
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <article className="search-container">
      <form>
        <div className="form-control">
          <input
            type="text"
            name="search"
            placeholder="Search cocktail"
            id="search"
            ref={searchRef}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </article>
  );
};

export default SearchForm;
