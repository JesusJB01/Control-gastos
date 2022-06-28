import React from 'react'
import { ControlPresupuesto } from './ControlPresupuesto'
import Presupuestos from './Presupuesto'

export const Header = ({
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto, 
  gastos, 
  setGastos}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {
        isValidPresupuesto ? (
          <ControlPresupuesto
          gastos={gastos}
          setGastos = {setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          />
        ) : (
          <Presupuestos
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
          />

        )
      }
    </header>
  )
}
