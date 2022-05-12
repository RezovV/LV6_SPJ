import React from "react"

import artikl from "./artikli.json"
import TrgArtikl from "./TrgovinaArtikl"


function TrgovinaLista(props){ 
    return(
        <>
        <table className="table">
            <thead>
                <th>ID</th>
                <th>Naziv</th>
                <th>Proizvpođač</th>
                <th>Model</th>
                <th>Cijena</th>
                <th>Količina</th>
            </thead>
            <tbody>

                    {artikl.map(artikli => {return(
                        <TrgArtikl key={artikli.ID.toString()} artikli={artikli}/>
                    )})}
            </tbody>
        </table>
        </>
    )
}

export default TrgovinaLista