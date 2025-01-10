import { useState } from "react"
import hinnadFailist from "../../data/hinnad.json";
// ../ --> kausta võrra üles

function Hinnad() {
  // const hinnadOriginaal = [245, 673, 58, 9, 310, 486, 7, 531, 86, 192];
  const [hinnad, setHinnad] = useState(hinnadFailist);

  const originaali = () => {
    setHinnad(hinnadFailist);
  }

// const abil loon uusi muutujaid/funktsioone, mille sisse panen võrdusmärgiga väärtusi

  const filtreeriSuuremKui100 = () => {
    const vastus = hinnad.filter(hind => hind > 100);
    setHinnad(vastus);
    //setHinnad([245, 673, 310, 486, 531, 192]);
  }

  const sorteeriKasvavalt = () => {
    const vastus = hinnad.toSorted((a, b) => a - b);
    setHinnad(vastus);
  }

  const sorteeriKahanevalt = () => {
    // hinnad.sort((a, b) => b - a); // muteerib ka originaali
    // setHinnad(hinnad.slice()); // .slice() mälukoha kustutamiseks
    const vastus = hinnad.toSorted((a, b) => b - a);
    setHinnad(vastus);
  }

//   const kolmeSisaldavad = () => {
//     const vastus = hinnad.filter (number => number.toString().includes("3"))
//     setHinnad(vastus)
// }



  // const kustutaTeine = () => {
  //   hinnad.splice(1, 1);
  //   setHinnad(hinnad.slice());
  // }

  // const kustutaKolmas = () => {
  //   hinnad.splice(2, 1);
  //   setHinnad(hinnad.slice());
  // }

  return (
    <div>
      <button onClick={originaali}>Reset sorteeri ja filtreeri</button>
      <div>Hindade arv kokku: {hinnad.length} tk</div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremKui100}>Jäta alles suuremad kui 100</button>
      {hinnad.map(hind => <div key={hind}>{hind}</div>)}
    </div>
  )
}

export default Hinnad