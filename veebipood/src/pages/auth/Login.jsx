import { useRef, useState } from "react";
//import kasutajadFailist from "../../data/kasutajad.json";
import { useNavigate } from "react-router-dom";

function Login() {
  // const kasutajad = kasutajadFailist;
  const emailRef = useRef();
  const paroolRef = useRef();
  const [sonum, setSonum] = useState("");
  const navigate = useNavigate();
  const kasutajad = JSON.parse(localStorage.getItem("kasutajad")) || [];

  // .find() ---> otsib mingi omaduse järgi terve objekti üles

  const login = () => {
  //const vastus = kasutajadFailist.filter(kasutaja => true) ---> jätab alles array kellel kõigil on true
  //const leitud = kasutajadFailist.filter(kasutaja => true)[0]
  //const leitud = kasutajadFailist.find(kasutaja => true); // ---> jätab alles ühe kellel on true
    const leitud = kasutajad.find(kasutaja => kasutaja.email === emailRef.current.value);
    if (leitud === undefined) {
      setSonum("Sellise emailiga kasutajat ei leitud");
      return; // lõpetab funktsiooni
    }
    if (leitud.parool !== paroolRef.current.value) {
      setSonum("Parool pole õige");
      return;
    }
    // setSonum("Edukalt sisse logitud!");
    //window.location.href = "/halda-kasutajad"; <--- teeb refreshi. kasutatakse välistele URL-le minekuks
    navigate("/halda-kasutajad");
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={paroolRef} type="password" /> <br />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login