function imgSlider(anything) {
  document.querySelector('.drink1').src = anything;
};

function changeCircleColor(color) {
  const circle = document.querySelector('.circle');
  circle.style.background = color;
};

function toggle() {
  var menuToggle = document.querySelector('.toggle');
  var navigator = document.querySelector('.navigator');
  menuToggle.classList.toggle('active');
  navigator.classList.toggle('active');
}