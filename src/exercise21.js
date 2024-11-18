let values = [8, 1, 7, 4, 2, 9];
console.log(values);
values.sort();

//Maneira tradicional com for...
for (pos = 0; pos < values.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${values[pos]}`);
}

//Maneira com for .. in
for (let pos in values) {
    console.log(`A posição ${pos} tem o valor ${values[pos]}`);
}

//Para procurar um valor dentro do meu array, basta fazer .indexOf(<valor>)
//Caso não encontrar, ele retorna -1...
console.log(values.indexOf(7));