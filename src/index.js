import './style.scss';

let input = document.querySelector('input#new-item');
console.log(input);
let button = document.querySelector('#add-btn');
let list = document.querySelector('#shopping-list');
button.addEventListener('click', () => {
    let newItem = input.value;
    console.log(newItem);
    list.innerHTML += `<li>(${newItem})</li>`;
    input.value = '';
});

let title = document.querySelector('#title');
input.addEventListener('change', () => {
    title.innerHTML = input.value;
});