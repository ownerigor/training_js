let num = [40, 22, 21];
num.push(3);
console.log(`Todos os números do meu array são: ${num}`);
console.log(`O primeiro número é: ${num[0]}`);
console.log(`O tamanho deste array é: ${num.length}`);

num.sort((a, b) => a - b);
console.log(`Organizei o meu array em ordem crescente: ${num}`);