
var num1=10

if (true) {
    let num2=5
    console.log("num2 (DENTRO del bloque IF)", num2)
    console.log("num2 (DENTRO del bloque IF)", num1 )
}
let num2=20

console.log("num2 (FUERA del bloque IF)",num1)
console.log("num2 (FUERA del bloque IF)",num2)
const IVA=0.19
console.log(IVA)
//operadores artimeticos
console.log('suma:',num1+num2)
console.log('resta:',num1-num2)
console.log('multiplicación:',num1*num2)
console.log('división:',num1/num2)
console.log('ecuación:',((num1/num2)*2+num1))
//operadores de asignación compuestos
let a=5

a+=2//a=a+2
console.log(a)
a-=1//a=a-1
console.log(a)
a*=2//a=a*2
console.log(a)
a/=3//a=a/3
console.log(a)
//imprimir en el documento
document.write('<h2>Hola desde Js</h2>')



let esAdulto=true
let tienePermiso=false
let puedeEntrar= esAdulto && tienePermiso
let puedeSalir= esAdulto || tienePermiso

console.log("Puede ENTRAR??", puedeEntrar)
console.log("Puede SALIR??", puedeSalir)
console.log("Puede SALIR NEGADO??", !puedeSalir)
console.log("Puede ENTRAR NEGADO??", !puedeENTRAR)


//Template literals


nombrecito= "Camila"
Apellido=""
NombreCompleto=""