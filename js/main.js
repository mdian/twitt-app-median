"use strict";




document.querySelector("textarea").addEventListener("focus", function () {
  document.querySelector(".box_control").classList.remove("d-none");
});
