//1
let colores = ['violeta','amarillo','naranja','verde','celeste']
console.log(colores)

//2
let primero = colores[0]
let ultimo = colores[colores.length - 1]
console.log(primero);
console.log(ultimo);

//3
console.log(colores.length);

//4
colores.push('esmeralda');
console.log(colores);

//5
colores.unshift('rojo');
console.log(colores);

//6
colores.pop();
console.log(colores);

//7
colores.shift();
console.log(colores);

//8
colores[1] = 'gris'
console.log(colores);

//9
for (let i = 0; i < 5; i++) {
   console.log(i)
    
}