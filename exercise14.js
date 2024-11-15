let hour = Number(new Date().getHours());
console.log(`Agora são exatamente ${hour} horas.`);

if (hour >= 6 && hour < 12) {
    console.log('Bom dia!');
} else if (hour >= 12 && hour < 18) {
    console.log('Boa tarde!');
} else if (hour >= 18 && hour < 24) {
    console.log('Boa noite!');
} else {
    console.log('Boa madrugada!');
}