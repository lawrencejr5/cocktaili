import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const url_id = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const AppContextComponent = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [cocktail, setCocktail] = useState(null);
  const [searchTerm, setSearchTerm] = useState("m");
  const [cockId, setCockId] = useState(null);
  const fetchCocktails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            isAlc: strAlcoholic,
            glass: strGlass,
          };
        });
        setDrinks(newDrinks);
        setLoading(false);
      } else {
        setLoading(false);
        setDrinks([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchCocktail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url_id}${cockId}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks[0]) {
        setLoading(false);
        const newCocktail = drinks.map((drink) => {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strCategory,
            strDrinkThumb,
            strGlass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            dateModified,
            strInstructions,
          } = drink;
          return {
            id: idDrink,
            name: strDrink,
            isAlc: strAlcoholic,
            category: strCategory,
            img: strDrinkThumb,
            glass: strGlass,
            ingredients: [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            ],
            instruction: strInstructions,
            date: dateModified,
          };
        });
        setCocktail(newCocktail);
        setLoading(false);
      } else {
        setCocktail([]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCocktail();
  }, [cockId]);

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{ loading, setSearchTerm, drinks, cocktail, setCockId }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
