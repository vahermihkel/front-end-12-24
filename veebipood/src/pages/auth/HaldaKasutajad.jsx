// import { useState } from "react";
// import kasutajadFailist from "../../data/kasutajad.json";

function HaldaKasutajad() {
  const kasutajad = JSON.parse(localStorage.getItem("kasutajad")) || [];

  return (
    <div>
      {kasutajad.map(kasutaja => 
        <div key={kasutaja.email}>
          {/* {JSON.stringify(kasutaja)}
            objekte ei saa tervikuna välja näidata. leht on valge
            inspect -> console all error:
            Uncaught (in promise) Error: Objects are not valid as a React child (found: object with keys
          */}
          <div>{kasutaja.email}</div>
          <div>{kasutaja.nimi}</div>
          <br />
        </div>
      )}
    </div>
  )
}

export default HaldaKasutajad