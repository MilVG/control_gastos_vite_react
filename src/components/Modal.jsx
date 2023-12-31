import React from 'react'
import { useState,useEffect } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {
    const [mensaje, setMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])
    

    const ocultarModal = () => {
        
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
           setModal(false) 
        },500)
    }


    const handleSubmit = e => {
        e.preventDefault();

        if ([nombre,cantidad,categoria].includes('')) {
            setMensaje('Todos los Campos son Obligatorios')


            setTimeout(() => {
                setMensaje('')
            },3000)
            return;
        }

        guardarGasto({ nombre, cantidad, categoria,id,fecha});
    }



  return (
      <div className='modal'>
          <div className='cerrar-modal'>
              <img
                  src={CerrarBtn}
                  alt="cerrar Modal"
                  onClick={ocultarModal}
              />
          </div>

          <form
              onSubmit={handleSubmit}
              action="" className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
              <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
              {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
              
              <div className='campo'>
                  <label htmlFor="nombre"> Nombre gasto</label>

                  <input
                      id='nombre'
                      type="text"
                      placeholder='Añade el Nombre del gasto'
                      value={nombre}
                      onChange ={e => setNombre(e.target.value)}
                  />
              </div>
              <div className='campo'>
                  <label htmlFor="Cantidad"> Cantidad Gasto</label>

                  <input
                      id='cantidad'
                      type="number"
                      placeholder='Añade La cantidad gastos: '
                      value={cantidad}
                      onChange ={e => setCantidad(Number(e.target.value))}

                  />
              </div>
              <div className='campo'>
                  <label htmlFor="categoria"> Categoria Gasto</label>

                  <select
                      
                      name=""
                      id="categoria"
                      value={categoria}
                      onChange={e => setCategoria(e.target.value)}
                  >
                      <option value="">-- Seleccione --</option>
                      <option value="ahorro">Ahorro</option>
                      <option value="comida">Comida</option>
                      <option value="casa">Casa</option>
                      <option value="varios">Gastos varios</option>
                      <option value="ocio">Ocio</option>
                      <option value="salud">Salud</option>
                      <option value="suscripciones">Suscripciones</option>
                      
                    </select>
              </div>

              <input
                  type="submit"
                  value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
              />
          </form>
    </div>
  )
}

export default Modal