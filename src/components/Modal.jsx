import {useState, useEffect} from 'react'
import CerrarBtn from "../img/cerrar.svg"


export const Modal = ({setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGastos, 
    gastosEditar,
    setGastosEditar,
}) => {

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje, setMensaje] = useState(false)
    const [fecha, setFecha] = useState("")
    const [id, setId] = useState("")


    useEffect(() => {
        if (Object.keys(gastosEditar).length > 0) {
            setNombre(gastosEditar.nombre)
            setCantidad(gastosEditar.cantidad)
            setCategoria(gastosEditar.categoria)
            setId(gastosEditar.id)
            setFecha(gastosEditar.fecha)
        }
    },[gastosEditar])




    const OcultarModal = () => {
        setTimeout(() => {
        setModal(false)
        setGastosEditar({})
        }, 1000);
        setAnimarModal(false)
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes("")){
            setMensaje(true)
            return
        }
        setMensaje(false)
        guardarGastos({nombre, cantidad, categoria, id, fecha})
    }

    

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img
            onClick={OcultarModal}
            src={CerrarBtn} alt="cerrar modal"/>
        </div>   

        <form 
        onSubmit={handelSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`} >
            <legend>
                {gastosEditar.nombre ? "Editar Gasto" : "Agregar Gasto"}
            </legend>

            {mensaje && <h2 className="error alerta-error"
            style={{textAlign: "center", padding: "0.5rem"}}
            >Todos los campos son obligatorios</h2>} 

            <div className="campo">
                <label htmlFor="nombre">Nombre Gastos</label>
                <input 
                value={nombre} 
                type="text" 
                id="nombre" 
                name="nombre" 
                placeholder="Añade el Gasto"
                onChange={(e) => setNombre(e.target.value)}
                />
            </div> 

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                type="number" 
                id="cantidad" 
                name="cantidad" 
                placeholder="Añade un monto"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                />
            </div>   

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                id="categoria">

                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="salud">Salud</option>
                    <option value="casa">Casa</option>
                    <option value="arriendo">arriendo</option>
                    <option value="suscripciones">suscripciones</option>
                </select>
            </div>
            <input type="submit" value= {gastosEditar.nombre ? "Guardar Cambio" : "Añadir Gasto"}/>
                       
        </form>

    </div>
  )
}
