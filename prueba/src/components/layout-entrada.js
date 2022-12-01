import React from 'react'
import { useState } from 'react'

function Entrada() {

    const [nuevaTarea, setNuevaTarea] = useState()

    return (
        <>
            <center>
                <input type="text" placeHolder='Título'

                    onChange={(e) => setNuevaTarea(e.target.value)}

                    style={{ fontSize: "22px" }} />

                <button onClick={() => alert(nuevaTarea)}
                    style={
                        {
                            backgroundColor: "#87CEEB",
                            fontSize: "21px", color: "white",
                            padding: "4px 18px"

                        }}>Agregar</button>
            </center>
        </>
    )

}

export default Entrada;