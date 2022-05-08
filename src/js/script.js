document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 5000,
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider2', {
      loop: true,
      autoplay: true,
      interval: 5000,
    });
  });

  $(function() {
    $('.marquee').marquee({
      duration: 11000,
      startVisible: true,
      duplicated: true,
      direction: 'right'
    });
  });