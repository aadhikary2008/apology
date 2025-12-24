const messages = [
  {
    title: "Hey Shreya 💖",
    text: "I know this is a bit unexpected… but please take a moment to read this."
  },
  {
    title: "I'm Really Sorry 😔",
    text: "I messed up, and I truly regret hurting you. That was never my intention."
  },
  {
    title: "You Matter So Much 🌸",
    text: "Your smile, your care, and your presence mean the world to me."
  },
  {
    title: "No Excuses 🙏",
    text: "I take full responsibility for my actions and I promise to do better."
  },
  {
    title: "Please Forgive Me 💞",
    text: "If your heart allows it, I hope you can forgive me and give me another chance."
  },
  {
    title: "Always Yours ❤️",
    text: "No matter what, I care deeply about you, Always love you Shreya."
  }
];

let currentIndex = 0;

const titleEl = document.getElementById("title");
const messageEl = document.getElementById("message");
const card = document.getElementById("apologyCard");

function updateCard() {
  titleEl.textContent = messages[currentIndex].title;
  messageEl.textContent = messages[currentIndex].text;
}

card.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= messages.length) {
    currentIndex = 0;
  }
  updateCard();
});

// Initial load
updateCard();