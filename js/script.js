$(document).ready(function () {
  // Get the current year for the copyright
  $("#year").text(new Date().getFullYear());

  // Init Scrollspy
  $("body").scrollspy({
    target: "#main-nav"
  });

  // Smooth Scrolling
  $(".scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Carousel Interval
  $('.carousel').carousel({
    interval: 3000
  })

  // About sections
  $(".port-item").click(function () {
    $(".collapse").collapse("hide");
  });
});