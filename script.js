document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector(".footer-inner p");

  if (footerText) {
    footerText.textContent = `© ${year} Ramzan`;
  }
});
