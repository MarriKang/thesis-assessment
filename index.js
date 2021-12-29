function openMenu() {
    document.getElementById('hamburgerMenu').style.width = "250px";
}

function closeMenu() {
    document.getElementById('hamburgerMenu').style.width = "0";
}

const eyeIcon = document.getElementById('eye-icon');

eyeIcon.addEventListener("click", () => {
    const password = document.getElementById('pw-input');
    const icon = document.getElementById('eye-icon');

    if (password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }

    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
})
