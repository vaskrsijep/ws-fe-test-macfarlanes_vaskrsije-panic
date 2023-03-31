function search() {
  var x = document.getElementById("search_content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function media_width(x){
  if (x.matches) {
    document.getElementsByClassName("row").style.flexDirection = "column";
    document.getElementsByClassName("nav-bar").style.flexDirection = "column";
  } else {
    document.getElementsByClassName("row").style.flexDirection = "row";
  }
}
var x = window.matchMedia("(max-width: 400px)")
media_width(x) // Call listener function at run time
x.addListener(media_width) // Attach listener function on state changes

Fancybox.bind("[data-fancybox]", {
    loop: true,
    buttons: [
      "zoom",
      "slideShow",
      "fullScreen",
      "thumbs",
      "close"
    ],
    animationEffect: "fade",
    transitionEffect: "slide",
    transitionDuration: 600
});


// new Glide('.glide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 3,
//     focusAt: 'center',
//     gap: 30,
//     autoplay: 3000,
//     hoverpause: true,
//     animationDuration: 1000,
//     animationTimingFunc: 'ease-out',
//     peek: {
//       before: 50,
//       after: 50
//     },
//     breakpoints: {
//       768: {
//         perView: 1
//       }
//     },
//     // Konfiguracija za bullets
//     nav: '.glide__bullets'
//   }).mount()
