let openBtn = document.getElementById('open');
let closeBtn = document.querySelector('.closebtn');
let closeBtns = document.querySelectorAll('.nav-button');

// for (let i = 0; i < closeBtns.length; i++) {
//   let button = closeBtns[i];
//   button.addEventListener('click', event => {
//     event.preventDefault();
//     document.getElementById("navigation").style.width = "0";
//   })
// }

closeBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    document.getElementById("navigation").style.width = "0";
  });
});

openBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log('test');
  document.getElementById("navigation").style.width = "180px";
});

closeBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log('test');
  document.getElementById("navigation").style.width = "0";
});

