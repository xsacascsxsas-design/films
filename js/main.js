const movies = [
  {
    title: "The Hateful Eight",
    director: "Quentin Tarantino",
    rating: 7.8,
    cast: [
      "Samuel L. Jackson",
      "Kurt Russell",
      "Jennifer Jason Leigh",
      "Walton Goggins",
      "Tim Roth"
    ],
    desc: "ثمانية غرباء يعلقون في نزل بسبب عاصفة ثلجية، لتبدأ لعبة أسرار وخيانات.",
    img: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Superman",
    director: "Richard Donner",
    rating: 8.1,
    cast: [
      "Clark Kent",
      "Christopher Reeve",
      "Lois Lane"
    ],
    desc: "يحكي الفيلم بداية رحلة كالك إل من كوكب كريبتون حتى وصوله للأرض واكتشافه لقواه، وكيف يقرر استخدامها لحماية البشر وسط ظهور شرير عبقري يهدد العالم.",
    img: "https://upload.wikimedia.org/wikipedia/ar/7/72/Superman.jpg"
  },
    {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    rating: 9.0,
    cast: [
      "Heath Ledger",
      "Christopher Reeve",
      "Christian Bale"
    ],
    desc: "باتمان يواجه أشرارًا خطيرين يهددون مدينته، في صراع بين القانون والفوضى.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/The_Dark_Knight_%282008_film%29.jpg/250px-The_Dark_Knight_%282008_film%29.jpg"
  },
      {
    title: "Black Panther",
    director: "Ryan Coogler",
    rating: 7.3,
    cast: [
      "Chadwick Boseman",
      "Jordan",
      "Lupita"
    ],
    desc: "ملك جديد في دولة متقدمة تكنولوجياً يكتشف مسؤولياته كبطل ويحمي شعبه من تهديد خارجي وداخلي.",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg"
  },
    {
    title: "Avengers Endgame",
    director: "Anthony Russo",
    rating: 8.4,
    cast: [
      "Robert Downey Jr",
      "Chris Evans",
      "Scarlett Johansson"
    ],
    desc: "مجموعة من الأبطال تتحد لمواجهة تهديد كوني بعد أحداث كارثية تؤثر على العالم.",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
  }
];

const container = document.getElementById("movies");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDirector = document.getElementById("modal-director");
const modalRating = document.getElementById("modal-rating");
const modalCast = document.getElementById("modal-cast");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close");
const search = document.getElementById("search");

function render(list) {
  container.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${movie.img}">
      <h3>${movie.title}</h3>
      <div class="info">🎬 ${movie.director}</div>
      <div class="info">🎭 ${movie.cast.slice(0,2).join("، ")}...</div>
      <div class="rating">⭐ ${movie.rating}</div>
    `;

    card.onclick = () => {
      modalTitle.textContent = movie.title;
      modalDirector.textContent = "🎬 المخرج: " + movie.director;
      modalRating.textContent = "⭐ التقييم: " + movie.rating;

      modalCast.innerHTML = "";
      movie.cast.forEach(actor => {
        const li = document.createElement("li");
        li.textContent = actor;
        modalCast.appendChild(li);
      });

      modalDesc.textContent = movie.desc;
      modal.style.display = "block";
    };

    container.appendChild(card);
  });
}

search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  render(movies.filter(m => m.title.toLowerCase().includes(value)));
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => e.target === modal && (modal.style.display = "none");

render(movies);
