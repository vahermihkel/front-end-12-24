// rfce

import { useState } from "react"

// && ---> kui vasakul on tõsi, siis parempoolne näidatakse
// === ---> vasak ja parem pool on identsed
// =   ---> väärtuse andmiseks
// == ---> seda Reactis ei kasutata, see on identsuse kontroll ilma tüübi kontrollita

// Array peab tegema:
// 1. kui tuleb andmebaasist
// 2. kui tahan filtreerimisi/sorteerimisi või muid muudatusi teha

// Array võiks teha:
// Kui pidevalt pean koguaeg andmeid muutma, sest siis saan kõigile korraga muuta
// Kui andmeid on palju >10-15

function Esindused() {
  //   muutuja --> HTMLi
  //           muutja --> onClick külge
  const [linn, setLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  const sorteeriAZ = () => {
    const vastus = keskused.toSorted((a, b) => a.localeCompare(b));
    setKeskused(vastus);
  }

  const sorteeriZA = () => {
    const vastus = keskused.toSorted((a, b) => b.localeCompare(a));
    setKeskused(vastus);
  }
  
  const sorteeriKolmasTahtAZ = () => {                                    // 012
    const vastus = keskused.toSorted((a, b) => a[2].localeCompare(b[2])); // Kristiine
    setKeskused(vastus);
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = keskused.filter(keskus => keskus.endsWith("e"));
    setKeskused(vastus);
    //setKeskused(["Ülemiste", "Rocca al Mare", "Vesse", "Kristiine"]);
  }

  // const filtreeriEgaLoppevadTaustal = () => {
  //   // const vastus = keskused.filter(keskus => keskus.endsWith("e"));
  //   // setKeskused(vastus);
  //   setKeskused(["Ülemiste", "Rocca al Mare", "Vesse", "Kristiine"]);
  // }

  const filtreeri9Tahelised = () => {
    const vastus = keskused.filter(keskus => keskus.length === 9);
    setKeskused(vastus);
  }

  // const filtreeri9TahelisedKuiPärastRefreshi = () => {
  //   const vastus = ["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"].filter(keskus => keskus.length === 9);
  //   // setKeskused(vastus);
  //   setKeskused(["Kristiine"]);
  // }

  // const filtreeri9TahelisedKuiOnEnneEgaLoppevad = () => {
  //   const vastus = ["Ülemiste", "Rocca al Mare", "Vesse", "Kristiine"].filter(keskus => keskus.length === 9);
  //   // setKeskused(vastus);
  //   setKeskused(["Kristiine"]);
  // }

  const filtreeriNeljasTahtS = () => {                           // 0123
    const vastus = keskused.filter(keskus => keskus[3] === "s"); // Kristiine
    setKeskused(vastus);
  }

  return (
    <div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      <br /><br />

      <div>Hetkel aktiivne linn: {linn}</div>

      <br /><br />
      {linn === "Tallinn" && 
        <div>
          <div>Keskuste arv kokku: {keskused.length} tk</div>
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A</button>
          <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
          <button onClick={filtreeriEgaLoppevad}>Filtreeri  &quot;e&quot;-ga lõppevad</button>
          <button onClick={filtreeri9Tahelised}>Filtreeri 9-tähelised</button>
          <button onClick={filtreeriNeljasTahtS}>Filtreeri neljas täht S</button>
          {keskused.map(keskus => <div key={keskus}>{keskus}</div>)}
        </div>}

      {linn === "Tartu" && 
        <div>
          <div>Raatuse</div>  
          <div>Lõunakeskus</div>  
        </div>}


      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused