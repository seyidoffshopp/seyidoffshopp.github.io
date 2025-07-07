document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerIcon && mobileMenu) { // Elementlərin mövcudluğunu yoxlayın
        hamburgerIcon.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
});
