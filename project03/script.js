function count() {
    let numStart = Number(document.querySelector('input#txtstart').value);
    let numEnd = Number(document.querySelector('input#txtend').value);
    let numStep = Number(document.querySelector('input#txtstep').value);

    if (numStart.length || numEnd.length || numStep.length == 0) {
        result.innerHTML = 'Impossível contar!';
        alert('Você digitou parâmetros nulos. Verifique!');
        return;
    }

    result.innerHTML = '';
    for (numStart; numStart <= numEnd; numStart += numStep) {
        let result = document.querySelector('div#result');   
        result.innerHTML += `Contando: ${numStart} ${numStart + numStep > numEnd ? '👉🏁' : '👉'}`;        
    }
}