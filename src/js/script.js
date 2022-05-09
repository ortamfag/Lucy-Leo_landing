document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 3000,
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
      duration: 22000,
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
makeModal('#first')
makeModal('#second')


const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')



first.addEventListener('transitionstart', () => text.innerHTML="Retail chain in Tallinn, Estonia")
second.addEventListener('transitionstart', () => text.innerHTML="Retail chain in Kaunas, Lithuania")
third.addEventListener('transitionstart', () => text.innerHTML="Lucy&Leo at Spielwarenmesse Toy Fair 2020, Germany")
fourth.addEventListener('transitionstart', () => text.innerHTML="Lucy&Leo at China Toy Expo Toy Fair 2019, Shanghai")



const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 2,
	spaceBetween: 50,
	centeredSlides: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
