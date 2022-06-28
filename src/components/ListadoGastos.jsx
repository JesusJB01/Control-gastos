import React from 'react'
import { Gasto } from './Gasto'

export const ListadoGastos = ({
  gastos, 
  setGastosEditar, 
  eliminarGasto,
  filtro, 
  gastosfiltrados,
}) => {
  return (
    <div className='listado-gastos contenedor'>
       

      
        { filtro ? (
                    <>
                        <h2>{gastosfiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                        {gastosfiltrados.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastosEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                        {gastos.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastosEditar={setGastosEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
        }
    </div>
  )
}
