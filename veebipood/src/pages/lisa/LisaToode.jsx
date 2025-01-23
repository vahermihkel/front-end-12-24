import { useRef, useState } from "react"

function LisaToode() {
  const [sonum, setSonum] = useState("Sisesta toode!");
  const nimiRef = useRef(); // inputi seest andmete kätte saamiseks

  function sisesta() {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimega ei saa toodet sisestada!");
      return;
    } 
    
    setSonum("Toode sisestatud!"); // pilt URL-st
    // const toode = {nimi: "Nobe", hind: 20, aktiivne: true, pilt: "http://.jpg"}
    // .push() faili
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode