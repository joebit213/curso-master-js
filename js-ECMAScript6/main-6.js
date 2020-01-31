// Hrencia de clases con JS

class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre

    this.saldo = saldo
  }

  //Añadiendo metodos

  imprimirSaldo() {
    return `Hola ${this.nombre}, tu saldo es de : ${this.saldo}`
  }
  //Otros tipos de atributos/metodos son los estaticos -- estos no necesitan instansairce

  static bienvenida() {
    return `Bienvenido al cajero`
  }

}

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, tipo) {
    //Va haci el constructo padre
    super(nombre, saldo)
    // no existen en el constructor padre
    this.telefono = telefono
    this.tipo = tipo;
  }
}

const empresa = new Empresa('Empresa1', 10000, 5536488329, 'Construccion')

console.log(empresa.imprimirSaldo())