// Array to store image sources
const images = [
  "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805472?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
  "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805473?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
  "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134805474?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
];

let currentImageIndex = 0;

// Function to update the main image
function updateMainImage() {
  const mainImage = document.getElementById('slider-image');
  mainImage.src = images[currentImageIndex];
}

// Function for next image
function nextImg() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateMainImage();
}

// Function for previous image
function prevImg() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateMainImage();
}

// Function to set the main image by clicking thumbnails
function setImage(thumbnail) {
  const src = thumbnail.src;
  document.getElementById('slider-image').src = src;
  currentImageIndex = images.indexOf(src);
}

// Initialize the slider
updateMainImage();
