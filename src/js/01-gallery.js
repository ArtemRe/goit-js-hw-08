import { galleryItems } from './gallery-items.js';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

function criateEl(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<a class="gallery__item" 
  href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
       </a>`,
    ''
  );
}
criateEl(galleryItems);
const list = document.querySelector('.gallery');
const result = criateEl(galleryItems);
list.insertAdjacentHTML('beforeend', result);
const gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  animationSpeed: 250,
});
