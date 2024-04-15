function open() {
  const menu = document.querySelector(".Hlink");
  menu.style.display = "block";
}

function fadein() {
  const about = document.querySelector(".about");
  about.style.opacity = "1";
}

function toggle() {
  const toggle = document.querySelector(".dark");
  toggle.style.background = "black";
  toggle.style.fill = "white";
}

function dark() {
  const logo = document.querySelector(".logo");
  const Peripheral = document.querySelector(".peri");
  const canvas = document.querySelector(".canvas");
  const contact = document.querySelector(".cont");

  logo.style.display = "none";
  Peripheral.style.display = "block";

  canvas.style.background = "black";
  canvas.style.color = "white";

  contact.style.color = "white";
}

function light() {
  const logo = document.querySelector(".logo");
  const Peripheral = document.querySelector(".peri");
  const canvas = document.querySelector(".canvas");
  const contact = document.querySelector(".cont");

  logo.style.display = "block";
  Peripheral.style.display = "none";

  canvas.style.background = "white";
  canvas.style.color = "black";

  contact.style.color = "black";
}
