
function tampilPesan() {
  const pesan = document.getElementById("pesanSpesial");
  pesan.innerText = "🎊 Jangan lupa terus bersyukur, karena kamu adalah orang yang luar biasa dan dicintai banyak orang. Happy Birthday, Abay! 🎊";
  confetti();
}

// Efek konfeti sederhana pakai emoji
function confetti() {
  const jumlah = 60;
  for (let i = 0; i < jumlah; i++) {
    const emoji = document.createElement("div");
    emoji.innerText = "🎉";
    emoji.style.position = "absolute";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = "-50px";
    emoji.style.fontSize = "30px";
    emoji.style.animation = "turun 3s ease-out forwards";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
  }
}

document.head.insertAdjacentHTML("beforeend", `
  <style>
    @keyframes turun {
      to {
        transform: translateY(${window.innerHeight}px) rotate(360deg);
        opacity: 0;
      }
    }
  </style>
`);
