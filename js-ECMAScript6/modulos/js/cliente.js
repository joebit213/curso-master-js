//exportar variables
export const nombreCliente = 'Juan'
export let ahorro = 200

//exportar funciones
export const mostrarInformacion = (nombre, ahorro) => {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}

export const mostrarNombre = (nombre) => {
  return `Nombre del cliente: ${nombre}`
}

//exportar una clase
export class Cliente  {
  constructor(nombre, ahorro) {
    this.nombre = nombre
    this.ahorro = ahorro
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
  }
  
}