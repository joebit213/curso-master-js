//Object create

//clase
const Cliente = {
  //metodos o protos
    imrpimirSaldo: function() {
      return `Hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro) {
      return this.saldo -= retiro
    }
}

//Creando el objeto
const mary = Object.create(Cliente)
mary.nombre = 'Mary'
mary.saldo = 1000

console.log(mary)
console.log(mary.imrpimirSaldo())
console.log(mary.retirarSaldo(100))