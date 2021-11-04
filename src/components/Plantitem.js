import React from 'react';
import CareScale from "./CareScale.js";

import "../styles/Plantitem.css";

const Plantitem = ({ id, name, cover, light, water, price }) => {

	// function click() {

	// 	alert(`Vous avez cliqué sur : ${name}`)
	// onClick={click}
		
	// }

	function myWater() {

		alert("tutu")
		
	  }

    return (
        <div> 
            <li key={id} className='lmj-plant-item'>
			<div className="plant-price">{price}€</div>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div className="CareScale">
				<CareScale careType='water' scaleValue={water} onClick={myWater} />
				<CareScale careType='light' scaleValue={light} />
				
			</div>
		</li>
        </div>
    );
};

export default Plantitem;