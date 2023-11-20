import React from "react";
import { Link } from "react-router-dom";
const SingleCocktail = ({ drinks }) => {
  return (
    <section className="cocktail-center">
      {drinks.map((drink) => {
        const { id, name, img, isAlc, glass } = drink;
        return (
          <article className="cocktail-card" key={id}>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <b>{isAlc}</b>
            <span>{glass}</span>
            <Link to={`cocktail/${id}`}>
              <button>More details...</button>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default SingleCocktail;
