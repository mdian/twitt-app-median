"use strict";

var user = JSON.parse(localStorage.getItem("result"));
// console.log(localStorage.getItem("result"));
console.log(user);
console.log(user.email);

document.querySelector("textarea").addEventListener("focus", function () {
  document.querySelector(".box_control").classList.remove("d-none");
});
document.querySelector(".profile_name").innerHTML = user.displayName;
document.querySelector(".profile_emails").innerHTML = user.email;

let profile_img = document.querySelectorAll(".profile_img");
console.log(profile_img);
profile_img.forEach((element) => {
  console.log(element);
  element.setAttribute("src", user.photoURL);
});
