import React from "react"
import artikl from "./artikli.json"
import 'bootstrap/dist/css/bootstrap.min.css';

function Artikl (props)
{

    return(
        <>
            <tr>
                <td>{props.artikli.ID}</td>
                <td>{props.artikli.Naziv}</td>
                <td>{props.artikli.Proizvodac}</td>
                <td>{props.artikli.Model}</td>
                <td>{props.artikli.Cijena}</td>
                <td>{(props.artikli.Kolicina > 0) ? <Kosara Kolicina={props.artikli.Kolicina}/>:<Prov Kolicina={props.artikli.Kolicina}/>}</td>
            </tr>
        </>
    )
}

function Prov(props)
{
    return(
        <button className="btn btn-primary" onClick={Prikazi}>Provjera</button>
    )
}

function Prikazi()
{
    alert("Artikl nije dostupan")
}

function Kosara(props)
{
    return(
        <button className='btn btn-primary' onClick={()=> Dostupni(props.Kolicina)}>Provjera</button>
    )
}

function Dostupni(Kolicina)
{
    alert("Količina: " + Kolicina)
}
export default Artikl