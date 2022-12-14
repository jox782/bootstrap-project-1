let x = function () {
  console.log(parseInt(Math.random() * 48));
};

let b = document.querySelector("body");
b.onclick = x;
