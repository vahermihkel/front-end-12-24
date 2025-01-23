import { useEffect, useState } from "react";

function Electricity() { // || []
  const [hinnad, setHinnad] = useState([]);

  useEffect(() => {
    fetch("https://dashboard.elering.ee/api/balance")
      .then(res => res.json()) 
      .then(json => setHinnad(json.data.ee));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map(toode => 
          <tr key={toode.id}>
            <td>{toode.id}</td>
            <td>{toode.title}</td>
            <td>{toode.price}</td>
            <td>{toode.description}</td>
          </tr>)}
        </tbody>
      </table>
      
    </div>
  )
}

export default Electricity