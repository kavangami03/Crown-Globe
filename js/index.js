jQuery(document).ready(function () {
  const cards = jQuery(".our-service-card").slice(6).hide();

  jQuery(".view-all-btn a").click(function (e) {
    e.preventDefault();
    const isExpand = jQuery(this).text().trim() === "View All";

    // Instant toggle with no animation
    cards.toggle();
    jQuery(this).text(isExpand ? "View Less" : "View All");

    // Instant scroll instead of animation for consistency
    if (!isExpand) {
      window.scrollTo({
        top: jQuery(".our-services").offset().top - 50,
        behavior: "instant"
      });
    }
  });

  // Hero Slider Initialization
  const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    speed: 800,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

