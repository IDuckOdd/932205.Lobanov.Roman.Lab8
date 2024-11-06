const items = document.querySelector('.elements');
const saved = document.querySelector('.result');
const add = document.querySelector('.addElement');
const save = document.querySelector('.save');

add.addEventListener('click', () => {
    const newItem = document.createElement('div');

    newItem.classList.add('item');
    newItem.innerHTML = `
        <input type="text" class="input"> 
        <input type="text" class="input">
        <input type="button" class="up" value="↑">
        <input type="button" class="down" value="↓">
        <input type="button" class="delete" value="x">
    `;
    newItem.querySelector('.up').addEventListener('click', moveUp);
    newItem.querySelector('.down').addEventListener('click', moveDown);
    newItem.querySelector('.delete').addEventListener('click', remove);

    items.append(newItem);
});

save.addEventListener('click', () => {
    const objectItems = document.querySelectorAll('.item');
    let savedObjects = '{';

    objectItems.forEach((item) => {
        const firstValue = item.querySelector('input:nth-child(1)').value;
        const secondValue = item.querySelector('input:nth-child(2)').value;

        savedObjects += ` "${firstValue}": "${secondValue}",`;
    });

    savedObjects = savedObjects.slice(0, savedObjects.length - 1);
    savedObjects += ' }';

    saved.textContent = savedObjects;
});

const moveUp = ($event) => {
    const current = $event.target.closest('.item');
    const previous = current.previousElementSibling;
    previous?.before(current);
};

const moveDown = ($event) => {
    const current = $event.target.closest('.item');
    const next = current.nextElementSibling;
    next?.after(current);
};

const remove = ($event) => {
    $event.target.closest('.item').remove();
};

document.querySelector('.up').addEventListener('click', moveUp);
document.querySelector('.down').addEventListener('click', moveDown);
document.querySelector('.delete').addEventListener('click', remove);