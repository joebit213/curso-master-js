// Creando clases con ECMAScript6

class Cliente {
  constructor(nombre, apellido, saldo) {
    this.nombre = nombre
    this.apellido = apellido
    this.saldo = saldo
  }

  //Añadiendo metodos

  imprimirSaldo() {
    return `Hola ${this.nombre}, tu saldo es de : ${this.saldo}`
  }

  tipoCliente() {
    let tipo;
    if(this.saldo > 1000) {
      tipo = 'Gold'
    }else if (this.saldo > 500) {
      tipo = 'Plata'
    }else {
      tipo = 'Normal'
    }
    return tipo
  }

  retirarSaldo(retiro) {
    return this.saldo -= retiro
  }

  //Otros tipos de atributos/metodos son los estaticos -- estos no necesitan instansairce

  static bienvenida() {
    return `Bienvenido al cajero`
  }

}

const maria = new Cliente('Maria', 'Perez', 1000)
maria.retirarSaldo(200)

console.log(Cliente.bienvenida())