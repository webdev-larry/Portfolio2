var toggleBtn =document.querySelector(".toggle-btn")
var toggleBtnIcon =document.querySelector(".toggle-btn i")
var dropDownMenu =document.querySelector(".dropdown-link")

toggleBtn.onclick=function () {
dropDownMenu.classList.toggle('open')
var isOpen = dropDownMenu.classList.contains('open')
toggleBtnIcon.classList = isOpen
? "fa-solid fa-bars"
:  "fa-solid fa-xmark"

}
//make it visible and dissappear
function toggle() {
    var drop = document.getElementById("dropdown");
    if (drop.style.display === "none") {
      drop.style.display = "block";
    } else {
      drop.style.display = "none";
    }
  }

