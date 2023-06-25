
document.getElementById("menu-btn").addEventListener("click", function() {
    const firstImage = document.querySelector("#menu-btn span:first-child img");
    const secondImage = document.querySelector("#menu-btn span:last-child img");
    const nav = document.getElementById('menu')

    firstImage.classList.toggle("hidden");
    secondImage.classList.toggle("hidden");
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
  });