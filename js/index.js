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

  // Progress Bar Animation Logic
  const progressBars = document.querySelectorAll('.progress-bar-fill');

  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach((bar) => progressObserver.observe(bar));

  // Mobile Custom Menu Accordion Logic
  jQuery('.cg-custom-menu > ul > li.has-mega > a').click(function(e) {
    if (window.innerWidth <= 1299) {
      e.preventDefault();
      const parentLi = jQuery(this).parent();
      if (parentLi.hasClass('active')) {
        parentLi.removeClass('active');
        parentLi.find('.mega-menu').slideUp();
      } else {
        jQuery('.cg-custom-menu > ul > li.has-mega').removeClass('active');
        jQuery('.cg-custom-menu .mega-menu').slideUp();
        
        parentLi.addClass('active');
        parentLi.find('.mega-menu').slideDown();
      }
    }
  });

  // Mobile Inner Menu Accordion Logic
  jQuery('.cg-custom-menu .has-inner-mega > a.mega-heading').click(function(e) {
    if (window.innerWidth <= 1299) {
      e.preventDefault();
      const parentCol = jQuery(this).parent();
      if (parentCol.hasClass('active-inner')) {
        parentCol.removeClass('active-inner');
        parentCol.find('.inner-menu').slideUp();
      } else {
        parentCol.addClass('active-inner');
        parentCol.find('.inner-menu').slideDown();
      }
    }
  });
});



