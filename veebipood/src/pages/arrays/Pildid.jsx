import { useState } from "react"
import pildidFailist from "../../data/pildid.json";

function Pildid() {
  const [pildid, setPildid] = useState(pildidFailist);

  const filtreeriSydamed = () => {
        // result
    const vastus = pildid.filter(pilt => pilt.includes("laigitud"));
    setPildid(vastus);
    // kui loon funktsiooni sees const abil uue muutuja, siis saan
    // seda kasutada ainult siin funktsiooni sees ( scope )
    //setPildid(["/laigitud.svg", "/mittelaigitud.svg"]);
  }

  const sorteeriKasvavalt = () => {
    const vastus = pildid.toSorted((a,b) => a.length - b.length);
    setPildid(vastus);
  }

  const sorteeriKahanevalt = () => {
    const vastus = pildid.toSorted((a,b) => b.length - a.length);
    setPildid(vastus);
  }

//   const sorteeriEelviimaneT2ht = () => {
//     const vastus = pildid.toSorted((a, b) => a[a.length - 2].localeCompare(b[b.length - 2]));
//     setPildid(vastus);
//   }

//   // 012345678
//   // Kristiine  --> .length on 9        viimase index on 8
//   const eelviimaneTaht = () => {
//     const vastus = [...pildid].sort((a, b) => {
//         // Eelviimase tähe leidmine igast raamatu pealkirjast
//         const penultimateA = a.length > 1 ? a[a.length - 2] : ""; // Kui raamatul on vähemalt 2 tähemärki, siis eelviimane täht
//         const penultimateB = b.length > 1 ? b[b.length - 2] : ""; // Sama B jaoks
        
//         // Võrdle eelviimaseid tähti
//         return penultimateA.localeCompare(penultimateB);
//     });
//   }

//   const sonadeArv = () => {
//     const vastus = pildid.sort((a, b) => {
//         const wordCountA = a.split(' ').length; // Arvuta sõnade arv raamatu A kirjelduse järgi
//         const wordCountB = b.split(' ').length; // Arvuta sõnade arv raamatu B kirjelduse järgi
//         return wordCountA - wordCountB; // Kasvav järjekord
//     });
//     setPildid(vastus);
// }

// const sonadeArv2 = () => {
//   const vastus = pildid.sort((a, b) => a.split(' ').length - b.split(' ').length);
//   setPildid(vastus);
// }


// const filtreeriEelviimaneT2htC = () => {
//   const vastus = pildid.filter(book => book[book.length - 2] === "c");
//   setPildid(vastus);
// }

// const filtreeriEelviimaneT2htC2 = () => {
//   const vastus = pildid.filter(book => book[book.length - 2] === "c" || book[book.length - 2] === "C");
//   setPildid(vastus);
// }

// const cEelviimane = () => {
//   const vastus = pildid.filter(book=> book[book.length-2]?.toLowerCase()=== "c")
//   setPildid(vastus)
// }

  

  return (
    <div>
      {/* {pildid[1] && <div>Teise pildi pikkus: {pildid[1].length}</div>}
      <div>Teise pildi pikkus: {pildid[1] ? pildid[1].length : "N/A"}</div> */}
     

      <div>Kokku: {pildid.length} tk</div>
      <button onClick={sorteeriKasvavalt}>Sorteeri faili nime pikkus kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri faili nime pikkus kahanevalt</button>
      <button onClick={filtreeriSydamed}>Jäta alles südamed</button>
      {pildid.map(pilt => <img key={pilt} src={pilt} alt="" /> )}
    </div>
  )
}

export default Pildid