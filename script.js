const hamIcon = document.getElementById('hamburger');
const navOverlay = document.getElementById('nav-overlay');

function toggleNav() {
    hamIcon.classList.toggle('change');
    const visibility = navOverlay.getAttribute('data-visible');

    if (visibility === "false") {
        navOverlay.setAttribute("data-visible", true);
    } else {
        navOverlay.setAttribute("data-visible", false);
    }
}

hamIcon.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', toggleNav);