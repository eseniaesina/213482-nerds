var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var mail = popup.querySelector("[name=mail]");
var text = popup.querySelector("[name=text]");
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	if (!login.value || !mail.value || !text.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	}
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		}
	}
});