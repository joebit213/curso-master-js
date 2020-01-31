//Creando el objeto
function Cliente(nombre, saldo){
  this.nombre = nombre
  this.saldo = saldo
}

//de esta manera el proto solo va a estar disponible para los obejtos que sean tipo Cliente
//esto permite que nuestros objetos no esten tan cargados


//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
  return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}`
}

const cliente1 = new Cliente('Pedro', 600)

console.log(cliente1)

//Banca para empresas -- Heredando CLASE
function Empresa(nombre, saldo, telefono, tipo) {
  Cliente.call(this, nombre, saldo)
  this.telefono = telefono
  this.tipo = tipo
}

//Heredando los prototype
Empresa.prototype = Object.create(Cliente.prototype)

const empresa = new Empresa('UDEMY', '364057', '5584370438', 'Educacion')

console.log(empresa.nombreClienteSaldo())