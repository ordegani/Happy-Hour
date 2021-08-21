import React, { useEffect, useState } from "react";
import "../App.css";
import Recipe from "./Recipe";

export const Random = () => {
  //save my edamam ID and KEY as consts
  const APP_ID = "a6127f3e";
  const APP_KEY = "379b06961b2bac9e9f2a72ba27d63d80";

  const [recipes, setRecipes] = useState([]);
  //setState search. default a empty string.
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cocktail");
  const [favourites, setFavourites] = useState([]);

  //add to my existing list of favourites new recipe
  const addTofavourites = (savedRecipe) => {
    let isExists = false;

    favourites.find((favorite) => {
      if (favorite.image === savedRecipe.image) {
        isExists = true;
        alert("Recipe is already saved");
      }
    });

    if (!isExists) {
      setFavourites([...favourites, savedRecipe]);
      alert("Saved");
      console.log(favourites);
    }
  };

  const deleteFromfavourites = (recipe) => {
    setFavourites(
      favourites.filter((favourite) => favourite.title !== recipe.title)
    );

    // console.log(recipe);
  };
  //useEffect, rendering time is when query is updated
  useEffect(() => {
    getRecipes();
  }, [query]);

  const flavourArray = ["banana", "apple", "coffee", "chocolate", "strawberry"];
  const ran = Math.floor(Math.random() * flavourArray.length);
  const searcher = flavourArray[ran];

  //insert the const APP_ID & const APP_KEY.
  //'q=' will draw my user's text input
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${searcher}+cocktail&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    if (search.includes("cocktail")) {
      console.log(data.hits);
    }
  };

  //update search using user's input
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  //set query equal to search pervent rendering whenever a letter is typed
  //use e.preventDefault() to pervant default q='chicken' query
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  //form + map() recipes.
  //create 'title', which 'meyatzeg'info from recipe.recipe.label. create 'calories', 'image', ingredients.
  //recipe => (return jsx)
  return (
    <div className="maincontainer">
      <div className="recipes">
        {recipes.slice(9).map((recipe, index) => (
          <Recipe
            key={index}
            id="1"
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      )
    </div>
  );
};

export default Random;
