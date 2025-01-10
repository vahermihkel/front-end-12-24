import { useRef } from "react";
import pildidFailist from "../../data/pildid.json";

function LisaPilt() {
  const piltRef = useRef();

  const lisa = () => {
    pildidFailist.push(piltRef.current.value);
    piltRef.current.value = "";
  }

  return (
    <div>
      <label>Pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaPilt