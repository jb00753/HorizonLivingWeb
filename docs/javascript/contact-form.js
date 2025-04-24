document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.contact-form');

	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault(); // prevent page reload
			alert('Thank you for contacting us! We’ll get back to you soon.');
			form.reset(); // clear the form fields
		});
	}
});