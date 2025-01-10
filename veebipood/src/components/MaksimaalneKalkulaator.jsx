import { useRef, useState } from "react"

function MaksimaalneKalkulaator() {
  const ylalpeetavadRef = useRef();
  const sissetulekRef = useRef();
  const kohustusedRef = useRef();
  const [summa, setSumma] = useState(0);

  const arvutaSummaKokku = () => {
    setSumma(
      (sissetulekRef.current.value - kohustusedRef.current.value) / 
      (ylalpeetavadRef.current.value / 10 + 1) *
      100
    );
  }

  // KOJU: Kui läheb liiga väikseks, siis on veateade
  return (
    <div>
      <label>Ülalpeetavad</label>
      <input onChange={arvutaSummaKokku} defaultValue={1} type="number" ref={ylalpeetavadRef} /> <br />
      <label>Sissetulek</label>
      <input onChange={arvutaSummaKokku} defaultValue={900} type="number" ref={sissetulekRef} /> <br />
      <label>Kohustused</label>
      <input onChange={arvutaSummaKokku} defaultValue={0} type="number" ref={kohustusedRef} /> <br />
      <div>Maksimaalne võimalik laen: {summa.toFixed(2)}</div>
    </div>
  )
}

export default MaksimaalneKalkulaator