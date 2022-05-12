import React from "react";
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Zaglavlje from "./Zaglavlje"
import Artikl from "./TrgovinaArtikl";
import TrgovinaLista from "./TrgovinaLista";





function App() {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand'>
            <Zaglavlje naslov = " VUV SHOP" />
          </a>
        </div>
      </nav>
      <TrgovinaLista/>
    </>
  );
}

export default App;
