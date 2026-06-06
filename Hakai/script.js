const games = [
  { name: "Snow Rider", path: "games/Snow Rider/index.html", img: "assets/images/snowrider.png" },
  { name: "Pixel Speedrun", path: "games/Pixel Speedrun/index.html", img: "assets/images/pixel.png" },
  { name: "Block Blast", path: "games/Block Blast/index.html", img: "assets/images/blockblast.png" },
  { name: "A Dance Of Fire And Ice", path: "games/ADOFAI/index.html", img: "assets/images/ADOFAI.png" },
  { name: "Amoung Us", path: "games/Among Us/index.html", img: "assets/images/among.png" },
  { name: "Angry Birds", path: "games/Angry Birds/index.html", img: "assets/images/abirds.png" },
  { name: "Aqua Park IO", path: "games/AquaIO/index.html", img: "assets/images/aquaio.png" },
  { name: "Bad Time Simulator", path: "games/Bad Time Sim/index.html", img: "assets/images/sans.png" },
  { name: "Basketball Bros", path: "games/basketbros/index.html", img: "assets/images/basket.png" },
  { name: "BitLife", path: "games/BitLife/index.html", img: "assets/images/bitlife.png" },
  { name: "Brotato", path: "games/Brotato/index.html", img: "assets/images/brotatochip.png" },
  { name: "Minecraft", path: "games/Minecraft/index.html", img: "assets/images/Minecraft.png" },
  { name: "Friday Night Funkin", path: "games/Friday Night Funkin/index.html", img: "assets/images/FNF.png" },
  { name: "Cookie Clicker", path: "games/Cookie Clicker/index.html", img: "assets/images/cookiegoated.png" }
];

const grid = document.getElementById("gameGrid");

// Shuffle games
games.sort(() => Math.random() - 0.5);

function displayGames(list) {
  grid.innerHTML = "";

  list.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}">
      <p>${game.name}</p>
    `;

    card.addEventListener("click", () => {
      window.location.href = `game.html?src=${game.path}`;
    });

    grid.appendChild(card);
  });
}

displayGames(games);

// Search
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = games.filter(game =>
    game.name.toLowerCase().includes(value)
  );

  displayGames(filtered);
});