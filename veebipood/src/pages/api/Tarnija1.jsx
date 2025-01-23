import { useEffect, useState } from "react";

function Tarnija1() { // || []
  const [tooted, setTooted] = useState([]);

  // uef --> lehele tulekul pannakse koheselt funktsioon käima
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json()) // kogu tagastus - metaandmetega
      .then(json => setTooted(json));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pilt</th>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating rate</th>
            <th>Rating count</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map(toode => 
          <tr key={toode.id}>
            <td><img style={{width:"30px"}} src={toode.image} alt="" /></td>
            <td>{toode.id}</td>
            <td>{toode.title}</td>
            <td>{toode.price}</td>
            <td>{toode.description}</td>
            <td>{toode.category}</td>
            <td>{toode.image}</td>
            <td>{toode.rating.rate}</td>
            <td>{toode.rating.count}</td>
          </tr>)}
        </tbody>
      </table>
      
    </div>
  )
}

export default Tarnija1