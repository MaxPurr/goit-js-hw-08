import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const images = galleryItems.map((galleryItem) => 
    `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
    </a>`)
    .join("");

gallery.innerHTML = images;

let galleryImages = new SimpleLightbox('div.gallery a');
galleryImages.options.captionsData = "alt";
galleryImages.options.captionDelay = 250;