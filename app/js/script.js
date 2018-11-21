document.addEventListener('DOMContentLoaded', function() {
  svg4everybody();
  console.log('script.js');
});

$('[data-highlight-news]').slick({
  speed: 750,
  arrows: false,
  dots: true,
});
