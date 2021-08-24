// import owl from "./modules/owl.js";
// import aos from "./modules/aos.js";


// document.addEventListener("DOMContentLoaded", () => {
//   //  Always init
//   owl();
//   aos();
  
// });

import $ from "jquery";
window.jQuery = $;

import owl from "./modules/owl.js";
$(() => {
  owl();
});

import aos from "./modules/aos.js";
$(() => {
  aos();
});

console.log("New version");