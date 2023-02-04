let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');

let scoreOfOne = 0;
let scoreOfTwo = 0;
let currentScore = 0;
score0.textContent = 0;
score1.textContent = 0;
let playing = true;
dice.classList.add('hidden');

let activePlayer = 0;
let scoreOf = [0, 0];

btnRoll.addEventListener('click', function () {

    if (playing) {

        if (activePlayer === 0) {
            const randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
            if (randomNumber === 1) {
                currentScore0.textContent = 0;
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
                activePlayer = 1;
                currentScore = 0;
            }

            dice.classList.remove('hidden');
            dice.src = `dice-${randomNumber}.png`;
            currentScore += randomNumber;
            currentScore0.textContent = currentScore;
        }
        else if (activePlayer === 1) {
            const randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
            if (randomNumber === 1) {
                currentScore1.textContent = 0;
                player1.classList.remove('player--active');
                player0.classList.add('player--active');
                activePlayer = 0;
                currentScore = 0;
            }
            dice.classList.remove('hidden');
            dice.src = `dice-${randomNumber}.png`;
            currentScore += randomNumber;
            currentScore1.textContent = currentScore;
        }
    }
});

btnHold.addEventListener('click', function () {
    scoreOf[activePlayer].textContent = currentScore;


    if (activePlayer === 0) {
        if (playing) {


            scoreOfOne = scoreOfOne + currentScore;
            if (scoreOfOne >= 100) {
                player0.classList.remove('player--active');
                player0.classList.add('player--winner');
                dice.classList.add('hidden');
                playing = false;

            }
            score0.textContent = scoreOfOne;
            currentScore0.textContent = 0;
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
            activePlayer = 1;
            currentScore = 0;
        }
    }



    else if (activePlayer === 1) {
        if (playing) {


            scoreOfTwo = scoreOfTwo + currentScore;
            if (scoreOfTwo >= 100) {
                player1.classList.toggle('player--active');
                player1.classList.toggle('player--winner');
                dice.classList.add('hidden');
                playing = false;

            }
            score1.textContent = scoreOfTwo;
            currentScore1.textContent = 0;
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
            activePlayer = 0;
            currentScore = 0;
        }
    }

});


btnNew.addEventListener('click', function () {
    playing = true;
    player1.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player0.classList.remove('player--winner');
    score0.textContent = 0;
    score1.textContent = 0;
    scoreOf = [0, 0];
    scoreOfOne = 0;
    scoreOfTwo = 0;
    dice.classList.add('hidden');

})