import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function RecipeTable(props) {
  function onRecipeRemove(recipe) {
    props.onRecipeRemove(recipe);
  }

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Chef</th>
            <th>Dish Name</th>
            <th>Recipe Steps</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.chef}</td>
              <td>{recipe.name}</td>
              <td>{recipe.steps}</td>
              <td>
                <button
                  onClick={(e) => {
                    onRecipeRemove(recipe);
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
