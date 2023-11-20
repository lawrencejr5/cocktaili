import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../contextApi";
import Loading from "../components/Loading";

const Cocktail = () => {
  const { cocktail, loading, setCockId } = useGlobalContext();
  const { id } = useParams();
  useEffect(() => {
    setCockId(id);
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return (
      <div className="noDrink">
        <h4>I'm sorry, no drink was found matching this id</h4>;
      </div>
    );
  }
  const { name, date, category, img, ingredients, instruction, isAlc, glass } =
    cocktail[0];
  return (
    <section className="cockById">
      <div className="img">
        <Link to="/" className="link">
          ......
        </Link>
        <br />
        <img src={img} width="300px" height="auto" alt="" />
      </div>
      <div className="details">
        <p className="name">{name}</p>
        <p className="category">
          <span>Category: </span>
          {category}
        </p>
        <p className="glass">
          <span>Glass: </span>
          {glass}
        </p>
        <p className="date">
          <span>Date Modified: </span>
          {date}
        </p>
        <p className="isAlc">
          <span>Info: </span>
          {isAlc}
        </p>
        <p className="instructions">
          <span>Instructions:</span>
          {instruction}
        </p>
        <p className="ingridient">
          <span>Ingredients: </span>

          {ingredients.map((ing, index) => {
            return <em key={index}>{ing ? `${ing},` : ""}</em>;
          })}
        </p>
      </div>
    </section>
  );
};

export default Cocktail;
