import { useState } from "react"
import pildidFailist from "../../data/pildid.json";

function HaldaPildid() {
  const [pildid, setPildid] = useState(pildidFailist);

  const kustutaEsimene = () => {
    pildidFailist.splice(0, 1); // .remove(0)    .delete(0)
    setPildid(pildidFailist.slice()); // .slice --> mälukoha kustutamiseks
    // muidu programm näeb, et muudetakse iseennast iseenda kaudu ja mitte midagi ei tehta
  }

  const kustutaTeine = () => {
    pildidFailist.splice(1, 1);
    setPildid(pildidFailist.slice());
  }

  const kustutaKolmas = () => {
    pildidFailist.splice(2, 1);
    setPildid(pildidFailist.slice());
  }

  return (
    <div>
      <button disabled={pildid.length < 1} onClick={kustutaEsimene}>Kustuta järjekorras esimene pilt</button>
      <button disabled={pildid.length < 2} onClick={kustutaTeine}>Kustuta järjekorras teine pilt</button>
      <button disabled={pildid.length < 3} onClick={kustutaKolmas}>Kustuta järjekorras kolmas pilt</button>
      {pildid.map(pilt => <img key={pilt} src={pilt} alt="" /> )}
    </div>
  )
}

export default HaldaPildid