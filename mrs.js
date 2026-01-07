function flowerBurst(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 25; i++) {
    const flower = document.createElement("img");
    flower.src = "assets/flower.png"; // pastikan path benar
    flower.className = "flower";

    const x = (Math.random() - 0.5) * 260 + "px";
    const y = (Math.random() - 0.5) * 260 + "px";

    flower.style.left = centerX + "px";
    flower.style.top = centerY + "px";
    flower.style.setProperty("--x", x);
    flower.style.setProperty("--y", y);

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 1500);
  }
}

document.querySelectorAll(".photo").forEach((photo) => {
  photo.addEventListener("click", function () {
    flowerBurst(this);
  });
});
