import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
	distance: '30px',
	duration: 2800,
	// reset: true,
});

function scrollRevealFunc () {
	ScrollReveal().reveal( {
		delay: 1300,
		distance: '0px',
		opacity: 0,
	});

	ScrollReveal().reveal(``,  {
		delay: 900,
		distance: '0px',
		opacity: 0,
	});

	ScrollReveal().reveal(`.about__title, .about__desc `, {
		origin: 'top',
	});
	
	ScrollReveal().reveal(`.header__row, .title-2`, {
		delay: 150,
		origin: 'top',
	});

	ScrollReveal().reveal(` .about__consult, .benefits__wrapper, .logo-square, .title-3, .feedbacks__swiper, .howtobuy__list, .howtobuy__payment, .cta__left-side`, {
		origin: 'left',
	});

	ScrollReveal().reveal( ` `,
		{
			origin: 'right',
		}
	);

	ScrollReveal().reveal(` .about__list, .video__frame, .why__wrapper, .why__list-item, .partners-box, .howtobuy__licenses, .howtobuy__payment-desc, .form, .footer`,  {
		origin: 'bottom',
	});	
}

export default scrollRevealFunc;