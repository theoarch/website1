// Simple animation idea: randomly float small stars
document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.createElement("div");
  starsContainer.style.position = "absolute";
  starsContainer.style.top = 0;
  starsContainer.style.left = 0;
  starsContainer.style.width = "100%";
  starsContainer.style.height = "100%";
  starsContainer.style.zIndex = "1";
  document.body.appendChild(starsContainer);

  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.opacity = Math.random();
    star.style.borderRadius = "50%";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    starsContainer.appendChild(star);
  }
});
