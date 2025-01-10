
function LisaTootaja() {
  return (
    <div>LisaTootaja</div>
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