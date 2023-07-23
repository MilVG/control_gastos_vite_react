import React from 'react'
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro
}) => {
  return (
      
    <div className='listado-gastos contenedor'>

      
      {
        filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos Aún en esta Categoría'}</h2>
              {gastosFiltrados.map(gasto => (
                <Gasto

                  key={gasto.id}
                  fecha={gasto.fecha}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                        
                />
              ))}
          </>
        ) : (
            <>
              <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos Aún en esta Categoría'}</h2>
                  {gastos.map(gasto => (
                    <Gasto

                      key={gasto.id}
                      fecha={gasto.fecha}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      eliminarGasto={eliminarGasto}
                            
                    />
                  ))}
              </>
            )
      }
          
    </div>
  )
}

export default ListadoGastos