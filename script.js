let counter = document.querySelector('.counter');
const up = document.querySelector('#up');
const down = document.querySelector('#down');

let count = 0;

up.addEventListener('click', increment);
down.addEventListener('click', decrement);

function increment(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = 'green';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.1'}, {opacity:'0.5'},{opacity: '0.8'}],
    {duration:2000, fill:'forwards'});
}

function decrement(){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < '0'){
        counter.style.color = 'red';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.1'}, {opacity:'0.5'},{opacity: '0.8'}],
    {duration:2000, fill:'forwards'});
}