//Ejercicio 1
let animales = ['perro', "gato", "conejo", "loro"]

for(let i = 0; i < animales.length; i++){
    console.log(animales[i]);
}

//Ejercicio 2
for(let i = 0; i < animales.length; i++){
    if(i % 2 === 0) {
        console.log(animales[i]);
    }
}

//Ejercicio 3
let numeros = [4, 7, 2, 9, 5];
let suma = 0
for(let i = 0; i < numeros.length; i++){
    suma += numeros[i];
    console.log('La suma es'+  suma)
}


//Ejercicio 4
let datos = [3, 6, 1, 8];

let multiplicacion = []
for(let i = 0; i < datos.length; i++){
    multiplicacion.push(datos[i] * 2)
}
console.log(multiplicacion)

//Ejercicio 5 ?
let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombres = prompt('Ingresa cualquier nombre')
while(nombres = alumnos){
    console.log()
}

//Ejercicio 6
let valores = [5, 0, 8, 0, 2];
console.log(valores)
let pos = 1
let pos2 = 3
let valoresCambiados = valores.splice(pos,pos2)
console.log(valoresCambiados)

