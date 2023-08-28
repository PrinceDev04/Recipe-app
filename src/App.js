import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./Components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("apple");

  async function fetchData() {
    try {
      const result = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=80372c86&app_key=a9cbe5ad96a5e29f94e89a250d315a90`
      );
      setRecipes(result.data.hits);
      console.log(result.data.hits)
    } catch (error) {
      console.error("Network error", error);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    fetchData();
  }

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Food Recipe Plaza</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Ingredient"
            value={query}
            autoComplete="off"
            onChange={(event) => setQuery(event.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div className="main__div">
        {recipes &&
          recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
          ))}
      </div>
    </div>
  );
}

export default App;
