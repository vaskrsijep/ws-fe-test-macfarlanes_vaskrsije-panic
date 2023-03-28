

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


new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    gap: 30,
    autoplay: 3000,
    hoverpause: true,
    animationDuration: 1000,
    animationTimingFunc: 'ease-out',
    peek: {
      before: 50,
      after: 50
    },
    breakpoints: {
      768: {
        perView: 1
      }
    },
    // Konfiguracija za bullets
    nav: '.glide__bullets'
  }).mount()