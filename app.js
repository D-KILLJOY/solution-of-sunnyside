const navB = document.querySelector(".nav-btn-con");
const navMenu = document.querySelector(".navigation");

const list = document.querySelector(".nav-menu");

list.addEventListener("click", () => {
	let show = navMenu.classList.contains("active");

	if (show) {
		navMenu.classList.remove("active");
	}
});

navB.addEventListener("click", () => {
	let show = navMenu.classList.contains("active");

	if (show) {
		navMenu.classList.remove("active");
	} else {
		navMenu.classList.add("active");
	}
});
