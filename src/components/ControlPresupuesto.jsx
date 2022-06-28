import React, {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto}) => {
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastados] = useState(0)


    useEffect(() => {
      const totalGastos = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        const totalDisponible = presupuesto - totalGastos;

        const nuevoPresupuesto = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);;
        setDisponible(totalDisponible)
        setGastados(totalGastos)

        setTimeout(() => {
            setPorcentaje(nuevoPresupuesto)

        }, 2000);
    }, [gastos])


    
    

    const formatNumber = (cantidad) => {
    return cantidad.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
    } )
}


const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

    if(resultado) {
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
    } 
}

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
            styles={buildStyles({
                pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                trailColor: '#f5f5f5',
                textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Resetear App
            </button>
            <p>
                <span>Presupuesto:</span> {formatNumber(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                <span>Disponible:</span> {formatNumber(disponible)}
            </p><p>
                <span>Gastado:</span> {formatNumber(gastado)}
            </p>
        </div>
    </div>
  )
}
