
window.HomePage = {
  init: function() {
    $(document).ready(function() {
      $('.carousel').flickity({
        fullscreen: true,
        lazyLoad: 4,
        autoPlay: 3000,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      });
    })
  }
}

