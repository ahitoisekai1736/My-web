let box = document.getElementById('form');
let btn1 = document.getElementById('btn1');
let button = document.getElementById('btn2');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');

text2.style.display = "none";

function changePosition() {
  const maxWidth = window.innerWidth - 300;
  const maxHeight = window.innerHeight - 300;
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * maxHeight);
  if (x < 0) {
    button.style.left = `0px`;
  } else if (x > maxWidth) {
    button.style.left = `${maxWidth}px`;
  } else {
    button.style.left = `${x}px`;
  }
  if (y < 0) {
    button.style.top = `0px`;
  } else if (y > maxHeight) {
    button.style.top = `${maxHeight}px`;
  } else {
    button.style.top = `${y}px`;
  }
  button.style.position = 'absolute';
}

let count = 0;

button.addEventListener('click', () => {
  count++;
  switch (count) {
    case 1:
      text.innerHTML = "Are you sure?";
      break;
    case 2:
      text.innerHTML = "Really?";
      break;
    case 3:
      text.innerHTML = "Think again!";
      break;
    case 4:
      text.innerHTML = "Last chance!";
      break;
    default:
      text.innerHTML = "You can't escape love!";
      button.style.display = "none";
  }
  changePosition();
  btn1.style.left = 150+"px";
});

btn1.addEventListener('click', () => {
  btn1.style.left = `${150}px`;
  button.style.display = "none";
  text.style.display = "none";
  text2.style.display = "block";
  text2.style.opacity = "1";
  text2.style.animation = "fadeIn 2s";
});

let style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
