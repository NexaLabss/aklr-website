
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
