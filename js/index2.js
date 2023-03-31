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
    var c = document.getElementById("close");
    var o = document.getElementById("open");
    if (x.style.display === "none") {
      x.style.display = "flex";
      o.style.visibility = "hidden";
    } else {
      x.style.display = "none";
    }
}
// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  infinite: false,
  Navigation: false,
});