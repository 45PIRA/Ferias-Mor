document.getElementById('startButton').addEventListener('click', startCountdown);

const photos = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg'
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
