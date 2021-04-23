const seatCount = document.querySelector('#seatCount');
const totalPrice = document.querySelector('#price');
const time = document.querySelector('#time');
/** @type {HTMLElement[]} */
const seats = [...document.querySelectorAll('.jsSeat')];
const movies = document.querySelector('#movies');


let seatSum = 0;
countSelectedSeats();
let price = 0;
changePrices();
let startTime = '20:40';
changeTime();

seatCount.innerHTML = seatSum;
totalPrice.innerHTML = `$${price}`;
time.innerHTML = startTime;

seats.forEach(box => box.addEventListener('click', e => {
    /** @type {HTMLElement} */
    const el = e.currentTarget;
    if (el.classList.contains('sold')) {
        alert('This seat is already sold.');
    } else if (el.classList.contains('available')) {
        el.classList.add('selected');
        el.classList.remove('available');
    } else if (el.classList.contains('selected')) {
        el.classList.add('available');
        el.classList.remove('selected');
    }
    countSelectedSeats();
    changePrices();
    changeTime();
    seatCount.innerHTML = seatSum;
}));

movies.addEventListener('change', e => {
    changePrices();
})

function countSelectedSeats() {
    seatSum = seats.filter(v => v.classList.contains('selected')).length;
}


function changeTime() {
    let movieName = movies.value;
    startTime = getStartTime(movieName);
    time.innerHTML = startTime;
}

function getStartTime(name) {
    if (name === '') {
        return '--:--';
    } else if (name === 'avengers') {
        return '20:40';
    } else if (name === 'joker') {
        return '19:10';
    } else if (name === 'toyStory') {
        return '20:15';
    } else if (name === 'theLionKing') {
        return '21:45';
    } else {
        throw new Error(`Unknown movie: ${name}`);
    }
}

function changePrices() {
    let movieName = movies.value;
    price = getMoviePrice(movieName) * seatSum;
    totalPrice.innerHTML = `$${price}`;
}

function getMoviePrice(name) {
    if (name === '') {
        return 0;
    } else if (name === 'avengers') {
        return 10;
    } else if (name === 'joker') {
        return 12;
    } else if (name === 'toyStory') {
        return 8;
    } else if (name === 'theLionKing') {
        return 9;
    } else {
        throw new Error(`Unknown movie: ${name}`);
    }
}