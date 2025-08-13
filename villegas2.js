edades = [15, 16, 17, 15, 18, 16, 17, 15, 18, 16, 17];
sumaEdades = 0

for (let i = 0; i < edades.length; i++) {
    sumaEdades = sumaEdades + edades[i] / edades.length
    
}console.log('El promedio de edades es:' + ' ' + sumaEdades)


i = 5
while (i <= 50) {
    console.log(i)
    i = i + 5
}
//no uso i++ porque en este caso no es necesario


colores = ['rojo', 'verde', 'azul', 'amarillo', 'violeta', 'naranja'];
for (let indice = 0; indice < colores.length; indice++) {
    if(colores[indice] === 'violeta'){
        alert('El color se encuentra en el listado en la posición' + ' ' + indice)
    }
    
}


stock = [4, 7, 2, 9, 3];

for (let index = 0; index < stock.length; index++) {
    stock[index] = stock[index] + 5
    
}console.log('Los valores son:' + ' ' + stock)