
import { useRef, useState } from "react"
import tootajadFailist from "../../data/tootajad.json"

function LisaTootaja() {
  const tootajaRef = useRef ()
  const telRef = useRef ()
  const ametRef = useRef ()
  const kogemusRef = useRef ()

  const [sonum, setSonum] = useState()

  const lisa = () => {
    if (tootajaRef.current.value === "") {
      setSonum("Nimi puudub");
      return;
    } 
    if (telRef.current.value === "") {
      setSonum("Telefon puudub");
      return;
    }
    if (ametRef.current.value === "") {
      setSonum("Amet puudub");
      return;
    }
    if (kogemusRef.current.value === "") {
      setSonum("Kogemus puudub");
      return;
    }

    const tootaja = {
      "nimi": tootajaRef.current.value,
      "telefon": telRef.current.value,
      "amet" : ametRef.current.value,
      "kogemus" : kogemusRef.current.value
    }
    tootajadFailist.push(tootaja)
    tootajaRef.current.value = ""
    telRef.current.value = ""
ametRef.current.value = ""
    kogemusRef.current.value = ""
  }

  const kontrolli = () => {
    if (telRef.current.value.startsWith("5") === false) {
      setSonum("Telefoninumber peab algama numbriga 5");
      return;
    }
    if (telRef.current.value.length < 7) {
      setSonum("Telefoninumber on liiga lühike");
      return;
    }
    if (telRef.current.value.length > 8) {
      setSonum("Telefoninumber on liiga lühike");
      return;
    }
    setSonum("");
  }

  return (
    <div>
      <label>Töötaja nimi</label> <br />
      <input ref={tootajaRef} type="text" /> <br />
      <label>Telefon</label> <br />
      <input onChange={kontrolli} ref={telRef} type="number" /> <br />
      <label>Amet</label> <br />
      <input ref={ametRef} type="text" /> <br />
      <label>Töökogemus aastates</label> <br />
      <input ref={kogemusRef} type="number" /> <br />
      <div>{sonum}</div>
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}  

export default LisaTootaja

// Esindused, Tootajad, Tooted

// 1. Faili andmete tõstmine --> .json faili array
// a)Arrays kaustas see fail sisse tõmmata
// b)Reset nupp

// Halda vaade:
// a)Fail importida
// b)Välja kuvada
// c)Kustutamise nupp igaühe juures (HaldaHinnad.jsx aluseks)
// d)Luua elemendi kõrval ka index .map(element => )   --->   .map((element, index) => ) 
// e)onClick väljakutsumise juures saata see "index" kaasa
// f)funktsioonis võtta sulgude sees index vastu
// g).splice sees on mitte number, vaid sulu sees võetud index --->   .splice(index, 1);
// h)uuendage HTMLi set() abil, kasutades ka .slice()    set(.slice());
// i)Kui on mitte ühtegi alles, siis öelge, et "neid pole" (Ostukorv.jsx aluseks)

// Lisa vaade:
// a) Importida
// b) Tehke useRef
// c) label + input HTMLi
// d) nupp + funktsioon
// e) funktsioonis .pushida faili, mida sai imporditud (.current.value)
// f) teha input tühjaks .current.value = "";