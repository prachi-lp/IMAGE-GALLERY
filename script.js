const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterButtons = document.querySelectorAll(".filters button");

let currentIndex = 0;
let images = Array.from(galleryItems);

/* Open Lightbox */
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex].src;
}

/* Close Lightbox */
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* Navigation */
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox();
});

/* Filters (Bonus) */
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    button.classList.add("active");

    const filter = button.dataset.filter;

    images = [];
    document.querySelectorAll(".gallery-item").forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
        images.push(item.querySelector("img"));
      } else {
        item.style.display = "none";
      }
    });
  });
});
