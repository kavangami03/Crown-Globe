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

  // Counter Animation Logic
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const decimal = counter.getAttribute('data-decimal') || 0;
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      const nextCount = (count + inc).toFixed(decimal);
      counter.innerText = nextCount;
      setTimeout(() => animateCounter(counter), 1);
    } else {
      counter.innerText = target;
    }
  };

  const observerOptions = {
    threshold: 0.5,
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => counterObserver.observe(counter));
});


