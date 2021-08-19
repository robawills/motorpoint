import "owl.carousel";

const owl = () => {
  $(".owl-carousel").owlCarousel({
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    loop: true,
    stagePadding: 70,
    dots: false,
    navigation: false,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        stagePadding: 300,
      },
      1000: {
        items: 3,
        stagePadding: 100,
      },
      1500: {
        stagePadding: 200,
      },
      1800: {
        stagePadding: 200,
        items: 4,
      },
    },
  });
};

export default owl;
