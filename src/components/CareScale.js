import React from "react";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? "☀️" : "💧";

  let comment = {
    1 : "peu",
    2 : "moderement",
    3 : "beaucoup",
  };

  function doSMTH() {

    alert(`Vous devez donner ${comment[scaleValue]} ${careType === "light" ? "de lumiere" : "d'eau" }`)
    
  }
 

  return (
    <div className={careType === "water" ? "water" : "light"} onClick={doSMTH}>
      
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}

    </div>
  );
}

export default CareScale;
