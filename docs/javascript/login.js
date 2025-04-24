document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.getElementById("loginForm");

	loginForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Stop the default form behavior

		const email = document.getElementById("email").value.trim();
		const password = document.getElementById("password").value.trim();

		if (email !== "" && password !== "") {
			alert("Login successful! Welcome to Horizon Living.");
			
		} else {
			alert("Please fill in all required fields.");
		}
	});
});
