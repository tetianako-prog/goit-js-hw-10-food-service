import itemTemplates from '../templates/menu-item.hbs';
import menuArray from '../menu.json';

const markup = itemTemplates(menuArray);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
