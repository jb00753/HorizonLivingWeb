document.addEventListener("DOMContentLoaded", function () {
	const signupForm = document.getElementById("signupForm");

	signupForm.addEventListener("submit", function (event) {
		event.preventDefault();

		// Simulate account creation
		alert("Account successfully created!");

		
	});
});