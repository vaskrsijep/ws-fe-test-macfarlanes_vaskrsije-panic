function search() {
    var x = document.getElementById("searchContent");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
}

function showMenu() {
    var x = document.getElementById("menuList");
    var open = document.getElementById("menuIconOpen");
    var close = document.getElementById("menuIconClose");
    var bg = document.getElementById("bgDark");
    open.style.display = "none"
    x.style.display = "flex"
    close.style.display = "flex"
    bg.style.display = "block"

}
function closeMenu() {
  var x = document.getElementById("menuList");
  var open = document.getElementById("menuIconOpen");
  var close = document.getElementById("menuIconClose");
  var bg = document.getElementById("bgDark");
  x.style.display = "none"
  open.style.display = "flex"
  close.style.display = "none"
  bg.style.display = "none"
}

const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  infinite: false,
  Navigation: false,
});