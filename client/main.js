const sideBar = document.querySelector("[data-sideBar]");
const closeSideBar = document.querySelector("[data-closeSideBar]");
const openSideBar = document.querySelector("[data-openSideBar]");
const decrementBtn = document.querySelector("[data-decrementBtn]");
const quantity = document.querySelector("[data-quantity]");
const incrementBtn = document.querySelector("[data-incrementBtn]");

let actualValue = +quantity.innerText;
let price = document.querySelector("[data-price]");
let discount = document.querySelector("[data-discount]");

// Cart Update
const cartQuantity = document.querySelector("[data-cartQuantity]");
const cartPrice = document.querySelector("[data-cartPrice]");

// Constant Updating of cart
const selectProduct = document.querySelector("[data-selectProduct]");
const noSelection = document.querySelector("[data-noSelection]");

// This block of code contain an event listener that shows the sideBar on a mobile screen
openSideBar.addEventListener("click", (event) => {
  event.preventDefault();
  sideBar.classList.remove("d-none");
});

// This block of code contain an event listener that hides the sideBar on a mobile screen
closeSideBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (sideBar.classList.contains("d-block")) {
    sideBar.classList.remove("d-block");
  }
  sideBar.classList.add("d-none");
});

// This block of code contain an event listener that decreases the amount of product users want
decrementBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (actualValue === 0) {
    actualValue = 0;
  } else {
    actualValue -= 1;
  }
  priceCalculator();
  quantity.innerText = actualValue;
  cartQuantity.innerText = quantity.innerText;
  return;
});

// This block of code contain an event listener that increases the amount of product users want
incrementBtn.addEventListener("click", (event) => {
  event.preventDefault();
  actualValue += 1;
  priceCalculator();
  quantity.innerText = actualValue;
  cartQuantity.innerText = quantity.innerText;
  return;
});

const addToCart = document.querySelector("[data-addToCart]");
totalItems = document.querySelector("[data-totalItems]");
addToCart.addEventListener("click", (event) => {
  event.preventDefault();
  totalItems.innerText = actualValue;
});
// This a function that calculate the price of the product related to the quantity selected by users
const priceCalculator = () => {
  if (actualValue === 0) {
    price.innerText = "$125.00";
    discount.innerText = "$250.00";
  } else {
    price.innerText = `$${actualValue * 125}.00`;
    discount.innerText = `$${actualValue * 250}.00`;
    cartPrice.innerText = price.innerText;
  }
  updateCart();
};
const updateCart = () => {
  if (actualValue > 0) {
    selectProduct.classList.remove("d-none");
    noSelection.classList.add("d-none");
  } else {
    selectProduct.classList.add("d-none");
    noSelection.classList.remove("d-none");
  }
};
// Reset Cart
const resetCart = document.querySelector("[data-resetCart]");
resetCart.addEventListener("click", (event) => {
  event.preventDefault();
  actualValue = 0;
  selectProduct.classList.add("d-none");
  noSelection.classList.remove("d-none");
  quantity.innerText = actualValue;
  totalItems.innerText = "0";
  price.innerText = "$125.00";
  discount.innerText = "$250.00";
});

// Make cart visible
basket = document.querySelector("[data-basket]");
const cart = document.querySelector("[data-cart]");
cart.addEventListener("click", (event) => {
  event.preventDefault();
  if (basket.classList.contains("d-none")) {
    basket.classList.remove("d-none");
  } else {
    basket.classList.add("d-none");
  }
});
// This is my photo gallery section.
const imageThumbnail = document.querySelectorAll("[data-imageThumbnail]");
const banner = document.querySelector("[data-banner]");
const bannerGallery = [
  { src: "./images/image-product-1.jpg" },
  { src: "./images/image-product-2.jpg" },
  { src: "./images/image-product-3.jpg" },
  { src: "./images/image-product-4.jpg" },
];

// This function makes my image ready before the user request for it
const preloadImages = (images) => {
  images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });
};
preloadImages(bannerGallery);
imageThumbnail.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (event) => {
    let image = index + 1;
    banner.src = `${bannerGallery[index].src}`;
    banner.alt = `image product ${image}`;
  });
});
