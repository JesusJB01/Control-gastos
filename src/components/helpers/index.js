

export const index = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = new Date().toString(36)
    return random  + fecha
}

export const FormatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-ES', options)
}
