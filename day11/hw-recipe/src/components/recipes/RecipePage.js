import React, { useEffect, useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeTable from "./RecipeTable";

import service from "../../services/recipe.service";

export default function RecipePage() {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    try {
      const recipes = await service.readRecipes();
      setRecipes(recipes);
    } catch (err) {
      console.log(err);
    }
  }

  function onRecipeCreated(recipe) {
    try {
      service.createRecipe(recipe);
      let newRecipes = recipes.concat([recipe]);
      setRecipes(newRecipes);
    } catch (err) {
      console.log(err);
    }
  }

  function onRecipeRemove(recipe) {
    try {
      service.deleteRecipe(recipe);

      let newRecipes = recipes.filter((b) => {
        return b.id != recipe.id;
      });
      setRecipes(newRecipes);
    } catch (err) {}
  }

  return (
    <div>
      <div className="container mt-5">
        <h1>Add Recipe</h1>
        <RecipeInput onRecipeCreated={onRecipeCreated}></RecipeInput>
        <RecipeTable
          recipes={recipes}
          onRecipeRemove={onRecipeRemove}
        ></RecipeTable>
      </div>
    </div>
  );
}
