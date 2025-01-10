import { Link } from "react-router-dom"
import { useState } from 'react'

function NavigationBar() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Link to="/">
        <img className='pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className='nupp'>Ostukorv</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className='nupp'>Kinkekaart</button>
      </Link>

      <Link to="/seaded">
        <button className='nupp'>Seaded</button>
      </Link>

      <Link to="/lisa-toode">
        <button className='nupp'>Lisa toode</button>
      </Link>

      <Link to="/kalkulaator">
        <button className='nupp'>Kalkulaator</button>
      </Link>

      <button onClick={() => setCount(count+1)}>Vajuta mind {count}</button>

      <br /><br />

      <Link to="/esindused">
        <button className='nupp'>Esindused</button>
      </Link>

      <Link to="/hinnad">
        <button className='nupp'>Hinnad</button>
      </Link>

      <Link to="/pildid">
        <button className='nupp'>Pildid</button>
      </Link>

      <Link to="/tootajad">
        <button className='nupp'>Töötajad</button>
      </Link>

      <Link to="/tooted">
        <button className='nupp'>Tooted</button>
      </Link>

      <br /><br />

      <Link to="/halda-esindused">
        <button className='nupp'>Halda esindused</button>
      </Link>

      <Link to="/halda-hinnad">
        <button className='nupp'>Halda hinnad</button>
      </Link>

      <Link to="/halda-pildid">
        <button className='nupp'>Halda pildid</button>
      </Link>

      <Link to="/halda-tootajad">
        <button className='nupp'>Halda töötajad</button>
      </Link>

      <Link to="/halda-tooted">
        <button className='nupp'>Halda tooted</button>
      </Link>

      <br /><br />

      <Link to="/lisa-esindus">
        <button className='nupp'>Lisa esindus</button>
      </Link>

      <Link to="/lisa-hind">
        <button className='nupp'>Lisa hind</button>
      </Link>

      <Link to="/lisa-pilt">
        <button className='nupp'>Lisa pilt</button>
      </Link>

      <Link to="/lisa-tootaja">
        <button className='nupp'>Lisa töötaja</button>
      </Link>

      <Link to="/lisa-toode">
        <button className='nupp'>Lisa toode</button>
      </Link>


    </div>
  )
}

export default NavigationBar