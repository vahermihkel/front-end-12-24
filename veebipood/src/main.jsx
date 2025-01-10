import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

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
