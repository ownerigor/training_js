function count() {
    let numStart = Number(document.querySelector('input#txtstart').value);
    let numEnd = Number(document.querySelector('input#txtend').value);
    let numStep = Number(document.querySelector('input#txtstep').value);

    if (numStart || numEnd || numStep == 0) {
        alert('Você digitou parâmetros nulos. Verifique!');
        return;
    }

    for (numStart; numStart <= numEnd; numStart += numStep) {
        let result = document.querySelector('div#result');       
        result.innerHTML += `${numStart} ${numStart + numStep > numEnd ? '👉🏁' : '👉'}`;        
    }
}