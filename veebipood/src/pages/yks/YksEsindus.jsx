import { useParams } from "react-router-dom";
import esindusedFailist from "../../data/esindused.json";

function YksEsindus() {
  const {nimi} = useParams();
  //const esindus = esindusedFailist[index]; // undefined ---> tühjus
  // const esindus2 = esindusedFailist.at(index);
  // enne, kui järjekorranumber URLi:
  // const esindus = ["Kristiine", "Ülemiste"][0] ---> Kristiine
  // const esindus = ["Kristiine", "Ülemiste"][1] ---> Ülemiste

  //xx const esindus = [{"Kristiine"}, {"Ülemiste"}]["Ülemiste"]
  // mingi omaduse järgi leidmiseks: .find() tsükkel
  const esindus = esindusedFailist.find(e => e.nimi === nimi);

  if (esindus === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div>
      <div>Nimi: {esindus.nimi}</div>
      <div>Telefon: {esindus.tel}</div>
      <div>Aadress: {esindus.aadress}</div>
    </div>
  )
}

export default YksEsindus