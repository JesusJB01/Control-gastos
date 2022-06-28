import React, {useState} from 'react'

const Presupuestos = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [presupuestoActual, setPresupuestoActual] = useState(false)

    const handleOnClick = (e) => {
        e.preventDefault();

      if (!presupuesto || presupuesto < 0) {
            setPresupuestoActual(true)
            return
    } 
       
        setIsValidPresupuesto(true)
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form 
        onSubmit={handleOnClick}
        className='formulario'>

            <div className='campo'>
                <label>Añadir Presupuesto</label>
                <input 
                className='nuevo-presupuesto'
                type='number' placeholder='Ingrese su presupuesto'
                value={presupuesto}
                onClick={() => setPresupuestoActual(false)}
                onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>   

            <input
            type="submit"
            value="Añadir"
            /> 

        {
            presupuestoActual 
            ? <div className='alerta-error alerta'>Error al agregar Presupuesto </div> 
            : null
        }   

        </form>
    </div>
  )
}


export default Presupuestos