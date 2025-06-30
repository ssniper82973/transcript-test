// Carousel functionality
const images = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function showImage(index) {
    const totalImages = images.children.length;
    currentIndex = (index + totalImages) % totalImages; // Wrap-around logic
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => showImage(currentIndex - 1));
nextButton.addEventListener('click', () => showImage(currentIndex + 1));

// Auto-slide every 5 seconds
setInterval(() => showImage(currentIndex + 1), 5000);

// Navbar hover animations
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.fontWeight = 'bold';
        link.style.textDecoration = 'underline';
    });

    link.addEventListener('mouseout', () => {
        link.style.fontWeight = 'normal';
        link.style.textDecoration = 'none';
    });
});

// Placeholder function to get a random article (for the "Random Page" feature)
function getRandomPage() {
    const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];  // List of wiki pages
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage; // Redirect to random page
}

// Dropdown functionality for the "Search Bar" and "Explore"
document.querySelector(".search-bar").addEventListener("input", function(e) {
    let searchQuery = e.target.value;
    console.log(`Searching for: ${searchQuery}`);
    // Implement actual search functionality here
});

// Example function to generate category list for articles
function getCategoriesForArticle(article) {
    // Sample categories for an article
    const categories = ['Characters', 'O5 Council', 'Bright Family', 'More Categories'];
    const maxCategories = 3;

    let categoryDisplay = categories.slice(0, maxCategories).join(', ') + (categories.length > maxCategories ? ' & ' + (categories.length - maxCategories) + ' more' : '');
    article.querySelector('.categories').innerText = 'In: ' + categoryDisplay;
}

// Example usage for an article
document.addEventListener("DOMContentLoaded", function() {
    const article = document.querySelector('.wiki-article');
    getCategoriesForArticle(article); // Update categories on page load
});

let currentIndex = 0;
const images = document.querySelectorAll('.infobox-image');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const imageContainer = document.querySelector('.image-container');

function updateImage() {
  const offset = -currentIndex * 100;  // Adjust this based on image size (100% of the container's width)
  imageContainer.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  updateImage();
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateImage();
});

const images = document.querySelectorAll('.infobox-image');
let currentIndex = 0;

function changeImage() {
    // Remove active class from all images
    images.forEach(img => img.classList.remove('active'));
    
    // Add active class to the current image
    images[currentIndex].classList.add('active');
}

// Show the first image initially
changeImage();

// Handle left arrow click (previous image)
document.querySelector('.arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    changeImage();
});

// Handle right arrow click (next image)
document.querySelector('.arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    changeImage();
});


