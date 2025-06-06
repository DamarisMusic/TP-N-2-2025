//Ejercicio 1
let frutas = ['Ananá', 'Sandía', 'Uvas']
console.log(frutas)
frutas.push('Melón');
frutas.unshift('Mango');
frutas.pop()
frutas.shift()
console.log(frutas);

//Ejercicio 2
let nombres = ['Carla', 'Esteban', 'Esmeralda']
console.log(nombres.length)
nombres.push('Antonella', 'Matías')
console.log(nombres.lenght)

//Ejercicio 3
let numeros = [1,2,3,4,5,6,7,8,9,10]
let i = 0
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

//Ejercicio 4
let numeros2 = [20,21,22,23,24,25]
let suma = 0
for(let i = 0; i < numeros.lenght; i++){
    suma += numeros2[i]
    console.log(numeros2[suma])
}

//Ejercicio 5
let palabrasGuardadas
let palabrasUsuario = prompt('Escribe 5 palabras')
palabrasGuardadas.push(palabrasUsuario)