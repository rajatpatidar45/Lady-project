document.querySelector(".close-btn").addEventListener("click", () => {
  const cartDropdown = document.querySelector(".cart-dropdown");
  cartDropdown.style.display = "none";
});

const shareIcon = document.getElementById("share-icon");
const sharePopup = document.getElementById("share-popup");
const closeSharePopup = document.getElementById("close-share-popup");

// Show the share popup
shareIcon.addEventListener("click", () => {
  sharePopup.style.display = "block";
});

// Close the share popup
closeSharePopup.addEventListener("click", () => {
  sharePopup.style.display = "none";
});

// Close popup when clicking outside the content
window.addEventListener("click", (event) => {
  if (event.target === sharePopup) {
    sharePopup.style.display = "none";
  }
});

const chatButton = document.getElementById("chatButton");
const chatPopup = document.getElementById("chatPopup");
const chatIcon = document.getElementById("chatIcon");
const closeIcon = document.getElementById("closeIcon");

chatButton.addEventListener("click", () => {
  const isChatOpen = chatPopup.style.display === "flex";

  if (isChatOpen) {
    chatPopup.style.display = "none";
    chatButton.classList.remove("close-button");
    chatIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    chatPopup.style.display = "flex";
    chatButton.classList.add("close-button");
    chatIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
});

// Form submit functionality
document.getElementById("share-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Your wishlist has been shared!");
  sharePopup.style.display = "none";
});

function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnail.src; // Update the main image source with the thumbnail's source
}

// Open Search Bar
document.getElementById("searchIcon").addEventListener("click", function () {
  document.getElementById("searchBar").style.display = "flex";
});

// Close Search Bar
document
  .getElementById("closeSearchBar")
  .addEventListener("click", function () {
    document.getElementById("searchBar").style.display = "none";
  });

