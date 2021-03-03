const menu = document.getElementById("menu")
const menuButton = document.getElementById("menu-button")

menuButton.addEventListener("click", () =>{
   menu.classList.toggle("menu--active")
   menuButton.firstElementChild.classList.toggle("top-bar__icon--active")
   document.body.classList.toggle("no-scroll")
})