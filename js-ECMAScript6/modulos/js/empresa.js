import { Cliente } from './cliente.js'

//exportar variables
export const nombreEmpresa = 'Udemy'
export let ahorro = 90857234
export const categoria = 'Aprendizaje'

//exportar funciones
export const mostrarInformacion = (nombre, ahorro, categoria) => {
  return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria: ${categoria}`
}

//Utilizar la clase del modulo cliente
export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro)
    this.categoria = categoria
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`
  }
}