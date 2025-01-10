import { useState } from "react";
import hinnadFailist from "../../data/hinnad.json";

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist);

  const kustutaHind = (index) => {
    hinnadFailist.splice(index, 1); 
    setHinnad(hinnadFailist.slice());
  }

  return (
    <div>
      <div>Hindade arv kokku: {hinnad.length} tk</div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Hind</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
            <tr key={hind}>
              <td>{index}</td>
              <td>{hind} </td>
              <td><button onClick={() => kustutaHind(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad