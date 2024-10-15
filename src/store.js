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

function loadLocalStorage(item) {
  let quantityStr = localStorage.getItem(item.title);
  if (quantityStr) {
    item.quantity = parseInt(quantityStr);
  }
}

ALBUMS.forEach(loadLocalStorage);
MERCH.forEach(loadLocalStorage);

const albumContainer = document.getElementById("album-container");
const merchContainer = document.getElementById("merch-container");
const cartContainer = document.getElementById("cart-container");
const totalCostElement = document.getElementById("total-cost");

function updateTotalCost() {
  let cost = 0;
  ALBUMS.forEach(({ price, quantity }) => {
    cost += price * (quantity ?? 0);
  });
  MERCH.forEach(({ price, quantity }) => {
    cost += price * (quantity ?? 0);
  });
  totalCostElement.innerText = `$${Math.round(cost * 100) / 100}`;
}
function renderCartContainer() {
  const lineElement = document.createElement("div");
  lineElement.className = `h-[1px] bg-black`;
  const quantityElement = (item) => {
    const element = document.createElement("div");
    element.className = `flex gap-4 items-center justify-end`;
    element.innerHTML = `
          <input
            type="number"
            value="${item.quantity}"
            class="w-[3rem] p-1 border-button border-[1px] bg-gray-100 rounded-lg quantity"
          />
          <button
            class="bg-red-500 p-2 rounded-lg hover:bg-red-600 text-white font-bold remove"
          >
            Remove
          </button>`;
    element.querySelector(".quantity").addEventListener("input", function () {
      let value = parseInt(this.value);
      if (isNaN(value) || value < 1) {
        value = 1;
        this.value = "1";
      }
      localStorage.setItem(item.title, `${value}`);
      item.quantity = value;
      updateTotalCost();
    });
    element.querySelector(".remove").addEventListener("click", function () {
      localStorage.removeItem(item.title);
      item.quantity = 0;
      renderCartContainer();
    });
    return element;
  };
  const itemElement = (item) => {
    const element = document.createElement("div");
    element.className = `flex flex-wrap gap-4 items-center`;
    element.innerHTML = `
          <img
            class="w-[4rem] sm:w-[6rem] aspect-square"
            src="${item.img}"
          />
          <div>
          <p class="font-bold">${item.title}</p>
          <p>$${item.price}</p>
          </div>`;
    return element;
  };
  const insertItem = (item) => {
    if (item.quantity > 0) {
      cartContainer.append(
        itemElement(item),
        quantityElement(item),
        lineElement,
        lineElement
      );
    }
  };

  cartContainer.innerHTML = ``;
  ALBUMS.forEach(insertItem);
  MERCH.forEach(insertItem);

  updateTotalCost();
}

function onAddToCart(item) {
  if (item.quantity > 0) {
    item.quantity = 0;
    this.innerText = "Add To Cart";
    localStorage.removeItem(item.title);
  } else {
    item.quantity = 1;
    this.innerText = "Remove From Cart";
    localStorage.setItem(item.title, "1");
  }
  renderCartContainer();
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

renderCartContainer();
