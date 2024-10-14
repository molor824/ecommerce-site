const ALBUMS = [
  {
    title: "Album 1",
    img: "https://battugs-01.github.io/ECOMMERCE_JS_BEGINNERS/images/Album%201.png",
    price: 12.99,
  },
  {
    title: "Album 2",
    img: "https://battugs-01.github.io/ECOMMERCE_JS_BEGINNERS/images/Album%202.png",
    price: 14.99,
  },
  {
    title: "Album 3",
    img: "https://battugs-01.github.io/ECOMMERCE_JS_BEGINNERS/images/Album%203.png",
    price: 9.99,
  },
  {
    title: "Album 4",
    img: "https://battugs-01.github.io/ECOMMERCE_JS_BEGINNERS/images/Album%204.png",
    price: 19.99,
  },
];
const MERCH = [
  {
    title: "T-Shirt",
    img: "https://battugs-01.github.io/ECOMMERCE_JS_BEGINNERS/images/Shirt.png",
    price: 19.99,
  },
  {
    title: "Coffee Cup",
    img: "https://battugs-01.github.io/ECOMMERCE_JS_BEGINNERS/images/Cofee.png",
    price: 6.99,
  },
];

const domParser = new DOMParser();

const albumContainer = document.getElementById("album-container");
const merchContainer = document.getElementById("merch-container");
const cartContainer = document.getElementById("cart-container");

function renderCartContainer() {
  cartContainer.innerHTML = ``;
}

function onAddToCart(item) {
  if (item.quantity > 0) {
    item.quantity = 0;
    this.innerText = "Add To Cart";
  } else {
    item.quantity = 1;
    this.innerText = "Remove From Cart";
  }
}

function createItemElement(item) {
  let { title, img, price } = item;
  let element = document.createElement("div");
  element.className = `flex flex-col items-center p-6 gap-6`;
  element.innerHTML = `
  <h2 class="font-bold text-3xl">${title}</h2>
  <img
    class="w-[16rem] aspect-square"
    src="${img}"
  />
  <div class="flex items-center justify-between min-w-[16rem]">
    <span>$${price}</span>
    <button class="rounded-md bg-button hover:bg-button-hover text-white p-2 add-to-cart">Add To Cart</button>
  </div>`;
  element.querySelector(".add-to-cart").addEventListener("click", function () {
    onAddToCart.call(this, item);
  });

  return element;
}

albumContainer.append(...ALBUMS.map(createItemElement));
merchContainer.append(...MERCH.map(createItemElement));
