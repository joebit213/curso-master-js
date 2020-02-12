import { nombreCliente, ahorro,  mostrarInformacion, mostrarNombre, Cliente } from './cliente.js'
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa } from './empresa.js'
//import * as cliente from './cliente.js'

//console.log(ahorroEmpresa)
//console.log(nombreCliente)
//console.log(ahorro)

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria)
console.log(empresa.mostrarInformacion())

//Info cliente
// const info = mostrarInformacion(nombreCliente, ahorro)
// console.log(info)

//info empresa
// const infoEmpresa = informacionEmpresa(nombreEmpresa, ahorroEmpresa, categoria)
// console.log(infoEmpresa)


//Utilizar la clase
// let cliente = new Cliente(nombreCliente, ahorro)
// console.log(cliente.mostrarInformacion())