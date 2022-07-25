const cardArray = [
    {
        name: 'pawn',
        img: 'pawn.jpg'
    },
    {
        name: 'bishop',
        img: 'bishop.jpg'
    },
    {
        name: 'knight',
        img: 'knight.jpg'
    },
    {
        name: 'queen',
        img: 'queen.jpg'
    },
    {
        name: 'king',
        img: 'king.jpg'
    },
    {
        name: 'rook',
        img: 'rook.jpg'
    },
    {
        name: 'pawn',
        img: 'pawn.jpg'
    },
    {
        name: 'bishop',
        img: 'bishop.jpg'
    },
    {
        name: 'knight',
        img: 'knight.jpg'
    },
    {
        name: 'queen',
        img: 'queen.jpg'
    },
    {
        name: 'king',
        img: 'king.jpg'
    },
    {
        name: 'rook',
        img: 'rook.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// create game board 

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'black.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard();

// check for matches

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'black.jpg');
        cards[optionTwoId].setAttribute('src', 'black.jpg');
        alert('You have clicked the same image!');
    } else if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'white.jpg');
        cards[optionTwoId].setAttribute('src', 'white.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'black.jpg');
        cards[optionTwoId].setAttribute('src', 'black.jpg');     
    }
    
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length / 2)) {
        resultDisplay.textContent = 'You\'ve matched all 6!';
    }
}

// choose and flip a card

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
