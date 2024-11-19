let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flist');
let result = document.querySelector('div#result');
let values = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if (isNumber(num.value) && !inList(num.value, values)) { //! quer dizer not
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        list.appendChild(item);
        result.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = '';
    num.focus();
}

function finish() {
    if (values.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let total = values.length;
        let bigger = values[0];
        let smaller = values[0];
        let sum = 0;
        let media = 0;

        for (let pos in values) {
            sum += values[pos];

            if (values[pos] > bigger)
                bigger = values[pos];
            if (values[pos] < smaller)
                smaller = values[pos];
        }
        media = sum / total;
        result.innerHTML = '';
        result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        result.innerHTML += `<p>O maior valor informado foi ${bigger}.</p>`
        result.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`;
        result.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`;
        result.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}