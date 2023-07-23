import React from 'react'
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
function Header({
  gastos,
  setGastos,
  presupuesto,
  setpresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto
}) {
  return (
      <header>
      <h1>Planificador de gastos</h1>
      
      {isValidPresupuesto ? (
        
        <ControlPresupuesto

          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setpresupuesto={setpresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ): (
          
          <NuevoPresupuesto
              presupuesto={presupuesto}
        setpresupuesto={setpresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
           />
      )}
    </header>
  )
}

export default Header