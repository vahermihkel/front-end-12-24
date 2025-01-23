import { useState } from "react"
// import ostukorvFailist from "../data/ostukorv.json"

// Array - mitme väärtuse hoidmiseks [ , , , , ] komaga eraldatud väärtused
// element - üks väärtus array sees

// array elementidega operatsioonide tegemiseks tuleb kasutada tsüklit
//   - HTMLs välja näitamine  .map()
//   - kokkuarvutamine     .forEach()
//   - filtreerimine     .filter()
//   - sorteerimine      .sort()

// key={} on alati HTMLs .map sees, vahetult esimese tagi küljes
// see võimaldab Reactil meelde jätta HTML elemente, et kui toimub rerenderdus,
// siis ei pea uuesti seda tsüklit tegema

// rerenderdus --> iga kord kui läheb useState set funktsioon käima
// renderdamine --> HTMLi väljakuvamine/printimine, koodi näitamine brauseris

  // Array localStorage-sse lisamiseks:
  // 1. võtma localStorage-st vana seis --> localStorage.getItem()
  // 2. võtma localStorage-st saadud väärtustelt jutumärgid maha --> JSON.parse()
  // 3. pushima localStorage-sse juurde --> .push()
  // 4. lisama jutumärgid juurde --> JSON.stringify()
  // 5. lisama uuenenud ostukorvi localStorage-sse --> localStorage.setItem()
 

function Ostukorv() {            
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const kustuta = (index) => {
    tooted.splice(index,1);
    setTooted(tooted.slice()); // HTML uuenduseks
    localStorage.setItem("ostukorv", JSON.stringify(tooted)); // LS uuenduseks
  }

  const arvutaKokku = () => {
    let summa = 0;
    // forEach peab tegema mingi tegevuse (tal endal pole eriomadust, käib lihtsalt läbi)
    // praegu anname iga tsükli iteratsioon summa muutujale uue väärtuse
    //summa = 0;
    //({Nobe, hind: 12} => 12 = 0 + 12);
    //summa = 12;
    //({BMW, hind: 51} => 63 = 12  + 51);
    //summa = 63;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
      {tooted.length === 0 && <div>Ostukorv on tühi</div>}

      {tooted.length > 0 && 
      <>
        <div>Kokku: {tooted.length} tk</div>
        <button onClick={() => setTooted([])}>Tühjenda</button>
      </>}

      {/* {tooted.length === 0 ? 
        <div>Ostukorv on tühi</div> : 
        <>
          <div>Kokku: {tooted.length} tk</div>
          <button onClick={() => setTooted([])}>Tühjenda</button>
        </>
      } */}

      {tooted.map((toode, index) => 
        <div key={index}>
          {index+1}. {toode.nimi} - {toode.hind}€ 
          <button onClick={() => kustuta(index)}>x</button> 
        </div>)}

      {tooted.length > 0 && <div>Kokku: {arvutaKokku()}€</div>}
    </div>
  )
}

export default Ostukorv