let name = "Inomjon";
let age = 13;
let boo = true;

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");
const testBtn = document.querySelector("#testBtn");

console.log(navLinks);

function sayHello() {
  let message = "Hello " + name;
  console.log(message);
}

sayHello();

function simpleMath(a, b) {
  let result = a + b;
  console.log(result);
  return result;
}

let sum = simpleMath(121, 223);
console.log(sum);

window.addEventListener("scroll", function () {
	checkScroll()

  console.log(scrollPos);
});

document.addEventListener("DOMContentLoaded", function () {
	checkScroll()
});

function checkScroll() {
	let scrollPos = window.scrollY;
  if (scrollPos > 0) {
    header.classList.add("hira");
  } else {
    header.classList.remove("hira");
  }
}
checkScroll()

testBtn.addEventListener("click", function () {
  console.log("clicked");
});

for (let navItem of navLinks) {
  navItem.addEventListener("click", function () {
    console.log(navItem.text);
  });
}
