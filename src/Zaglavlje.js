import React from "react";
import image from './react.png'


function Zaglavlje (props)
{
    return (
        <>
            <img src={image} width={50}></img>
            {(props.naslov)}

        </>
    )
}

export default Zaglavlje