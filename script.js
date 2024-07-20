let btn = document.querySelectorAll(".carButton");

btn[0].addEventListener("click", myFunction);
btn[1].addEventListener("contextmenu", myFunction);
btn[2].addEventListener("dblclick", myFunction);
btn[3].addEventListener("mousedown", myFunction);
btn[4].addEventListener("mouseenter", myFunction);
btn[5].addEventListener("mouseleave", myFunction);
btn[6].addEventListener("mousemove", myFunction);
btn[7].addEventListener("mouseout", myFunction);
btn[8].addEventListener("mouseover", myFunction);
btn[9].addEventListener("mouseup", myFunction);

// function myFunction() {
//   imagelove.style.backgroundImage = "url('/gif/runningCar.gif')";

// }
// function myFunction2() {
//   imagelove.style.backgroundImage = "url('/gif/rukaHuaCar.gif')";
// }
function myFunction() {
  let imagelove = document.querySelectorAll(".carRunning");
  console.log(imagelove);
  imagelove[0].classList.toggle("carRunning2");
  imagelove[1].classList.toggle("carRunning2");
  imagelove[2].classList.toggle("carRunning2");
  imagelove[3].classList.toggle("carRunning2");
  imagelove[4].classList.toggle("carRunning2");
  imagelove[5].classList.toggle("carRunning2");
  imagelove[6].classList.toggle("carRunning2");
  imagelove[7].classList.toggle("carRunning2");
  imagelove[8].classList.toggle("carRunning2");
  imagelove[9].classList.toggle("carRunning2");
}
// let alreadyTrue = imagelove.style.backgroundImage;
// let alreadyTrue =
// console.log(image);
// imageStyle = image.style.background;
// console.log(imageStyle);
// console.log(imagelove.style.backgroundImage == "url('/gif/rukaHuaCar.gif')");
// console.log(imagelove.style.backgroundImage == "url('/gif/runningCar.gif')");

//   // imagelove.style.backgroundImage = "url('/gif/runningCar.gif')";
//   let imagelove = document.querySelector("#myCarRunning");
// console.log(imagelove.style.backgroundImage === "url('/gif/rukaHuaCar.gif')");
// console.log(imagelove.style.backgroundImage === "url('/gif/runningCar.gif')");
//   console.log("hello");
//   // if (imagelove.style.backgroundImage == "url('/gif/rukaHuaCar.gif')") {
//   //   console.log("welcome");
//   //   imagelove.style.backgroundImage = "url('/gif/runningCar.gif')";
//   // } else if ((imagelove.style.backgroundImage = "url('/gif/runningCar.gif')")) {
//   //   imagelove.style.backgroundImage = "url('/gif/runningCar.gif')";
//   // } else {
//   //   imagelove.style.backgroundImage = "url('/gif/runningCar.gif')";
//   //   console.log("welcome again");
//   // }
//   // if (imagelove.style.backgroundImage === "url('/gif/rukaHuaCar.gif.gif')") {
//   //   imagelove.style.backgroundImage = "url('/gif/runningCar.gif')";
//   //   console.log("hello");
//   // } else if (imagelove.style.backgroundImage === "url('/gif/runningCar.gif')") {
//   //   imagelove.style.backgroundImage = "url('/gif/rukaHuaCar.gif.gif'";
//   // } else {
//   //   console.log("welcome");
//   // }

// image.style.backgroundImage == "url('/gif/runningCar.gif')";

// imagelove.style.backgroundImage = "url('/gif/runningCar.gif')";

// btn[1].addEventListener("click", myFunction());
// btn[2].addEventListener("click", myFunction());
