
const mintAddress = "CyLBbS7E89Tq4BqkfjYBhm1u71s6aM5W9CWZtavqHjCK";

async function copyMintAddress() {
  const message = document.getElementById("copyMessage");
  try {
    await navigator.clipboard.writeText(mintAddress);
    message.textContent = "Mint adresi kopyalandı.";
  } catch (error) {
    message.textContent = mintAddress;
  }
  window.setTimeout(() => {
    if (message.textContent === "Mint adresi kopyalandı.") message.textContent = "";
  }, 2500);
}

document.getElementById("copyMint")?.addEventListener("click", copyMintAddress);
document.getElementById("copyMintSecond")?.addEventListener("click", copyMintAddress);

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const translations = {
  en: {
    about: "About",
    tokenomics: "Tokenomics",
    roadmap: "Roadmap",
    security: "Security",
    buy: "Buy AKLR"
  },
  no: {
    about: "Om prosjektet",
    tokenomics: "Tokenøkonomi",
    roadmap: "Veikart",
    security: "Sikkerhet",
    buy: "Kjøp AKLR"
  },
  es: {
    about: "Acerca de",
    tokenomics: "Tokenomía",
    roadmap: "Hoja de ruta",
    security: "Seguridad",
    buy: "Comprar AKLR"
  },
  tr: {
    about: "Hakkında",
    tokenomics: "Tokenlar",
    roadmap: "Yol Haritası",
    security: "Güvenlik",
    buy: "AKLR Al"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang === "no" ? "nb" : lang;

  const navLinks = document.querySelectorAll("#nav > a");

  if (navLinks[0]) navLinks[0].textContent = t.about;
  if (navLinks[1]) navLinks[1].textContent = t.tokenomics;
  if (navLinks[2]) navLinks[2].textContent = t.roadmap;
  if (navLinks[3]) navLinks[3].textContent = t.security;

  const buyButton = document.querySelector(".header-cta");
  if (buyButton) buyButton.textContent = t.buy;

  localStorage.setItem("aklr-language", lang);
}

document.querySelectorAll(".language-switcher [data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(localStorage.getItem("aklr-language") || "en");
const heroBuy = document.getElementById("heroBuy");

if (heroBuy) {
  const buyTexts = {
    en: "Buy AKLR",
    no: "Kjøp AKLR",
    es: "Comprar AKLR",
    tr: "AKLR Al"
  };

  const updateHeroBuy = (lang) => {
    heroBuy.textContent = buyTexts[lang] || buyTexts.en;
  };

  document.querySelectorAll(".language-switcher [data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      updateHeroBuy(button.dataset.lang);
    });
  });

  updateHeroBuy(localStorage.getItem("aklr-language") || "en");
}
