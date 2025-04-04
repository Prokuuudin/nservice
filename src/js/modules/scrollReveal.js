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
	
	ScrollReveal().reveal(`.header__row`, {
		delay: 400,
		origin: 'top',
	});

	ScrollReveal().reveal(` .about__consult `, {
		origin: 'left',
	});

	ScrollReveal().reveal( ` `,
		{
			origin: 'right',
		}
	);

	ScrollReveal().reveal(` .about__list, .footer`,  {
		origin: 'bottom',
	});	
}

export default scrollRevealFunc;