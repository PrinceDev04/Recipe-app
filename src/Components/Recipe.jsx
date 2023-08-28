import React from "react";
import "./Recipe.css";

function Recipe({ recipe }) {
  return (
    <div className="main__div">
      <div className="row__div">
        <div className="row">
          <div className="img__div">
            <a href={recipe.recipe.url} target="blanck">
              <img src={recipe.recipe.image} alt="" />
            </a>
            <div className="info">
              <h3>{recipe.recipe.label}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
