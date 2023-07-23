import React, { useState } from 'react'
import { useEffect } from "react";
import { formatearCantidad } from "../helpers";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

function ControlPresupuesto({ gastos,setGastos, presupuesto,setpresupuesto,setIsValidPresupuesto }) {
    
  const [porcentaje, setprocentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
    useEffect(() => {
      const totoalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
      const totalDisponible = presupuesto - totoalGastado;

      //calcular  el procentaje gastado

      const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

      setDisponible(totalDisponible)
      setGastado(totoalGastado)


      setTimeout(() => {
        setprocentaje(nuevoPorcentaje)
      }, 1500);
    }, [gastos])
  const handleResetApp = () => {
   
      const resultado = confirm('¿Deseas Reiniciar presupuesto y Gastos?')
      if (resultado) {
        setGastos([])
        setpresupuesto(0)
        setIsValidPresupuesto(false)
      } 
    }
    return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
          <div>
          <CircularProgressbar
            styles={buildStyles({
              pathColor: porcentaje >100 ? 'red' : '#3B82F6',
              trailColor: '#F5F5F5',
              textColor: porcentaje >100 ? 'red' : '#3B82F6' 
              
            })}
            value={80}
            text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className='contenido-presupuesto'>
            
          <button className='reset-app' type='button' onClick={handleResetApp}>
            Reset App
          </button>
              <p>
                  <span>Presupuesto:</span>{formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                  <span>Disponible:</span>{formatearCantidad(disponible)}
                </p>
                <p>
                  <span>Gastado:</span>{formatearCantidad(gastado)}
              </p>
          </div>
    </div>
  )
}

export default ControlPresupuesto