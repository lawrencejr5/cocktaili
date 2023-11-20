import React from "react";
import SingleCocktail from "./SingleCocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../contextApi";

const CocktailList = () => {
  const { drinks, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (drinks.length === 0) {
    return <h1>No drinks match ur search</h1>;
  }
  return (
    <section className="cocktail-container">
      <h2>Cocktails</h2>

      <SingleCocktail drinks={drinks} />
    </section>
  );
};

export default CocktailList;
