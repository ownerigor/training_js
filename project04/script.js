function multiply() {
    let number = Number(document.querySelector('input#txtnum').value);
    let tab = document.querySelector('select#seltab');

    console.log(number);
    if (number == 0) {
        alert('Digite um número!');
        return;
    }

    let i = 1;
    tab.innerHTML = '';
    while (i <= 10) {
        let item = document.createElement('option');
        item.text = `${number} x ${i} = ${number * i}`;
        item.value = `tab${i}`;
        tab.appendChild(item);
        i++;
    }
}