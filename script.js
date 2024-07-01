mkdir images
git add images/
git commit -m "Adiciona fotos para a contagem regressiva"
git push origin main



document.getElementById('startButton').addEventListener('click', startCountdown);

const photos = [
    'Foto1.jpg',
    'Foto2.jpg',
    'Foto3.jpg',
    'Foto4.jpg',
    'Foto5.jpg'
];

function startCountdown() {
    let countdownNumber = 5;
    const countdownElement = document.getElementById('countdown');
    const photoElement = document.getElementById('photo');
    const messageElement = document.getElementById('message');

    const countdownInterval = setInterval(() => {
        if (countdownNumber > 0) {
            countdownElement.textContent = countdownNumber;
            photoElement.innerHTML = `<img src="${photos[5 - countdownNumber]}" alt="Foto ${countdownNumber}">`;
            countdownNumber--;
        } else {
            clearInterval(countdownInterval);
            countdownElement.textContent = '';
            photoElement.innerHTML = '';
            messageElement.textContent = 'Play nas Férias Laryssa';
        }
    }, 1000);
}
