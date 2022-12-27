import e from "cors";
import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click", function (e) {
//   alert("Bana tıkladın!");
// });
// Kodlar buraya gelecek!

// let ustKısım = document.querySelector(".nav");
// ustKısım.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "red";
//   event.target.style.borderRadius = "5px";
// });
// ustKısım.addEventListener("mouseleave", (event) => {
//   event.target.style.backgroundColor = "white";
// });
let navu = document.querySelectorAll(".nav-link");
for (let i = 0; i < navu.length; i++) {
  navu[i].addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.borderRadius = "5px";
    e.target.style.color = "white";
    e.target.style.padding = "5px 0px";
  });
}
for (let i = 0; i < navu.length; i++) {
  navu[i].addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.style.padding = "0px";
  });
}
let foto = document.querySelectorAll("p");
for (let i = 0; i < foto.length; i++) {
  foto[i].addEventListener("wheel", (x) => {
    x.target.style.fontSize = "25px";
  });
}
let images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("click", (ex) => {
    img.style.filter = "grayscale(100%)";
  });
});
images.forEach((img) => {
  img.addEventListener("dblclick", (ex) => {
    img.style.filter = "grayscale(0%)";
  });
});
let body = document.querySelector("body");
body.addEventListener("keydown", (xc) => {
  if (xc.key === "i") {
    alert("Türkçe harf kullanmayın!!!");
  }
});

let basvuru = document.querySelector(".basvuru input");
basvuru.addEventListener("focus", (xd) => {
  xd.target.style.backgroundColor = "blue";
  xd.target.style.color = "white";
});
