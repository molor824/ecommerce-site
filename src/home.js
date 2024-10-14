const TOURS = [
  {
    month: "JUL",
    day: 16,
    location: "DETROIT, MI",
    theatre: "DTE ENERGY MUSIC THEATRE",
  },
  {
    month: "JUL",
    day: 19,
    location: "TORONTO, ON",
    theatre: "BUDWEISER STAGE",
  },
  {
    month: "JUL",
    day: 22,
    location: "BRISTOW, VA",
    theatre: "JIGGY LUBE LIVE",
  },
  {
    month: "JUL",
    day: 29,
    location: "PHOENIX, AZ",
    theatre: "AK-CHIN PAVILION",
  },
  {
    month: "AUG",
    day: 2,
    location: "LAS VEGAS, NV",
    theatre: "T-MOBILE ARENA",
  },
  {
    month: "AUG",
    day: 7,
    location: "CONCORD, CA",
    theatre: "CONCORD PAVILION",
  },
];

const toursContainer = document.getElementById("tours-container");
const playButton = document.getElementById("play-button");
const playVideo = document.getElementById("play-video");

toursContainer.innerHTML = TOURS.map(
  ({ month, day, location, theatre }) =>
    `<div class="w-full bg-white p-4 grid grid-cols-[1fr_3fr_4fr_2fr] items-center gap-4">
  <span class="font-bold text-black text-opacity-70"
    >${month}<sub>${day}</sub></span
  >
  <span class="font-light text-sm sm:text-base">${location}</span>
  <span class="font-light text-sm sm:text-base">${theatre}</span>
  <button class="bg-button hover:bg-button-hover text-white font-bold text-sm p-3 rounded-lg">
    BUY TICKETS
  </button>
</div>`
).join("");

playButton.addEventListener("click", () => {
  playVideo.classList.remove("hidden");
});
