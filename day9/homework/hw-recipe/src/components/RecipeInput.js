import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Recipe } from "../models/recipe";

export default function RecipeInput(props) {
  const [chef, setChef] = useState("");
  const [name, setName] = useState("");
  const [steps, setSteps] = useState("");

  function onFormSubmitted(event) {
    event.preventDefault();

    const recipe = new Recipe(new Date().getTime(), chef, name, steps);
    props.onRecipeCreated(recipe);
    setChef("");
    setName("");
    setSteps("");
  }

  return (
    <div>
      <form onSubmit={onFormSubmitted}>
        <div className="mb-3">
          <label className="form-label">Chef</label>
          <input
            className="form-control"
            value={chef}
            onChange={(e) => {
              setChef(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dish Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Recipe Steps</label>
          <textarea
            class="form-control"
            value={steps}
            onChange={(e) => {
              setSteps(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary">Submit</button>
        </div>
      </form>
    </div>
  );
}
