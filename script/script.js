let openBtn = document.getElementById('open');
let closeBtn = document.querySelector('.closebtn');
let closeBtns = document.querySelectorAll('.nav-button');

closeBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    document.getElementById("navigation").style.width = "0";
  });
});

openBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log('test');
  document.getElementById("navigation").style.width = "170px";
});

closeBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log('test');
  document.getElementById("navigation").style.width = "0";
});

