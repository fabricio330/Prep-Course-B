function  resta(num1,num2,) {
  return num1 - num2  
}

function suma(num1,num2,) {
   return num1 + num2
}

function multiplicacion(num1,num2) {
    return num1 * num2
}

function division(num1,num2){
    return num / num2
}

function MiCalculadora(num1,num2,cb) {
    return "su resultado es" + cb(num1,num2)
}   

console.long(MiCalculadora(4,8,suma))
console.long(MiCalculadora(4,8,division))
    