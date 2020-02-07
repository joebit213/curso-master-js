//EXPRECIONES REGULARES
//crear expreciones regulares
// const exp1 = new RegExp('/abc/')
// const exp2 = /abc/

// console.log(exp2)

//se pueden probrar las expreciones regulares 
let valor, expReg;

expReg = /[0-9]/;
//valor = 1996
//valor = 'Hola'

//buscar una fecha en exprecion regular 20-10-2020
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2020'

//hora 10:30
expReg = /\d\d:\d\d \D\D/
valor = '10:30 AM'


//
expReg = /\d+/;
valor = 32092309;

//regresa true o false
//console.log(expReg.test(valor))


///////////////////////////////////////////////////////////////////////
//NEGAR LA EXPRECION REGULAR

expReg = /[^0-9]/;
valor = 'helo';

//la sintaxis con llaves {1,2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2001';
valor = '42-233-32';

//letras o numero -- la w evaluea que sean unicamente numero o letras
expReg = /\w+/;
valor = 'wqww'

//que un texto sean puras mayusculas
expReg = /([A-Z])\w/
valor = 1234;
valor = 'welñrwer'
valor = 'LSKJAKFJFKA'

console.log(expReg.test(valor))