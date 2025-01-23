import { useState } from "react";

// Salvestus: brauseri vahemällu või andmebaasi

function Seaded() {
  // useState sulgude sees on algväärtus, mis on alati refreshi järgselt või 
  //        kui lehelt lähen ära ja tulen tagasi
  // useState tuleb alati importida

  // useState võetakse kasutusele kahe kandilise suluga võrdusmärgiga ees
  // esimene on muutuja mis läheb HTMLi    --->   {}
  // teine on muutja mis läheb käima onClick abiga  --->  setBlaBla()

  const [keel, setKeel] = useState(localStorage.getItem("keel") || "est");

  const muudaKeel = (uusKeel) => {
    setKeel(uusKeel);
    localStorage.setItem("keel", uusKeel);
  }

  // const muudaKeelEE = () => {
  //   setKeel("est");
  //   localStorage.setItem("keel", "est");
  // }

  // const muudaKeelEN = () => {
  //   setKeel("eng");
  //   localStorage.setItem("keel", "eng");
  // }

  // const muudaKeelRU = () => {
  //   setKeel("rus");
  //   localStorage.setItem("keel", "rus");
  // }

  // const muudaKeelES = () => {
  //   setKeel("esp");
  //   localStorage.setItem("keel", "esp");
  // }

  return (
    <div>
      <div>Hetkel aktiivse keele lühend on: {keel}</div>
      <button className={keel === "est" ? "keel-aktiivne" : undefined} onClick={() => muudaKeel("est")}>eesti</button>
      <button className={keel === "eng" ? "keel-aktiivne" : undefined} onClick={() => muudaKeel("eng")}>english</button>
      <button className={keel === "rus" ? "keel-aktiivne" : undefined} onClick={() => muudaKeel("rus")}>pycckij</button>
      <button className={keel === "esp" ? "keel-aktiivne" : undefined} onClick={() => muudaKeel("esp")}>espanol</button>

      <br /><br />

      {keel === "est" && <div>Leht on eesti keeles</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на русском языке</div>}
      {keel === "esp" && <div>La pagina esta en español</div>}
    </div>
  )
}

export default Seaded