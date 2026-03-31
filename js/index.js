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
});
