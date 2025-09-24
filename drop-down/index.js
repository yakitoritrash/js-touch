const button = document.getElementById("drop");
const content = document.getElementById("sub-button");
button.addEventListener('click', () => {
  content.classList.toggle('show');
});

