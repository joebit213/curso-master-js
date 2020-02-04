//Async Await   //una funcion asincrona siempre va a requerir un promise 

async function obtenerClientes() {
      //crear un promise
      const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Clientes descargados...`)
        }, 2000)
      })
      //error o no
      const error = false
      if(!error) { 
                  //este await va a detener la ejecucion hasta que el promise se haya finalizado
                  //una vez que este termine continuara con el codigo en esta parte
        const respuesta = await clientes
        return respuesta
      }else {
        await Promise.reject('Hubo un error...')
      }
}