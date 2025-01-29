import { useState } from "react" // use-d: useState, useRef
import { Link } from "react-router-dom"; // kõik URL-ga seotud asjad. useParams, useNavigate
import esindusedFailist from "../../data/esindused.json";
import { useTranslation } from 'react-i18next';

function Esindused() {
  const { t } = useTranslation();

  //   muutuja --> HTMLi
  //           muutja --> onClick külge
  const [linn, setLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(esindusedFailist);

  const sorteeriAZ = () => {
    const vastus = keskused.toSorted((a, b) => a.nimi.localeCompare(b.nimi));
    setKeskused(vastus);
  }

  const sorteeriZA = () => {
    const vastus = keskused.toSorted((a, b) => b.nimi.localeCompare(a.nimi));
    setKeskused(vastus);
  }
  
  const sorteeriKolmasTahtAZ = () => {                                    // 012
    const vastus = keskused.toSorted((a, b) => a.nimi[2].localeCompare(b.nimi[2])); // Kristiine
    setKeskused(vastus);
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = keskused.filter(keskus => keskus.nimi.endsWith("e"));
    setKeskused(vastus);
    //setKeskused(["Ülemiste", "Rocca al Mare", "Vesse", "Kristiine"]);
  }

  // const filtreeriEgaLoppevadTaustal = () => {
  //   // const vastus = keskused.filter(keskus => keskus.endsWith("e"));
  //   // setKeskused(vastus);
  //   setKeskused(["Ülemiste", "Rocca al Mare", "Vesse", "Kristiine"]);
  // }

  const filtreeri9Tahelised = () => {
    const vastus = keskused.filter(keskus => keskus.nimi.length === 9);
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
    const vastus = keskused.filter(keskus => keskus.nimi[3] === "s"); // Kristiine
    setKeskused(vastus);
  }

  const arvutaKokku = () => {
    let sum = 0;
    // keskused.forEach(keskus => sum = sum + keskus.length);
    keskused.forEach(keskus => sum += keskus.nimi.length);
    return sum;
  }

  return (
    <div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      <br /><br />

      <div>{t('currently-active-city')}: {linn}</div>

      <br /><br />
      {linn === "Tallinn" && 
        <>
          {keskused.length === 0 && <div>{t('no-shops')}</div>}
          <div>{t('shops-total-number')}: {keskused.length} tk</div>
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A</button>
          <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
          
          <button onClick={filtreeriEgaLoppevad}>Filtreeri  &quot;e&quot;-ga lõppevad</button>
          <button onClick={filtreeri9Tahelised}>Filtreeri 9-tähelised</button>
          <button onClick={filtreeriNeljasTahtS}>Filtreeri neljas täht S</button>
          
          {keskused.map(keskus => 
            <div key={keskus.nimi}>
              {keskus.nimi}
              <Link to={"/esindus/" + keskus.nimi}><button>Vt lähemalt</button></Link>
            </div>)}
          <div>Tähed kokku: {arvutaKokku()}</div>
        </>}

      {linn === "Tartu" && 
        <>
          <div>Raatuse</div>  
          <div>Lõunakeskus</div>  
        </>}


      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused


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