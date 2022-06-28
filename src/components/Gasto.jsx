import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { FormatearFecha } from './helpers';

export const Gasto = ({gasto, setGastosEditar, eliminarGasto}) => {
    const {categoria, nombre, id, cantidad, fecha} = gasto;

   
const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => setGastosEditar(gasto)}>
     Editar
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => eliminarGasto(id)}
    >
      Delete
    </SwipeAction>
  </TrailingActions>
);

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >

          <div className='gasto sombra'>
              <div className='contenido-gasto'>
                  <div className='descripcion-gasto'>
                      <p className='categoria'>{categoria}</p>
                      <p className='nombre-gasto'>{nombre}</p>
                      <p className='fecha-gasto'> Agregado el: {""} <span>{FormatearFecha(fecha)}</span></p>
                  </div>
                
              </div>  
              <p className='cantidad-gasto'>${cantidad}</p>    
          </div>

      </SwipeableListItem>
    </SwipeableList>

  )
}
