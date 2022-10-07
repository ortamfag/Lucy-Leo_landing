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
makeModal('#wholesale')
makeModal('#manufacture')


// const first = document.querySelector('#first')
// const second = document.querySelector('#second')
// const third = document.querySelector('#third')
// const fourth = document.querySelector('#fourth')



// first.addEventListener('transitionstart', () => text.innerHTML="Retail chain in Tallinn, Estonia")
// second.addEventListener('transitionstart', () => text.innerHTML="Retail chain in Kaunas, Lithuania")
// third.addEventListener('transitionstart', () => text.innerHTML="Lucy&Leo at Spielwarenmesse Toy Fair 2020, Germany")
// fourth.addEventListener('transitionstart', () => text.innerHTML="Lucy&Leo at China Toy Expo Toy Fair 2019, Shanghai")



const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 2,
	spaceBetween: 50,
  speed: 500,
  autoplay: {
    enabled: true,
    delay: 3000,
  },
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

  breakpoints: {
    830: {
      slidesPerView: 2
    },

    320: {
      slidesPerView: 1
    }

    
  }
})

const fixed = document.querySelector('#fixed')

function opacity() {

  //1200
  if(innerWidth >= 1200 && window.pageYOffset > 500) {
    fixed.classList.add('active-f')
  }

  if(innerWidth >= 1200 && window.pageYOffset > 6500) {
    fixed.classList.remove('active-f')
  }

  if(innerWidth >= 1200 && window.pageYOffset <= 500) {
    fixed.classList.remove('active-f')
  }

  //550
  if(innerWidth >= 550 && innerWidth < 880 && innerWidth < 1200 && window.pageYOffset > 500) {
    fixed.classList.add('active-f')
  }
  if(innerWidth >= 550 && innerWidth < 880 && innerWidth < 1200 && window.pageYOffset > 11000) {
    fixed.classList.remove('active-f')
  }

  if(innerWidth >= 550 && innerWidth < 880 && innerWidth < 1200 && window.pageYOffset <= 500) {
    fixed.classList.remove('active-f')
  }

  //880
  if(innerWidth >= 880 && innerWidth < 1200 && window.pageYOffset > 500) {
    fixed.classList.add('active-f')
  }
  if(innerWidth >= 880 && innerWidth < 1200 && window.pageYOffset > 7000) {
    fixed.classList.remove('active-f')
  }

  if(innerWidth >= 880 && innerWidth < 1200 && window.pageYOffset <= 500) {
    fixed.classList.remove('active-f')
  }
  

  //320
  if(innerWidth >= 320 && innerWidth < 500 && window.pageYOffset > 500) {
    fixed.classList.add('active-f')
  }

  if(innerWidth >= 320 && innerWidth < 500 && window.pageYOffset > 16000) {
    fixed.classList.remove('active-f')
  }

  if(innerWidth >= 320 && innerWidth < 500 && window.pageYOffset <= 500) {
    fixed.classList.remove('active-f')
  }

}

window.onscroll=opacity
opacity()


const buttonForm = document.querySelector('#button-form')
const check = document.querySelector('#successful')
const uncheck = document.querySelector('#unsuccessful')

buttonForm.addEventListener('click', () => uncheck.classList.add('notview'))
buttonForm.addEventListener('click', () => uncheck.classList.remove('view'))
buttonForm.addEventListener('click', () => check.classList.remove('notview'))
buttonForm.addEventListener('click', () => check.classList.add('view'))