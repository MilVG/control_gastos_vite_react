import React from 'react'
import { useState } from "react";
import Mensaje from "./Mensaje";

function NuevoPresupuesto({
  presupuesto,
  setpresupuesto,
  setIsValidPresupuesto
}) {
  
  const [mensaje,setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto válido");
      return
    } 

    setMensaje('');
    setIsValidPresupuesto(true);

  }
  return (
        <div className='contenedor-presupuesto contenedor sombra'>
          <form onSubmit={handlePresupuesto} className='formulario'>
              <div className='campo'>
                  <label htmlFor="">
                      Difinir Presupuesto</label>
                  <input
                      className='nuevo-presupuesto'
                      type="number"
                      placeholder='Añade tu Presupuesto'
            value={presupuesto}
            onChange={e => setpresupuesto(Number(e.target.value))}
                  
                  />
              </div>
                <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{ mensaje}</Mensaje>}
            </form>
          
        </div>
  )
}

export default NuevoPresupuesto