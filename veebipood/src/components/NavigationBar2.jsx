import { Link } from "react-router-dom"
import { useState } from 'react'
import { useTranslation } from "react-i18next";

function NavigationBar() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Link to="/">
      </Link>

      <button onClick={() => i18n.changeLanguage("et")}>Eesti keel</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>

      <Link to="/api-home">
        <button className='nupp'>API-{t("plural")}</button>
      </Link>

      <Link to="/login">
        <button className='nupp'>Login</button>
      </Link>

      <Link to="/registreeru">
        <button className='nupp'>{t("nav.signup")}</button>
      </Link>

      <Link to="/ostukorv">
        <button className='nupp'>{t("nav.cart")}</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className='nupp'>Kinkekaart</button>
      </Link>

      <Link to="/seaded">
        <button className='nupp'>Seaded</button>
      </Link>

      <Link to="/kalkulaator">
        <button className='nupp'>Kalkulaator</button>
      </Link>

      <button onClick={() => setCount(count+1)}>Vajuta mind {count}</button>

      <br /><br />

      

      <br /><br />

      


    </div>
  )
}

export default NavigationBar