import React from 'react'

function Entrada() {

    return (
        <>
            <center>
                <input type="text" placeHolder='Título' style={{ fontSize: "22px" }} />
                <button style={
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