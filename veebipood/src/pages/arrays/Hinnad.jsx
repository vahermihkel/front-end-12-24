import { useState } from "react"
import hinnadFailist from "../../data/hinnad.json";
import { Link } from "react-router-dom";
// ../ --> kausta võrra üles

function Hinnad() {
  // const hinnadOriginaal = [245, 673, 58, 9, 310, 486, 7, 531, 86, 192];
  const [hinnad, setHinnad] = useState(hinnadFailist);

  const originaali = () => {
    setHinnad(hinnadFailist);
  }

// const abil loon uusi muutujaid/funktsioone, mille sisse panen võrdusmärgiga väärtusi

  const filtreeriSuuremKui100 = () => {
    const vastus = hinnad.filter(hind => hind.number > 100);
    setHinnad(vastus);
    //setHinnad([245, 673, 310, 486, 531, 192]);
  }

  const sorteeriKasvavalt = () => {
    const vastus = hinnad.toSorted((a, b) => a.number - b.number);
    setHinnad(vastus);
  }

  const sorteeriKahanevalt = () => {
    // hinnad.sort((a, b) => b - a); // muteerib ka originaali
    // setHinnad(hinnad.slice()); // .slice() mälukoha kustutamiseks
    const vastus = hinnad.toSorted((a, b) => b.number - a.number);
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

  const arvutaKokku = () => {
    // kuna käivitatakse kohe, siis siia useState SET panna ei saa -> loopima
    let summa = 0;
    // summa = summa + 245;
    // summa = summa + 673;
    // summa = summa + 58;
    // summa = summa + 9;

    hinnad.forEach(hind => summa = summa + hind.number);
    return summa;
  }

  return (
    <div>
      <button onClick={originaali}>Reset sorteeri ja filtreeri</button>
      <div>Hindade arv kokku: {hinnad.length} tk</div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremKui100}>Jäta alles suuremad kui 100</button>
      {hinnad.map(hind => 
        <div key={hind.number}>
          {hind.number}
          <Link to={"/hind/" + hind.id}><button>Vt lähemalt</button></Link>
        </div>)}
      <div>Kokku: {arvutaKokku()}</div>
    </div>
  )
}

export default Hinnad