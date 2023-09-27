import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listGallery = document.querySelector(`.gallery`);
const itemGallery = createMarkup(galleryItems);
listGallery.insertAdjacentHTML("beforeend", itemGallery);
listGallery.addEventListener("click", handlerClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

let openPhoto = false;
let bigger;
function handlerClick(event) {
  event.preventDefault();
  const closed = event.target;
  if (closed.classList.contains("gallery__image")) {
    const linkImage = closed.dataset.source;
    bigger = basicLightbox.create(`
        <img src="${linkImage}" width="800" height="600">
        `);
    bigger.show();
    openPhoto = true;
  }
  document.addEventListener("keydown", keyDown);
}

function keyDown(event) {
  if (event.key === "Escape" || openPhoto) {
    bigger.close();
    openPhoto = false;
    document.removeEventListener("keydown", keyDown);
  }
}

console.log(galleryItems);

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)
