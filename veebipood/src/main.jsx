import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './i18n';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import {} --> võtab tüki
// ./ või ../ --> võtab minu failidest
// kui pole, siis võtab node_module'st
// kui võtab üle terve rakenduse, siis ei panda "import MUUTUJA FROM"

// Navigeerimiseks on vajalik:
// 1. alla laadima navigeerimiseks vajaliku koodi
// 1. npm install react-router-dom
// 2. Importima BrowserRouteri
// 2. import { BrowserRouter } from 'react-router-dom';
// 3. Ümbritsema <App> elemendi BrowserRouteriga
// 3. <BrowserRouter><App /></BrowserRouter>
// 4. Tekitama App.jsx sees URLi ja HTMLi vahelisi seoseid

createRoot(document.getElementById('root')).render(
  // teeb topelt renderdamise kõrvalefektide leidmiseks --> ainult localhostis
  // kui läheb live keskkonda, siis automaatikaga tuleb strictmode
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 1. react-router-dom. uue projekti tekitamine.
// 2. useState. useRef. && ehk dünaamiline väljakuvamine. onClick. funktsioonid
// 3. favicon, font, Firebase üleslaadimine, dünaamiline CSS, componentide väljatõste, kalkulaatorid 
// 4. Arrays: väljakuvamine, key, sort, filter
// 5. Arrays: kustutamine (splice), mälukoht (slice), faili tõstmine (.json), lisamine (push)
// 6. useParams(). ühe võtmine. muutmine. early return HTML
// 7. objektid - võti-väärtus paarid. .find(). 
// early return funktsioonis. 
// 8. Toastify. vormide kontroll onChange abil. localStorage
// 9. API ---> kodus API failid
// 10. Viimast korda veebipoodi: tõlked, Bootstrap, MUI, e-maili saatmine, Leaflet
// ---> kodus ise Webshopi põhi teha
// 11. Webshopis hakkame tööd tegema

// KOJU:
// objektideks: pildid. Vt ka lisamine ja muutmine.
// onClick ja onChange kontrollid. Tooted. Pildid. 

