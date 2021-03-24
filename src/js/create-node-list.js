import elementsTemplate from '../templates/gallery-element.hbs';
import elementsList from '../menu.json';

const listRef = document.querySelector('.js-menu');

const itemList = elementsTemplate(elementsList);

listRef.insertAdjacentHTML('beforeend', itemList);


