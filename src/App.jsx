import { useEffect, useState } from "react"
import Filtros from "./components/Filtros"
import { Header } from "./components/Header"
import { index } from "./components/helpers"
import { ListadoGastos } from "./components/ListadoGastos"
import { Modal } from "./components/Modal"
import IconoNuevoGasto from "./img/nuevo-gasto.svg"


function App() {
  const [presupuesto, setPresupuesto] = useState(
  localStorage.getItem("presupuesto") ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem("gastos") ?? "[]")
  )
  const [filtro, setFiltro] = useState("")
  const [gastosfiltrados, setGastosFiltrados] = useState([])


  const [gastosEditar, setGastosEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
      setModal(true)
    }
  }, [gastosEditar])

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto || 0)
  }, [presupuesto])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto") ?? 0)
    if (presupuestoLS > 0) {
      
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? [])
  }, [gastos])
  
  useEffect(() => {
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }  
  }, [filtro])


  const handleNuevoGasto = () => {

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000);
      setModal(true)
      setGastosEditar({})
  }

  const guardarGastos = gasto => {
    if(gasto.id ){
    const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastosEditar({})
  } else  {
    gasto.id = index();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto])
  }
    setAnimarModal(false)
    setTimeout(() => {
            
      setModal(false)
  }, 1500);

}

const eliminarGasto = id => {
  const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
  setGastos(gastosActualizados)
}

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
      gastos={gastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      setGastos={setGastos}
      />

      {
        isValidPresupuesto && (
          <>

          <main>
            <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
            />
            <ListadoGastos
            gastos={gastos}
            setGastosEditar={setGastosEditar}
            eliminarGasto={eliminarGasto}
            filtro={filtro}
            gastosfiltrados={gastosfiltrados}
            />
          </main>
            <div className="nuevo-gasto">
              <img 
              onClick={handleNuevoGasto}
              src={IconoNuevoGasto} alt="icono nuevo gasto"/>

            </div>
          </>  

        ) 
      }

    { modal &&  <Modal
      setModal={setModal}
      setAnimarModal={setAnimarModal}
      animarModal={animarModal}
      guardarGastos={guardarGastos}
      gastosEditar={gastosEditar}
      setGastosEditar={setGastosEditar}
      />
    }
    </div>
  )
}

export default App
