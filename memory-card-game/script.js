const cards = document.querySelector('.cards');
const wrongMatches = document.querySelector('.wrong-matches');
const startTime = document.querySelector('.start-time');
const gameTime = document.querySelector('.game-time');
const time = document.querySelector('#time');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');
const span = document.getElementsByClassName("close")[0];
const retry = document.querySelector('.retry');
let timeCounter = 35;
let trueMatch = 0; 

const getImage = () => [
    {imgSrc: "./images/fred.png", name: "fred"},
    {imgSrc: "./images/jerry.png", name: "jerry"},
    {imgSrc: "./images/pikachu.png", name: "pikachu"},
    {imgSrc: "./images/stitch.png", name: "stitch"},
    {imgSrc: "./images/sunger-bob.png", name: "sunger-bob"},
    {imgSrc: "./images/winnie.png", name: "winnie"},
    {imgSrc: "./images/fred.png", name: "fred"},
    {imgSrc: "./images/jerry.png", name: "jerry"},
    {imgSrc: "./images/pikachu.png", name: "pikachu"},
    {imgSrc: "./images/stitch.png", name: "stitch"},
    {imgSrc: "./images/sunger-bob.png", name: "sunger-bob"},
    {imgSrc: "./images/winnie.png", name: "winnie"}
];

modal.setAttribute('style', 'display: none');
gameTime.setAttribute('style', 'display: none');
retry.setAttribute('style', 'display: none');
cards.style.pointerEvents = "none";

const randomizeImg = () => {
    const cardData = getImage();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

const cardGenerator = () => {
    const cardData = randomizeImg();
    cardData.forEach(item => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        front.classList = "front";
        back.classList = "back";
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);
        cards.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', e => {
            card.classList.toggle('toggleCard');
            checkCard(e);
        })
    })
} 

const checkCard = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            trueMatch++;
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            })
        }
    }
}

startTime.addEventListener('click', timeStart);
function timeStart() {
    startTime.style.display = "none";
    times();
}

const times = () => {
    gameTime.style.display = "block";
    cards.style.pointerEvents = "auto";
    gameTime.setAttribute('style', 'margin-bottom: 15px');
    let counts = setInterval(updated, 1000);
    function updated(){
        timeCounter--;
        time.textContent = timeCounter;
        if(timeCounter === 0 && trueMatch != 6)
        {
            clearInterval(counts);
            modal.style.display = "block";
            modalText.textContent = `Your true match is ${trueMatch}.`;
            cards.style.pointerEvents = "none";
            retry.style.display ="block";
        }
        if(timeCounter != 0 && trueMatch === 6) {
            clearInterval(counts);
            modal.style.display = "block";
            modalText.textContent = `Congratulations!! You found all matches. Your true match is ${trueMatch}.`;
            cards.style.pointerEvents = "none";
            retry.style.display ="block";
        }
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

retry.addEventListener('click', reloadGame);
function reloadGame() {
    location.reload();
}

cardGenerator();
