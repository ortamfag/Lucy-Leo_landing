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


// modals 
const makeModal = modalSel => {
	const modalEl = document.querySelector(modalSel + 'Popup');
		btnEl = document.querySelector(modalSel + '__preview'),
		closeEl = document.querySelector(modalSel + 'Cross')
		closeBody = document.querySelector('.popup')
		bg = document.querySelector(modalSel + 'Bg')
		

	btnEl.addEventListener('click', () => modalEl.classList.add('open'));
	closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
	bg.addEventListener('click', () => modalEl.classList.remove('open'));
}

makeModal('#contact')