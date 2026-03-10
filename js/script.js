const star = document.getElementById('theStar');

function getRandomColor() {
  const colors = ['#ff4500', '#00ff00', '#00ced1', '#ff00ff', '#ffffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

star.addEventListener('click', function() {

  const newColor = getRandomColor();
  this.style.backgroundColor = newColor;
  
});