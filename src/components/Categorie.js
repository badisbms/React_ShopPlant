import React from "react";
import { plantList } from "../data/plantList.js";
import ShoppingList from "./ShoppingList.js";

const Categorie = ({ categories, setActiveCategory, activeCategory }) => {


  return (
    <div>
      <label>Choisissez une catégorie</label>
      <select >
        {console.log(categories)}
      </select>
    </div>
  );
};

export default Categorie;
