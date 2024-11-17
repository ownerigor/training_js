function load() {
    let message = document.querySelector('div#message');
    let image = document.querySelector('img#image');
    let date = new Date();
    let hour = date.getHours();
    
    message.innerHTML = `Agora são ${hour} horas.`;
    if (hour >= 0 && hour < 12) {
        image.src = './images/morning_photo.jpg';
        document.body.style.background = '#e2cd9f';
    } else if (hour >= 12 && hour <= 18) {
        image.src = './images/afternoon_photo.jpg';
        document.body.style.background = '#b9846f';
    } else {
        image.src = './images/night_photo.jpg';
        document.body.style.background = '#515154';
    }
}