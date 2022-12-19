// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const newGallery = (items) => {
    return (
        galleryItems
            .map(
                (item) =>
                    `
                    <a class='gallery__item' href='${item.original}'>
                        <img
                            class='gallery__image'
                            src='${item.preview}'
                            alt='${item.description}'
                            loading='lazy'
                        />
                        </a>
                                        
                    `)
            .join("")
    );
};

gallery.insertAdjacentHTML("beforeend", newGallery(galleryItems));
gallery.style.listStyle = 'none';

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});