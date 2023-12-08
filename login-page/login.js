const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const cont = document.getElementById('cont');

signUpBtn.addEventListener('click', () => {
	cont.classList.add("right-panel-active");
});

signInBtn.addEventListener('click', () => {
	cont.classList.remove("right-panel-active");
});

