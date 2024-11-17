function verify() {
    let date = new Date();
    let year = date.getFullYear();
    let fYear = document.querySelector('input#txtyear');
    let result = document.querySelector('div#result');

    if (fYear.value.length == 0 || Number(fYear.value) > year) {
        alert('Verifique os dados e tente novamente!');
    } else {
        let fSex = document.getElementsByName('radsex');
        let age = year - Number(fYear.value);
        let gender = '';
        let image = document.createElement('img');
        
        image.setAttribute('id', 'photo');        
        image.style.borderRadius = '50%';
        image.style.width = '250px';
        image.style.height = '250px';
        if (fSex[0].checked) {
            gender = 'Homem';
        if (age >= 0 && age < 10) {
            image.setAttribute('src', './images/baby_man.jpg');
        } else if (age < 21) {
            image.setAttribute('src', './images/young_man.jpg');
        } else if (age < 50) {
            image.setAttribute('src', './images/adult_man.jpg')
        } else {
            image.setAttribute('src', './images/old_man.jpg')
        }        
        } else {
            gender = 'Mulher';
            if (age >= 0 && age < 10) {
                image.setAttribute('src', './images/baby_woman.jpg');
            } else if (age < 21) {
                image.setAttribute('src', './images/young_woman.jpg');
            } else if (age < 50) {
                image.setAttribute('src', './images/adult_woman.jpg')
            } else {
                image.setAttribute('src', './images/old_woman.jpg')
            }                    
        }
        result.style.textAlign = 'center';
        result.innerHTML = `Detectamos ${gender} com ${age} anos.`;
        result.appendChild(image);
    }
}