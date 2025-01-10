import { useRef, useState } from "react"

function LaenuKalkulaator() {
  const [laenusumma, setLaenusumma] = useState(75000); // HTMLs panna mingi koht muutuma
  const laenusummaRef = useRef(); // HTMLi inputist sisestatud väärtust kätte saada

  // function arvuta() { // nupu sisestuseks kui on 2+ rida
  //   setLaenusumma(laenusummaRef.current.value * 2.637);
  // }

  const arvuta = () => {
    setLaenusumma(laenusummaRef.current.value * 2.637);
  }

  return (
    <div>
      <label>Laenusumma</label>
      <input onChange={arvuta} defaultValue={75000} ref={laenusummaRef} type="text" />
      {/* <button >Arvuta</button> */}
      {/* <div>{laenusummaRef.current.value <--- ei saa teha}</div> */}
      {laenusumma >= 20000 && laenusumma <= 10000000 ? 
      <div>{(laenusumma / 30 / 12).toFixed(2)} € kuus</div> :
      <div style={{color: "red"}}>Laenusumma võib olla vahemikus 20 000-10 000 000 eurot.</div>
      }
    </div>
  )
}

export default LaenuKalkulaator