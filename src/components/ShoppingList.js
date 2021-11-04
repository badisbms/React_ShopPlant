import React from "react";
import { plantList } from "../data/plantList.js";
import "../styles/ShoppingList.css";
import Plantitem from "./Plantitem.js";
import Categorie from "./Categorie.js";
import { useState } from "react";

const ShoppingList = ({cart, updateCart}) => {

 

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {

		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {

			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
    
	}

  return (
    <div>
  <Categorie
				categories={categories}
				// setActiveCategory={setActiveCategory}
				// activeCategory={activeCategory}
			/>

      <ul className="lmj-plant-list">
      {plantList.map(({ id, cover, name, water, light, price, category }) => (

                    <div key={id}>
                        <Plantitem cover={cover} name={name} water={water} light={light} price={price} />
                        <button className="addCartButton"onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

// const categories = plantList.reduce(
//   (acc, plant) =>
//     acc.includes(plant.category) ? acc : acc.concat(plant.category),
//   []
// );

//   return (
//     <div>
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat}>{cat}</li>
//         ))}
//       </ul>
//       <ul className="lmj-plant-list">
//         {plantList.map((plant) => (
//           // {plant.isBestSale ? <span>🔥</span> : null}
//           <li key={plant.id} className="lmj-plant-item">
//             {plant.name}
// 			<CareScale careType='water' scaleValue={plant.water} />
// 			<CareScale careType='light' scaleValue={plant.light} />
//             {plant.isBestSale && plant.category === "extérieur" && (
//               <span>🔥</span>
//             )}
//             {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
