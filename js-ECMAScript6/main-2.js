//Prototypes (era la forma antigua ahora se utilizan clases) ECMA6


//Creando el objeto
function Cliente(nombre, saldo){
  this.nombre = nombre
  this.saldo = saldo
}

//Crear un Prototype
Cliente.prototype.tipoCliente = function() {
      let tipo;
  
      if(this.saldo > 1000) {
        tipo = "Gold"
      } else if(this.saldo > 5000) {
        tipo = "Platinum"
      }
      else {
        tipo = "Normal"
      }
      return tipo
}

//de esta manera el proto solo va a estar disponible para los obejtos que sean tipo Cliente
//esto permite que nuestros objetos no esten tan cargados


//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
  return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo},
  Tipo de cliente ${this.tipoCliente()}`
}

//Retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
  return this.saldo -= retiro
}

const cliente1 = new Cliente('Pedro', 600)

cliente1.retirarSaldo(300)

console.log(cliente1.nombreClienteSaldo())