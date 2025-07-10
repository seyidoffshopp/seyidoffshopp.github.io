document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menyu Funksionallığı Başlanğıcı
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    if (hamburger && navMenu && closeMenuBtn) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });
        closeMenuBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
        // Menyu elementinə kliklənəndə də menyu bağlansın (Mobil UX üçün)
        navMenu.querySelectorAll('ul li a').forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    // Hamburger Menyu Funksionallığı Sonu

    // Şəxsi Kabinet Modal Funksionallığı Başlanğıcı
    const personalCabinetBtn = document.getElementById('personal-cabinet-btn');
    const balanceAddButton = document.querySelector('.bottom-nav .balance-add-button');
    const personalCabinetModal = document.getElementById('personal-cabinet-modal');
    const closeModalButton = personalCabinetModal ? personalCabinetModal.querySelector('.close-button') : null;
    const tabButtons = document.querySelectorAll('.modal .tab-btn');
    const tabContents = document.querySelectorAll('.modal .tab-content');

    function openPersonalCabinetModal(e) {
        if (e) e.preventDefault();
        if (personalCabinetModal) {
            personalCabinetModal.style.display = 'block';
        }
    }

    if (personalCabinetBtn) {
        personalCabinetBtn.addEventListener('click', openPersonalCabinetModal);
    }
    if (balanceAddButton) {
        balanceAddButton.addEventListener('click', openPersonalCabinetModal);
    }

    if (personalCabinetModal) {
        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => {
                personalCabinetModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target == personalCabinetModal) {
                personalCabinetModal.style.display = 'none';
            }
        });

        tabButtons.forEach(button => {
