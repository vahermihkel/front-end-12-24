import { useState } from "react";

// Salvestus: brauseri vahemällu või andmebaasi

function Seaded() {
  // useState sulgude sees on algväärtus, mis on alati refreshi järgselt või 
  //        kui lehelt lähen ära ja tulen tagasi
  // useState tuleb alati importida

  // useState võetakse kasutusele kahe kandilise suluga võrdusmärgiga ees
  // esimene on muutuja mis läheb HTMLi    --->   {}
  // teine on muutja mis läheb käima onClick abiga  --->  setBlaBla()

  const [keel, setKeel] = useState("est");

  return (
    <div>
      <div>Hetkel aktiivse keele lühend on: {keel}</div>
      <button className={keel === "est" ? "keel-aktiivne" : undefined} onClick={() => setKeel("est")}>eesti</button>
      <button className={keel === "eng" ? "keel-aktiivne" : undefined} onClick={() => setKeel("eng")}>english</button>
      <button className={keel === "rus" ? "keel-aktiivne" : undefined} onClick={() => setKeel("rus")}>pycckij</button>
      <button className={keel === "esp" ? "keel-aktiivne" : undefined} onClick={() => setKeel("esp")}>espanol</button>

      <br /><br />

      {keel === "est" && <div>Leht on eesti keeles</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на русском языке</div>}
      {keel === "esp" && <div>La pagina esta en español</div>}
    </div>
  )
}

export default Seaded